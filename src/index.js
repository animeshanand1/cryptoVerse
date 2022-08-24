import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import {BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    
  </React.StrictMode>
);
