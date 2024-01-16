import React from "react";
import CrossIcon from "../CustomIcons/CrossIcon";
import { useTheme } from "next-themes";
import CreateGroupFrom from "../Form/CreateGroupFrom";
import CustomModal from "./CustomModal";

interface CreateGroupModalProps {
  isOpen: boolean;
  handleOnClose: () => void;
}

const CreateGroupModal: React.FC<CreateGroupModalProps> = ({
  isOpen,
  handleOnClose,
}) => {
  const { theme, setTheme } = useTheme();
  return (
    <CustomModal isOpen={isOpen}>
      <div className="bg-white dark:bg-[#111b21] p-6 rounded-lg z-10 w-[calc(100vw-40px)] max-w-[462px]">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[21px] font-bold text-black dark:text-[#c5c2c2]">
            Create New Group
          </h2>
          <div onClick={handleOnClose} className="cursor-pointer">
            <CrossIcon color={theme === "light" ? "black" : "#FFFFFF"} />
          </div>
        </div>
        <CreateGroupFrom />
      </div>
    </CustomModal>
  );
};

export default CreateGroupModal;
