"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Shared/InputField";
import Link from "next/link";
import toast from "react-hot-toast";
import api from "@/utils/api";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import ReusableButton from "../Shared/ReusableButton";
import { logIn } from "../../../redux/slices/auth";
import { useDispatch } from "react-redux";

export type LoginInput = {
  email: string;
  password: string;
};

const schema = yup.object({
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
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control } = useForm<LoginInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      setIsLoading(true);
      const response = await api.post("/auth/login", data, {
        headers: { "Content-Type": "application/json" },
      });
      setIsLoading(false);
      dispatch(logIn({ token: response.data?.token }));
      Cookies.set("token", response.data?.token);
      toast.success(response.data?.message);
      router.push("/dashboard/chats");
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
      <ReusableButton title="Login" loading={isLoading} />
    </form>
  );
};

export default LoginForm;
