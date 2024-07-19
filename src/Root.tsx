import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import Home from "./screens/Home";
import ErrorComponent from "./components/ErrorComponent";
import Projects from "./screens/Projects";
import Project from "./screens/Project";
import About from "./screens/About";
import React from "react";

interface IProps {
  id: number;
  title: string;
  img: string;
}
function Root({ id, title, img }: IProps) {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorComponent />,
    },
    {
      path: "/project",
      element: <Projects id={id} title={title} img={img} />,
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
