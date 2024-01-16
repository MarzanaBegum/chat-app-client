import React from "react";

interface CustomModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <div className="z-[9999999] fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          {children}
        </div>
      )}
    </>
  );
};

export default CustomModal;
