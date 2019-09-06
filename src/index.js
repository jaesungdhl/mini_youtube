// React Module
import React from "react";

// ReactDOM Module
import ReactDOM from "react-dom";

// React-Redux Module
import { Provider } from "react-redux";

// Components Module;
import App from "./components/App";

// Store Module
import Store from "./redux/Store/index";

ReactDOM.render(
    < Provider store={ Store }>
        < App />
    </ Provider > ,
    document.querySelector("#root")
);