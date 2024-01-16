"use client"
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./store";

interface ReduxStoreProps {
  children: ReactNode;
}

const ReduxStore: React.FC<ReduxStoreProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxStore;
