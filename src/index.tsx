import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Root from "./Root";
import Project from "./screens/Project";
import Projects from "./screens/Projects";
import About from "./screens/About";
import Home from "./screens/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<Root />}>
          <Route path='' element={<Home />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/projects/:projectId"} element={<Projects />} />
          <Route path={"/project/:projectTitle"} element={<Project />} />
          <Route path={"/about"} element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
  // </React.StrictMode>
);
