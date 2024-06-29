import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // Provider linking the redux with react means App component can access redux 
  <Provider store={store}>
    <App />
  </Provider>
);
