/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { appStateReducer } from "./AppReducer";

export const AppStateContext = createContext();

export const initialState = {
  isDarkMode: false,
  isNavbarScrolled: false
};

export const Action = {
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
  TOGGLE_NAVBAR_SCROLLED: "TOGGLE_NAVBAR_SCROLLED"
};

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};