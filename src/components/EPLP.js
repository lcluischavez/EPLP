import React from "react"
import { Route, Redirect } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
import "./EPLP.css"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Navbar from "./nav/Navbar"


export default () => (
    <>
        <header>
            <section className="background"></section>
        </header>
        <Route render={() => {
            if (localStorage.getItem("currentUser")) {
                return (
                    <>
                        <Route render={props => <Navbar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </> 
)
