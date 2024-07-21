import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation, useRoutes } from "react-router-dom";
import Home from "./screens/Home";
import ErrorComponent from "./components/ErrorComponent";
import Projects from "./screens/Projects";
import Project from "./screens/Project";
import About from "./screens/About";
import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Headers";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/*************************** reset css ***************************/
body {
  background-color: #fafafa;
  color: #ff0066;
  overflow-x: hidden;
}
* {
  box-sizing: border-box;
}
a {
  color: #ff0066; 
}
::-webkit-scrollbar {
  height: 5px;
  width: 6px;
  background: #fafafa;
  -webkit-border-radius: 1ex;
}

::-webkit-scrollbar-thumb {
  background: #ff0066;
  -webkit-border-radius: 1ex;
}

::-webkit-scrollbar-corner {
  background: #fff3;
}

`;

function Root() {
  return (
    <>
      <GlobalStyle />
      <Outlet context={{ darkMode: true }} />
    </>
  );
}
export default Root;
