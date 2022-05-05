import React from "react";
//import Form from "./components/Form";
//import PopUpMessage from "./components/PopUpMessage";
//import Cards from "./components/Cards"
import "./App.css";
//import {Routes, Route, Link} from "react-router-dom";
//import Home from "./components/Home";
//import Survey from './components/Survey'
import "./App.scss";
//import TestPage from "./components/TestPage";
//import "./components/NavBar.css";
//import LogInForm from "./components/LogInForm";
//import * as serverCall from './components/serverCalls.js'
import LandingPage from "./components/LandingPage";

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
        <div className="iphone-x">
            <div className="wrapper">
              <br></br>
              <br></br>
              <LandingPage />
            </div>
        </div>   
      </div>

    );
  }
}

export default App;

// <i>Speaker</i>  
//             <b>Camera</b>
//             <button onClick={ serverCall.itworks }>test</button>
//             <nav className="Navbar">
//               {/* condinitionals */}
//               <ul>               
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/form">Sign Up</Link>
//                 </li>
//                 <li>
//                   <Link to="/survey">Survey</Link>
//                 </li>
                
//                 <li>
//                   <Link to="/login">Log In</Link>
//                 </li>
//                 <li>
//                   <Link to="/testpage">TestPage</Link>
//                 </li>

//               </ul>
//             </nav>

            

//             <Routes> 

//               <Route exact path="/" element={<Home/>}>
//               </Route>

//               <Route path="/form" element={<Form/>}>
//               </Route>

//               <Route path="/survey" element={<Survey/>}>
//               </Route>

//               <Route path="/login" element={<LogInForm/>}>
//               </Route>
//               <Route path="/testpage" element={<TestPage/>}>
//               </Route>

//             </Routes>
