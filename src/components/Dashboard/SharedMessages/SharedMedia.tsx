import Image from "next/image";
import React from "react";

const SharedMedia = () => {
  return (
    <div className="px-[20px] pb-[10px] hide-scroll h-[74vh]">
        <h3 className="text-[12px] font-semibold text-[#4F4F4F] dark:text-white">27th Oct 22</h3>
      <div className="grid grid-cols-3 gap-2 mt-[20px]">
        {[1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16].map((item, i) => (
          <div
            key={`index-${i}`}
            className="w-full bg-[rgba(242,242,242,0.07)] p-[6px] rounded-[10px] shadow-[0px_0px_4px_3px_rgba(0,0,0,0.04)]"
          >
            <Image
              src="/assets/images/car.svg"
              alt="media"
              width={79}
              height={79}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharedMedia;
