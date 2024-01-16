import classNames from "classnames";
import Image from "next/image";
import React from "react";

type PropsType = {
  isFunnel?: boolean;
};
const SearchInput = ({ isFunnel }: PropsType) => {
  return (
    <div className="bg-[#EAF2FE] dark:bg-[#161C24] w-full h-[50px] rounded-[20px]">
      <div className="flex items-center gap-[10px] p-[13px] justify-between">
        <div
          className={classNames(
            isFunnel && "w-[83%]",
            "flex  items-center gap-[12px]"
          )}
        >
          <Image
            src="/icons/search-icon.svg"
            alt="search icon"
            width={24}
            height={24}
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full placeholder:text-[#709CE6] border-none focus:outline-none text-[16px] font-semibold text-[#709CE6]"
          />
        </div>
        {isFunnel && (
          <div className="w-[10%]">
            <Image
              src="/icons/funnel-simple.svg"
              alt="funnel simple"
              width={24}
              height={24}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
