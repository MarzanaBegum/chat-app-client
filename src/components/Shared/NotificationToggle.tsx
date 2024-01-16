"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames";

const NotificationToggle = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <label className="flex items-center justify-between">
      <div className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={() => console.log("clicked")}
        />
        <div
          className={classNames(
            "w-[34px] h-[18px] rounded-full dark:bg-[rgba(255,255,255,.35)] after:content-[''] after:absolute after:top-[3px] after:left-[5px] after:bg-[#fff] after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-[rgba(255,255,255,.35)] peer peer-checked:after:translate-x-full bg-[#CDCDCD] peer-checked:bg-[#5B96F7]"
          )}
        />
      </div>
    </label>
  );
};

export default NotificationToggle;
