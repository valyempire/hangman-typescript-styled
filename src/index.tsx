import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Imports styles
 */
import "./index.css";

/**
 * Imports components
 */
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
