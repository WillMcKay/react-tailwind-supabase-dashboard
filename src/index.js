import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';

// Create a root and render the App component
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
