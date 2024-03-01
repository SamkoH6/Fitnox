import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import "./utilities.css";
import "./tablet.css";
import "./mobile.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
