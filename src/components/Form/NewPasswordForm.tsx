"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Shared/InputField";
import ReusableButton from "../Shared/ReusableButton";

export type ResetPasswordInput = {
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords does not match")
    .required(),
});

const NewPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control } = useForm<ResetPasswordInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ResetPasswordInput) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-[15px] flex-col"
    >
      <InputField
        label="Password"
        control={control}
        name="password"
        isPassword={true}
        placeholder="Enter Your Password"
      />
      <InputField
        label="Confirm Password"
        control={control}
        name="confirmPassword"
        isPassword={true}
        placeholder="Enter Your Password"
      />
      <ReusableButton title="Submit" loading={isLoading} />
    </form>
  );
};

export default NewPasswordForm;
