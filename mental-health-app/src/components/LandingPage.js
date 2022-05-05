import React, { Component } from "react";
import {Routes, Route, Link, Router} from "react-router-dom";
import LogInForm from "./LogInForm";
import Form from "./Form";

class LandingPage extends Component {

    render() {
        return (
            <div className="landing-container">
                Welcome message here.

                <nav className="log-links">
                    <ul>               
                        <li>
                            <Link to="/form">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/loginform">Log In</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/form" element={<Form/>}>
                    </Route>
                    <Route path="/loginform" element={<LogInForm/>}>
                    </Route>
                </Routes>
            </div>
        );
    }
}

export default LandingPage;
