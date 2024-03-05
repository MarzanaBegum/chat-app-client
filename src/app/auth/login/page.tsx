import LoginForm from "@/components/Form/LoginForm";
import SocialIcon from "@/components/Form/SocialIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <div className="w-[100%] lg:w-[50%] px-[20px]">
        <Image
          src="/icons/live-chat.svg"
          alt="live-chat"
          width="0"
          height="0"
          priority
          className="mx-auto w-[120px] h-[120px]"
        />
        <div>
          <h2 className="text-[24px] mt-[20px] font-medium text-[#000]">
            Login
          </h2>
          <h3 className="text-[16px] font-normal text-[#000] mt-[5px] mb-[10px]">
            New user?{" "}
            <span className="text-primary-main">
              <Link href="/auth/register">Create new account</Link>
            </span>
          </h3>
          <LoginForm />
        </div>
        <SocialIcon />
      </div>
    </div>
  );
};

export default LoginPage;
