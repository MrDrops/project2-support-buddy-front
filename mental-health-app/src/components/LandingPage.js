import React, { Component } from "react";
import {Routes, Route, Link, Router} from "react-router-dom";
import LogForm from "./LogForm";
import Form from "./Form";
import Survey from "./Survey";
import Fader from "./Fader";

class LandingPage extends Component {

    render() {
        return (
            <div className="landing-container">
                <div className="hometext">
                
                    <h1>Support Buddy</h1>

                    <br></br><br></br>

                    <h2 className="fade-in-1">
                        Welcome 👋
                    </h2>

                   <br></br><br></br>

                    <h3 className="fade-in-2">
                        I am your Support Buddy! 🤗
                    </h3>

                    <br></br><br></br>
                        
                    <h3 className="fade-in-3">
                    Together we will develop skills, habits, and routines to help manage the complexities of life!
                    </h3>
                    
                    
                    
                    </div>
            </div>
        );
    }
}

export default LandingPage;
