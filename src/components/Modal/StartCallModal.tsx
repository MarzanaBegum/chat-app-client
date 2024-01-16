import React from "react";
import CustomModal from "./CustomModal";
import { useTheme } from "next-themes";
import CrossIcon from "../CustomIcons/CrossIcon";
import SearchInput from "../Shared/SearchInput";
import MembersList from "../Dashboard/Call/MembersList";
import { membersList } from "@/utils/constants";

interface StartCallModalProps {
  isOpen: boolean;
  handleOnClose: () => void;
}

const StartCallModal: React.FC<StartCallModalProps> = ({
  isOpen,
  handleOnClose,
}) => {
  const { theme, setTheme } = useTheme();
  return (
    <CustomModal isOpen={isOpen}>
      <div className="bg-white dark:bg-[#111b21] p-6 rounded-lg z-10 w-[calc(100vw-40px)] max-w-[462px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[21px] font-bold text-black dark:text-[#c5c2c2]">
            Start Call
          </h2>
          <div onClick={handleOnClose} className="cursor-pointer">
            <CrossIcon color={theme === "light" ? "black" : "#FFFFFF"} />
          </div>
        </div>
        <SearchInput />
        <div className="flex flex-col gap-[18px] mt-[20px] hide-scroll h-[45vh]">
          {membersList.map((member, i) => (
            <MembersList key={`index-${i}`} member={member}/>
          ))}
        </div>
      </div>
    </CustomModal>
  );
};

export default StartCallModal;
