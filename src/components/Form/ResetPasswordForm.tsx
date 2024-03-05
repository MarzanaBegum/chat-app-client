"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Shared/InputField";
import ReusableButton from "../Shared/ReusableButton";
import api from "@/utils/api";
import toast from "react-hot-toast";

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

  const onSubmit = async (data: ResetPasswordInput) => {
    try {
      setIsLoading(true);
      const response = await api.post("/auth/forgot-password", data, {
        headers: { "Content-Type": "application/json" },
      });
      setIsLoading(false);
      toast.success(response.data?.message);
    } catch (error: any) {
      setIsLoading(false);
      const err = error.response ? error.response.data.messages : error.message;
      toast.error(err);
    }
  };

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
