"use client";

import { createContext, useCallback, useReducer } from "react";

// Create Context
const TunisContext = createContext();

// Type
const type = {
  NAV: "NAV",
  TOGGLE: "TOGGLE",
  COLOR: "COLOR",
  DIRECTION: "DIRECTION",
  POPUP: "POPUP",
  DARK: "DARK",
};
const { NAV, TOGGLE, COLOR, POPUP, DIRECTION, DARK } = type;

// Initial Value
const initialState = {
  nav: "home",
  toggle: false,
  color: "yellow",
  direction: "right",
  popup: null,
  blogs: [
    {
      id: 1,
      author: "steve",
      date: "09 December 2023",
      tags: "wordpress, business, economy, design",
      title: "How to Own Your Audience by Creating an Email List",
      img: "/assets/img/blog/blog-post-1.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
  dark: true,
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case TOGGLE:
      return {
        ...state,
        toggle: payload,
      };
    case COLOR:
      return {
        ...state,
        color: payload,
      };
    case DIRECTION:
      return {
        ...state,
        direction: payload,
      };
    case POPUP:
      return {
        ...state,
        popup: payload,
      };
    case DARK:
      return {
        ...state,
        dark: payload,
      };
    default:
      return state;
  }
};

// Watson State
const TunisState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = useCallback((value, toggleValue) => {
    dispatch({
      type: NAV,
      payload: value,
    });
    dispatch({
      type: TOGGLE,
      payload: toggleValue,
    });
  }, []);

  const changeColor = useCallback((value) => {
    dispatch({
      type: COLOR,
      payload: value,
    });
  }, []);

  const changeDirection = useCallback((value) => {
    dispatch({
      type: DIRECTION,
      payload: value,
    });
  }, []);

  const popupToggle = useCallback((value) => {
    dispatch({
      type: POPUP,
      payload: value,
    });
  }, []);

  const darkToggle = useCallback((value) => {
    dispatch({
      type: DARK,
      payload: value,
    });
  }, []);

  const { nav, toggle, color, direction, popup, blogs, dark } = state;
  return (
    <TunisContext.Provider
      value={{
        nav,
        changeNav,
        toggle,
        color,
        changeColor,
        direction,
        changeDirection,
        popupToggle,
        popup,
        blogs,
        dark,
        darkToggle,
      }}
    >
      {children}
    </TunisContext.Provider>
  );
};

export default TunisState;
export { TunisContext };
