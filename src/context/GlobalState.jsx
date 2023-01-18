import { createContext, useContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";
import { initialState } from "./AppReducer";
const GlobalContext = createContext();
const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ basket: state.basket, user: state.user, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
export const useAuth = () => {
  useContext(GlobalContext);
};
