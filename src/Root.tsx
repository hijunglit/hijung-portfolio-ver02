import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation, useRoutes } from "react-router-dom";
import Header from "./components/Headers";
import { createGlobalStyle } from "styled-components";
import Home from "./screens/Home";
import ErrorComponent from "./components/ErrorComponent";
import Projects from "./screens/Projects";
import Project from "./screens/Project";
import About from "./screens/About";
import React from "react";

function Root() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorComponent />,
    },
    {
      path: "/project",
      element: <Projects />,
    },
    {
      path: "/project/:projectTitle",
      element: <Project />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  const location = useLocation();
  if (!element) return null;

  return (
    <AnimatePresence mode='wait'>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
export default Root;
