import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import EPLP from "./components/EPLP"

ReactDOM.render(
    <Router>
        <EPLP />
    </Router>
    , document.getElementById("root"))