import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //its necessary to wrap the app component with browser router else we will have error.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
