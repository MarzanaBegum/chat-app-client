import React from "react";
import CrossIcon from "../CustomIcons/CrossIcon";
import { useTheme } from "next-themes";
import CreateGroupFrom from "../Form/CreateGroupFrom";

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
    <>
      {isOpen && (
        <div className="z-[9999999] fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="bg-white dark:bg-[#111b21] p-6 rounded-lg z-10 w-[calc(100vw-40px)] max-w-[561px]">
            <div className="flex justify-between items-center">
              <h2 className="text-[21px] font-bold mb-4 text-black dark:text-[#c5c2c2]">Create New Group</h2>
              <div onClick={handleOnClose} className="cursor-pointer">
                <CrossIcon color={theme === "light" ? "black" : "#FFFFFF"} />
              </div>
            </div>
            <CreateGroupFrom />
          </div>
        </div>
      )}
    </>
  );
};

export default CreateGroupModal;
