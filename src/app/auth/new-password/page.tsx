import CaretDownIcon from "@/components/CustomIcons/CaretDownIcon";
import NewPasswordForm from "@/components/Form/NewPasswordForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewPassword = () => {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <div className="w-[100%] lg:w-[50%] px-[20px]">
        <Image
          src="/icons/live-chat.svg"
          alt="whatsapp"
          width="0"
          height="0"
          priority
          className="mx-auto w-[90px] h-[90px]"
        />
        <div className="mt-6">
          <h2 className="text-[#161C24] text-[16px] font-medium">
            Reset password?
          </h2>
          <p className="text-[#161C24] text-[14px] font-normal mt-[6px] mb-[7px]">
            Please set your new password
          </p>
          <NewPasswordForm />
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

export default NewPassword;
