"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Shared/InputField";

export type RegisterInput = {
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

const RegisterForm = () => {
  const {
    handleSubmit,
    control,
  } = useForm<RegisterInput>({ resolver: yupResolver(schema) });

  const onSubmit = (data: RegisterInput) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-[15px] flex-col"
    >
      <div className="flex gap-[20px]">
        <InputField
          label="First Name"
          name="firstName"
          control={control}
          placeholder="Enter your first name"
        />
        <InputField
          label="Last Name"
          name="lastName"
          control={control}
          placeholder="Enter your last name"
        />
      </div>
      <InputField
        label="Email"
        name="email"
        control={control}
        placeholder="Enter your email"
      />
      <InputField
        label="Password"
        name="password"
        control={control}
        isPassword={true}
        placeholder="Enter your password"
      />
      <button
        type="submit"
        className="w-full bg-[#161C24] text-[16px] font-medium text-white h-[50px] rounded-md"
      >
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
