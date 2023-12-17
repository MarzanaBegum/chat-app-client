"use client";
import ThreeDots from "@/components/CustomIcons/ThreeDots";
import React, { useState } from "react";
import MessageMenu from "./MessageMenu";

const MessageOptions = ({ item }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = (id: any) => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative">
      <div onClick={() => handleMenuOpen(item.id)} className="cursor-pointer">
        <ThreeDots />
      </div>
      {isMenuOpen && <MessageMenu item={item} />}
    </div>
  );
};

export default MessageOptions;
