import React, { ReactNode, createContext, useContext, useReducer } from "react";
import { reducer } from "./StateReducer";
import { ActionTypes } from "./ActionTypes";

export interface InitialStateType {
  sideBar: {
    isOpen: boolean;
    type: string;
  };
}
const initialState: InitialStateType = {
  sideBar: { isOpen: false, type: "CONTACT" },
};

export type Action = {
  type: ActionTypes;
  payload: any;
};

const StateContext = createContext<
  | {
      state: InitialStateType;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

export const StateContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be use within useStateProvider");
  }
  return context;
};
