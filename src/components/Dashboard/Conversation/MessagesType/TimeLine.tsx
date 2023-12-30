import React from "react";

const TimeLine = ({ element }: any) => {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <hr  className="w-[260px] h-[0.2px] bg-[#a4a4a4]"/>
      <h2 className="text-[14px] font-semibold text-[#696969] dark:text-[#c5c2c2] px-[15px]">Today</h2>
      <hr  className="w-[260px] h-[0.2px] bg-[#a4a4a4]"/>
    </div>
  );
};

export default TimeLine;
