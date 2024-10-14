import { Action } from './AppProvider';

export const appStateReducer = (state, action) => {
  switch (action.type) {
    case Action.TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    case Action.TOGGLE_NAVBAR_SCROLLED:
      return { ...state, isNavbarScrolled: action.payload };
    default:
      return state;
  }
};