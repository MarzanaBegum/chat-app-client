import React from "react";
import CustomModal from "./CustomModal";

interface BlockOrDeleteModalProps {
  isOpen: boolean;
  handleOnClose: () => void;
  handleOnClick: () => void;
  title: string;
}

const BlockOrDeleteModal: React.FC<BlockOrDeleteModalProps> = ({
  isOpen,
  handleOnClose,
  handleOnClick,
  title,
}) => {
  return (
    <CustomModal isOpen={isOpen}>
      <div className="bg-white dark:bg-[#111b21] p-6 rounded-lg z-10 w-[calc(100vw-40px)] max-w-[462px]">
        <h2 className="text-2xl font-bold mb-2 text-black dark:text-[#c5c2c2]">
          {title} Chat
        </h2>
        <p className="text-gray-700 dark:text-[#c5c2c2] mb-4">
          Are you sure you want to {title.toLowerCase()} this chat?
        </p>

        <div className="flex justify-end">
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 mr-2 rounded"
            onClick={handleOnClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleOnClick}
          >
            {title}
          </button>
        </div>
      </div>
    </CustomModal>
  );
};

export default BlockOrDeleteModal;
