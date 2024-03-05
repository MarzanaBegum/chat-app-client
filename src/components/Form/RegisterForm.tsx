"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Shared/InputField";
import toast from "react-hot-toast";
import api from "@/utils/api";
import ReusableButton from "../Shared/ReusableButton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateRegisterEmail } from "../../../redux/slices/auth";

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
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control } = useForm<RegisterInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterInput) => {
    try {
      setIsLoading(true);
      const response = await api.post("/auth/register", data, {
        headers: { "Content-Type": "application/json" },
      });
      setIsLoading(false);
      dispatch(updateRegisterEmail({ email: data.email }));
      toast.success(response.data?.message);
      router.push("/auth/verify");
    } catch (error: any) {
      setIsLoading(false);
      const err = error.response
        ? error.response?.data.messages
        : error.message;
      toast.error(err);
    }
  };

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
      <ReusableButton title="Create Account" loading={isLoading} />
    </form>
  );
};

export default RegisterForm;
