import CaretDownIcon from "@/components/CustomIcons/CaretDownIcon";
import ResetPasswordForm from "@/components/Form/ResetPasswordForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResetPassword = () => {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <div className="w-[100%] lg:w-[50%] px-[20px]">
        <Image
          src="/icons/whatsapp.svg"
          alt="whatsapp"
          width="0"
          height="0"
          priority
          className="mx-auto w-[120px] h-[120px]"
        />
        <div>
          <h2 className="text-[#161C24] text-[16px] font-medium">
            Forgot your password?
          </h2>
          <p className="text-[#161C24] text-[14px] font-normal mt-[6px] mb-[7px]">
            Please enter the email address associated with your account and We
            will email you a link to reset your password.
          </p>
          <ResetPasswordForm />
          <Link href="/auth/login">
            <span className="text-[#447ec9] font-medium text-[14px] mt-[10px] flex gap-1 items-center">
              <CaretDownIcon
                className={"rotate-90"}
                stroke="#447ec9"
                width="16"
                height="16"
              />
              Return to login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
