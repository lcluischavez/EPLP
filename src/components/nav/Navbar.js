import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">EPLP</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/MyCollection">My Collection</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Mixtapes">Mixtapes</Link>
            </li>
            {
                localStorage.getItem("currentUser")
                    ? <li className="navbar__item">
                        <Link className="navbar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("currentUser")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}