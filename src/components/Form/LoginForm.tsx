"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Shared/InputField";
import Link from "next/link";

export type LoginInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

const LoginForm = () => {
  const { handleSubmit, control } = useForm<LoginInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginInput) => console.log(data);

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
      <div>
        <InputField
          label="Password"
          control={control}
          name="password"
          isPassword={true}
          placeholder="Enter Your Password"
        />
        <Link href="/auth/reset-password">
          <h3 className="text-[#447ec9] font-medium text-[14px] mt-[6px] flex justify-end">
            Forgot password?
          </h3>
        </Link>
      </div>
      <button
        type="submit"
        className="w-full bg-[#161C24] text-[16px] font-medium text-white h-[50px] rounded-md"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
