import RegisterForm from "@/components/Form/RegisterForm";
import SocialIcon from "@/components/Form/SocialIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex flex-col h-screen hide-scroll w-full justify-center items-center">
      <div className="w-[100%] lg:w-[50%] px-[20px] py-[20px]">
        <Image
          src="/icons/whatsapp.svg"
          alt="whatsapp"
          width="0"
          height="0"
          priority
          className="mx-auto w-[120px] h-[120px]"
        />
        <div className="hide-scroll">
          <h2 className="text-[24px] mt-[10px] font-medium text-[#000]">
            Create a new account
          </h2>
          <h3 className="text-[16px] font-normal text-[#000] mt-[5px] mb-[10px]">
            Already have an account?{" "}
            <span className="text-primary-main">
              <Link href="/auth/login">Login</Link>
            </span>
          </h3>
          <RegisterForm />
        </div>
        <SocialIcon />
      </div>
    </div>
  );
};

export default RegisterPage;
