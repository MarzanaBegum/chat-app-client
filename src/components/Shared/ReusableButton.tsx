import React, { FC } from "react";

interface ReusableButtonProps {
  loading: boolean;
  title: string;
}

const ReusableButton: FC<ReusableButtonProps> = ({ loading, title }) => {
  return (
    <button
      type="submit"
      className={`w-full bg-[#161C24] text-[16px] font-medium text-white h-[50px] rounded-md focus:shadow-outline ${
        loading && "opacity-50"
      }`}
      disabled={loading}
    >
      {loading ? "Loading..." : title}
    </button>
  );
};

export default ReusableButton;
