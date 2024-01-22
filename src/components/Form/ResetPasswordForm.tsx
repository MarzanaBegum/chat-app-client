"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Shared/InputField";
import Link from "next/link";
import ReusableButton from "../Shared/ReusableButton";

export type ResetPasswordInput = {
  email: string;
};

const schema = yup.object({
  email: yup.string().email().required(),
});

const ResetPasswordForm = () => {
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
        label="Email"
        name="email"
        control={control}
        placeholder="Enter Your Email"
      />
      <ReusableButton title="Send Request" loading={isLoading} />
    </form>
  );
};

export default ResetPasswordForm;
