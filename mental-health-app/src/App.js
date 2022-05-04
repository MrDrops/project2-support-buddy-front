import React, { useState } from "react";
import Form from "./components/Form";
import PopUpMessage from "./components/PopUpMessage";
import Cards from "./components/Cards"
import "./App.css";
import {Routes, Route, Link, Router} from "react-router-dom";
import Home from "./components/Home";
import Survey from './components/Survey'
import "./App.scss";
import "./components/NavBar.css";

class App extends React.Component {

  componentDidUpdate() {
    let header = document.querySelector("h1");
    let text = header.textContent.toLowerCase();
    let color;
    switch(text) {
      case 'home':
        color = "#16A085";
        break;
      case 'form':
        color = "#E74C3C";
        break;
      case 'survey':
        color = "#2980B9";
        break;
      default:
        color = "#F1C40F";
        break;
    }

    let root = document.querySelector(":root");
    root.style.setProperty("--color-home", color);
  }

  render() {
    return (
      
      <div className="App">

        <div class="iphone-x">

            <i>Speaker</i>  
            <b>Camera</b>

            <nav className="Navbar">

              <ul>
                
                <li>
                  <Link to="/">home</Link>
                </li>

                <li>
                  <Link to="/form">form</Link>
                </li>

                <li>
                  <Link to="/survey">survey</Link>
                </li>

              </ul>

            </nav>

            <Routes>

              <Route exact path="/" element={<Home/>}>
              </Route>

              <Route path="/form" element={<Form/>}>
              </Route>

              <Route path="/survey" element={<Survey/>}>
              </Route>

            </Routes>

        </div>
        
      </div>

    );
  }
}

export default App;