import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App/index";
import * as serviceWorker from "./util/serviceWorker";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

ReactDOM.render(
  <App history={customHistory} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
