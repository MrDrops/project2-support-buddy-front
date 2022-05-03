import React from "react";
import SignUpForm from "./components/SignUpForm";
import Form from "./components/Form";
import "./App.css";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    
    <div className="App">
        
      <div className="Nav">    
        <Link to="/">Home</Link>
        <Link to="/form">Sign Up</Link>
        <Link to="/">Sign Up</Link>
      </div>

    <Routes>    
        
        <Route path='/form' element={<Form/>}/>  

        
    </Routes>

    </div>

  );
}

export default App;
