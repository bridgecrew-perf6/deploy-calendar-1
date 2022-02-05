import "./index.scss"
import "bootstrap"

import React from "react"
import ReactDOM from "react-dom"

import Greeter from "./greeter"
import Calc from "./calc"


ReactDOM.render(<Greeter calc={new Calc()}/>, document.getElementById("app"))