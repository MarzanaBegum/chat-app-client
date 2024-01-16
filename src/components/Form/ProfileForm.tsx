"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Shared/InputField";

export type ProfileInput = {
  name: string;
  about: string;
  avatarUrl: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  about: yup.string().required("About is required"),
  avatarUrl: yup.string().required("Avatar is required"),
});

const ProfileForm = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<ProfileInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ProfileInput) => console.log("data.....", data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-[15px] flex-col"
    >
      <InputField
        label="Name"
        name="name"
        control={control}
        placeholder="Enter Your Name"
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
