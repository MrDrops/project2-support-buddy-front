import React, { Component } from "react";
import {Routes, Route, Link, Router} from "react-router-dom";

class LandingPage extends Component {

    render() {
        return (
            <div>
                Welcome message here.

                <nav className="Navbar">
                    <ul>               
                        <li>
                            <Link to="/form">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/survey">Survey</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                <Route path="/form" element={<Form/>}>
                </Route>
                <Route path="/survey" element={<Survey/>}>
                </Route>
                </Routes>
            </div>
        );
    }
}

export default LandingPage;