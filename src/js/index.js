//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";
import TrafficLight from "./component/home";


//render your react application

ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
