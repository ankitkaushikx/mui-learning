import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme.js";
const root = createRoot(document.getElementById("root"));

// Use root.render to render your React element
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
