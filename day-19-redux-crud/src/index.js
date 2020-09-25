import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import storeReduducers from "./redux/store";

ReactDOM.render(
  <Provider store={storeReduducers}>
    <App />
  </Provider>,
  document.getElementById("root")
);
