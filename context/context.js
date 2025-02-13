"use client";

import { createContext, useCallback, useReducer } from "react";
import { Blog1 } from "../components/Blog1";
import { Blog2 } from "../components/Blog2";
import { Blog3 } from "../components/Blog3";

// Create Context
const SiteContext = createContext();

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
      author: "Petr Penicka",
      date: "8 January 2025",
      tags: "React, TypeScript, jQuery, refactoring, modernization",
      title: "Lessons from The Past: Modernizing a Pre-React jQuery Codebase",
      img: "/assets/img/blog/frontend-evolution.png",
      desc: "In this blog post, I share my experience modernizing an old jQuery codebase—from removing jQuery and adopting TypeScript to refactoring incrementally for maintainability.",
      contentComponent: Blog1,
    },
    {
      id: 2,
      author: "Petr Penicka",
      date: "5 February 2025",
      tags: "React, Vue.js, Next.js, Nuxt.js",
      title: "A Foot in Both Camps: My Experience With React and Vue.js",
      img: "/assets/img/blog/react-vue.png",
      desc: "Ever wondered how developers switch between React and Vue.js? In this article, I share my journey across both frameworks, showing that once you’ve mastered the fundamentals in one, you’re already halfway to mastering the other.",
      contentComponent: Blog2,
    },
    {
      id: 3,
      author: "Petr Penicka",
      date: "13 February 2025",
      tags: "freelance, remote work, productivity, work-life balance",
      title:
        "One Year of Freelancing: Lessons in Flexibility, Growth and Independence",
      img: "/assets/img/blog/home-office.png",
      desc: "A year into freelancing, I’ve unlocked new skills, greater flexibility, and a whole new way of thinking. Here’s what I’ve learned outside the world of 9-to-5.",
      contentComponent: Blog3,
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
const SiteState = ({ children }) => {
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
    <SiteContext.Provider
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
    </SiteContext.Provider>
  );
};

export default SiteState;
export { SiteContext };
