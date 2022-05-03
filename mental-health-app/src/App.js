import React from "react";
import Form from "./components/Form";
import PopUpMessage from "./components/PopUpMessage";
import "./App.css";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import Survey from './components/Survey';
import "./App.scss"

function App() {
  
  return (
    
    <div className="App">
        
      <div class="iphone-x">

        <i>Speaker</i>
        <b>Camera</b>

        <div className="Nav">    
          <Link to="/">Home</Link>
          <Link to="/form">Sign Up</Link>
          <Link to="/survey">Survey</Link>     
        </div>

        <Routes>    
          <Route path='/' element={<Home/>}/>  
          <Route path='/form' element={<Form/>}/>  
          <Route path='/survey' element={<Survey/>}/>              
        </Routes>
      </div>
    </div>

  );
}

export default App;
