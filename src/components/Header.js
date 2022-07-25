import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="container flex">
                <NavLink className="logo" to="/">
                    CONDUIT
                </NavLink>
                <nav>
                    <ul className="flex nav">
                        <li>
                            <NavLink className="navlink" to="/" exact>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/signup">
                                Signup
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/login">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;