"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <div
          className={`w-[53px] h-7 rounded-full dark:bg-[rgba(255,255,255,.35)] after:content-[''] after:absolute after:top-[4px] after:left-[6px] after:bg-[#fff] after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${
            theme === "light"
              ? "after:translate-x-full bg-[#5B96F7] peer-checked:bg-[#5B96F7] peer peer-checked:after:translate-x-full peer-focus:outline-none"
              : " bg-[#CDCDCD]"
          }`}
        />
      </div>
    </label>
  );
};

export default ToggleButton;
