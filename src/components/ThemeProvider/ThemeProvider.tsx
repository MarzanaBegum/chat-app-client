"use client";
import { StateContextProvider } from "@/Context/StateContext";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import React from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <StateContextProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        {...props}
      >
        {children}
      </NextThemesProvider>
    </StateContextProvider>
  );
};

export default ThemeProvider;
