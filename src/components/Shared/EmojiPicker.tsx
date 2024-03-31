import data from "@emoji-mart/data";
import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";
import Picker from "@emoji-mart/react";

interface PickerEmojiType {
  setMessage: (message: string) => void;
  setIsEmoji: (isEmoji: boolean) => void;
  handleEmojiClick: (emoji: any) => void;
}
const PickEmoji = ({
  setMessage,
  setIsEmoji,
  handleEmojiClick,
}: PickerEmojiType) => {
  const { theme, setTheme } = useTheme();
  const emojiRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleEmojiOutSideClick = (event: MouseEvent) => {
      if (event.target && (event.target as HTMLElement).id !== "emoji-open") {
        if (
          emojiRef.current &&
          !emojiRef.current.contains(event.target as Node)
        ) {
          setIsEmoji(false);
        }
      }
    };
    document.addEventListener("click", handleEmojiOutSideClick);
    return () => {
      document.removeEventListener("click", handleEmojiOutSideClick);
    };
  }, []);
  return (
    <div className="absolute right-[10px] top-[-440px] z-10" ref={emojiRef}>
      <Picker
        data={data}
        theme={theme}
        onEmojiSelect={(emoji: any) => handleEmojiClick(emoji.native)}
      />
    </div>
  );
};

export default PickEmoji;
