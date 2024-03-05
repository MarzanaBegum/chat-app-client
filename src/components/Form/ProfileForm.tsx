"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Shared/InputField";
import { useSelector } from "react-redux";

export type ProfileInput = {
  firstName: string;
  lastName: string;
  about: string;
  // avatar: string;
};

const schema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  about: yup.string().required("About is required"),
  // avatar: yup.string().required("Avatar is required"),
});

const ProfileForm = () => {
  const { firstName, lastName, _id, about, avatar } = useSelector(
    (state: any) => state.auth.user
  );
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm<ProfileInput>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("firstName", firstName);
    setValue("lastName", lastName);
    setValue("about", about);
  }, [firstName, lastName, setValue]);

  const onSubmit = (data: ProfileInput) => console.log("data.....", data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-[15px] flex-col"
    >
      <InputField
        label="First Name"
        name="firstName"
        control={control}
        placeholder="Enter Your first Name"
      />
      <InputField
        label="Last Name"
        name="lastName"
        control={control}
        placeholder="Enter Your last Name"
      />
      <div>
        <label className="block text-[#252C48] dark:text-[#c5c2c2] text-sm xl:text-base leading-[1.5] font-medium">
          About
        </label>
        <textarea
          {...register("about", { required: true })}
          cols={4}
          rows={4}
          placeholder="Write here..."
          className="border text-[#252C48] leading-[1.5] xl:text-sm text-xs border-[#C8CBD0] focus:outline focus:outline-[#5B96F7] bg-transparent p-[15px] rounded-md w-full mt-[6px]"
        ></textarea>
        {errors.about && (
          <span className="text-[#FC6C62] text-[12px] leading-[16px]  font-normal">
            {errors?.about?.message?.toString()}
          </span>
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="w-[120px] h-[40px] bg-transparent border border-[#5B96F7] text-[16px] font-medium text-[#5B96F7] rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
