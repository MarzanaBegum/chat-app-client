import React from "react";
import CustomModal from "./CustomModal";

interface ShortCutModalProps {
  isOpen: boolean;
  handleOnClose: () => void;
}

const ShortCutModal: React.FC<ShortCutModalProps> = ({
  isOpen,
  handleOnClose,
}) => {
  const list = [
    {
      key: 0,
      title: "Mark as unread",
      combination: ["Cmd", "Shift", "U"],
    },
    {
      key: 1,
      title: "Mute",
      combination: ["Cmd", "Shift", "M"],
    },
    {
      key: 2,
      title: "Archive Chat",
      combination: ["Cmd", "Shift", "E"],
    },
    {
      key: 3,
      title: "Delete Chat",
      combination: ["Cmd", "Shift", "D"],
    },
    {
      key: 4,
      title: "Pin Chat",
      combination: ["Cmd", "Shift", "P"],
    },
    {
      key: 5,
      title: "Search",
      combination: ["Cmd", "F"],
    },
    {
      key: 6,
      title: "Search Chat",
      combination: ["Cmd", "Shift", "F"],
    },
    {
      key: 7,
      title: "Next Chat",
      combination: ["Cmd", "N"],
    },
    {
      key: 8,
      title: "Next Step",
      combination: ["Ctrl", "Tab"],
    },
    {
      key: 9,
      title: "Previous Step",
      combination: ["Ctrl", "Shift", "Tab"],
    },
    {
      key: 10,
      title: "New Group",
      combination: ["Cmd", "Shift", "N"],
    },
    {
      key: 11,
      title: "Profile & About",
      combination: ["Cmd", "P"],
    },
    {
      key: 12,
      title: "Increase speed of voice message",
      combination: ["Shift", "."],
    },
    {
      key: 13,
      title: "Decrease speed of voice message",
      combination: ["Shift", ","],
    },
    {
      key: 14,
      title: "Settings",
      combination: ["Shift", "S"],
    },
    {
      key: 15,
      title: "Emoji Panel",
      combination: ["Cmd", "E"],
    },
    {
      key: 16,
      title: "Sticker Panel",
      combination: ["Cmd", "S"],
    },
  ];
  return (
    <CustomModal isOpen={isOpen}>
      <div className="bg-white p-6 rounded-lg z-10  w-[calc(100vw-40px)] max-w-[900px] max-h-[566px] hide-scroll">
        <h2 className="text-[16px] font-bold leading-[21.86px] mb-[20px] text-[#424242]">
          Keyboard Shortcuts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[20px] gap-x-[40px]">
          {list.map((listItem, i) => (
            <div key={`item-${i}`} className="flex justify-between gap-2">
              <h2 className="text-[14px] font-bold leading-[19.12px] text-[#515151]">
                {listItem.title}
              </h2>
              <div className="flex gap-[10px] flex-wrap justify-end">
                {listItem.combination.map((item, i) => (
                  <div key={`item-${i}`}>
                    <button className="w-[67px] h-[22px] text-[14px] text-[#515151] rounded-[4px] bg-[#F3F3F3] border border-[#515151]">
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-[15px]">
          <button
            className="bg-[#3366FF] w-[83px] h-[30px] text-[13px] font-bold rounded-[8px] text-white"
            onClick={handleOnClose}
          >
            OK
          </button>
        </div>
      </div>
    </CustomModal>
  );
};

export default ShortCutModal;
