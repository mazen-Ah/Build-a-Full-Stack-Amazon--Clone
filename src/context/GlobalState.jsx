import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { initialState } from "./AppReducer";
export const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ basket: state.basket, user: state.user, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(GlobalContext);
};
export default GlobalProvider;
