import React, { Component } from "react";
import {Routes, Route, Link, Router} from "react-router-dom";
import LogForm from "./LogForm";
import Form from "./Form";
import Survey from "./Survey";

class LandingPage extends Component {

    render() {
        return (
            <div className="landing-container">

            <p>Support Body helps you develop healthy habits.</p>
            </div>
        );
    }
}

export default LandingPage;
