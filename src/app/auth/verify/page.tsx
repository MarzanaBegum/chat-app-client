import VerifyOtpFrom from "@/components/Form/VerifyOtpFrom";
import Image from "next/image";
import React from "react";

const VerifyOtpPage = () => {
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
          <h2 className="text-[24px] mt-[20px] font-medium text-[#000]">
            Please verify OTP
          </h2>
          <h3 className="text-[16px] font-normal text-[#000] mt-[5px] mb-[10px]">
            Send to email example@example.com
          </h3>
          <VerifyOtpFrom />
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
