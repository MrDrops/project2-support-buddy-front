import React, { Component } from "react";
import {Routes, Route, Link, Router} from "react-router-dom";
import LogForm from "./LogForm";
import Form from "./Form";
import Survey from "./Survey";

class LandingPage extends Component {

    render() {
        return (
            <div className="landing-container">


                <nav className="log-links">
                    <ul>               
                        <li>
                            <Link to="/form">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/logForm">Log In</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/form/*" element={<Form/>}>
                    </Route>
                    <Route path="/logForm/*" element={<LogForm/>}>
                    </Route>
                    <Route path="/survey" element={<Survey/>}>
                    </Route>
                </Routes>
            </div>
        );
    }
}

export default LandingPage;
