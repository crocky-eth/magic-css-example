import React from "react";
import ReactDOM from "react-dom";
import MagicCss from "@frontend-ninjas/magic-css";

import App from "./App";

const magic = new MagicCss({
  fontFamily: "sans-serif",
  colors: [
    // 'color' - direct colors supported by default CSS
    "blue",
    "yellow",
    "grey",
    // ['color-name', 'hex/rgb/hsl']
    ["red", "#ff0000"],
    ["opacity-05", "rgba(255,255,255,0.5)"],
    ["hsl-example", "hsl(0deg 100% 50% / 39%)"]
  ],
  variables: [
    // ['property', 'css-value']
    ["border", "1px solid red"],
    ["border-bottom", "1px solid blue"],
    // ['property', ['identity', 'css-value']]
    ["border", [2, "1px solid black"]],
    ["border", ["blue", "1px solid blue"]],
    ["border-bottom", ["h1", "2px solid red"]],
    // gradient background example
    ["background", ["gradient", "linear-gradient(180deg, #000 0%, #fff 100%)"]]
  ]
});

const magicCss = document.createElement("style");
magicCss.innerHTML = magic.getStyle();
document.head.append(magicCss);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
