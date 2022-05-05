import React, { Component } from "react";
import {Routes, Route, Link, Router} from "react-router-dom";
import LogForm from "./LogForm";
import Form from "./Form";

class WelcomeMsg extends Component {

    render() {
        return (
            <div className="landing-container">
                <div>
                    <h1>
                        Support Buddy
                    </h1>
                    <h2>
                        Welcome!
                    </h2>
                    <br></br>
                    <p>
                        I am your support buddy! and I am here<br></br>
                        to help you get through life's rough times.
                    </p>
                    <p>
                        Please check in and let's start this journey together!
                    </p>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default WelcomeMsg;
