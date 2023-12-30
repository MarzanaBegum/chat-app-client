import classNames from "classnames";
import React from "react";

const ReplyMsg = ({ element }: any) => {
  return (
    <div
      className={classNames(
        element.incoming ? "bg-[#FFFFFF] dark:bg-[#161C24]" : "bg-[#5B96F7]",
        "px-4 max-w-[60%] py-[9px] rounded-2xl"
      )}
    >
      <div
        className={classNames(
          element.incoming ? "bg-[#5B96F7]" : "bg-[#FFFFFF]",
          "mb-[6px] p-2 rounded-md"
        )}
      >
        <h2
          className={classNames(
            element.incoming ? "text-[#FFFFFF]" : "text-[#696969]",
            "break-all text-[14px] font-semibold"
          )}
        >
          {element.message}
        </h2>
      </div>
      <h2
        className={classNames(
          element.incoming ? "text-[#696969]" : "text-[#FFFFFF]",
          "break-all text-[14px] font-semibold"
        )}
      >
        {element.reply}
      </h2>
    </div>
  );
};

export default ReplyMsg;
