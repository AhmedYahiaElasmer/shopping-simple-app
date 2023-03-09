import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import BootStrap Library
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import FontAwesome Library
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
// Components
import App from "./App";
// Root CreateRoot
const root = ReactDOM.createRoot(document.querySelector("#root"));
// Root Render
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
