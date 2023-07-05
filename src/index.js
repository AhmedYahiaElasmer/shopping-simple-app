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
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { Usercontextprovider } from "./components/usecontext";
import { Currancycontextprovider } from "./components/currancycontext";
import "react-toastify/dist/ReactToastify.css";
// Root CreateRoot
const root = ReactDOM.createRoot(document.querySelector("#root"));
// Root Render
root.render(
  <Provider store={store}>
    <Usercontextprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Usercontextprovider>
  </Provider>
);
