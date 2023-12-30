import Image from "next/image";
import React from "react";

const SocialIcon = () => {
  return (
    <div className="mt-[20px]">
      <div className="flex justify-between items-center">
        <div className="w-[50%] border-t border-gray-300"></div>
        <span className="text-black px-4 font-semibold">OR</span>
        <div className="w-[50%] border-t border-gray-300"></div>
      </div>
      <div className="flex mt-[20px] justify-center gap-[20px]">
        <Image src="/icons/google-icon.svg" alt="github" width={30} height={30} />
        <Image src="/icons/twitter.svg" alt="github" width={30} height={30} />
        <Image src="/icons/github.svg" alt="github" width={30} height={30} />
      </div>
    </div>
  );
};

export default SocialIcon;
