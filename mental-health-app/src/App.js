import React, { useState } from "react";
import Form from "./components/Form";
import PopUpMessage from "./components/PopUpMessage";
import Cards from "./components/Cards"
import "./App.css";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import Survey from './components/Survey'
import "./App.scss";
import TestPage from "./components/TestPage";
import "./components/NavBar.css";
import LogInForm from "./components/LogInForm";
import LandingPage from "./components/LandingPage";
import LogForm from "./components/LogForm";

class App extends React.Component {

  render() {
    return (
      
      <div className="App">
        <div className="iphone-x">
            <i>Speaker</i>  
            <b>Camera</b> 
            <nav className="Navbar">
              <ul>       
                <li>
                  <Link to="/">Home</Link>
                </li>                
                <li>
                  <Link to="/form">Sign Up</Link>
                </li>          
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              </ul>
            </nav> 

            <Routes> 
              <Route exact path="/" element={<LandingPage/>}>
              </Route>
              <Route path="/home" element={<Home/>}>
              </Route>
              <Route path="/form" element={<Form/>}>
              </Route>
              <Route path="/survey" element={<Survey/>}>
              </Route>
              <Route path="/login" element={<LogForm/>}>
              </Route>
            </Routes>

        </div>       
      </div>
    );
  }
}

export default App;