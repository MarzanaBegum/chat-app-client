"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Shared/InputField";
import Link from "next/link";

export type ResetPasswordInput = {
  email: string;
};

const schema = yup.object({
  email: yup.string().email().required(),
});

const ResetPasswordForm = () => {
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
        label="Email"
        name="email"
        control={control}
        placeholder="Enter Your Email"
      />
      <button
        type="submit"
        className="w-full bg-[#161C24] text-[16px] font-medium text-white h-[50px] rounded-md"
      >
        Send Request
      </button>
    </form>
  );
};

export default ResetPasswordForm;
