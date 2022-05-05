import React from "react";
import {Routes, Route, Link, Router} from "react-router-dom";
import CardContainer from "./CardContainer";

const Home = () => {

    return (
       <div className="hometext">

            <h1 className="hometext-title">Welcome USERNAME!</h1>
            <br></br>
            <div className="hometext-p">
                <p>I am your suppport buddy and I'm here to help you through these though times!</p>
                <br></br>
                <Link to="/cardContainer" element={< CardContainer />}>
                    <button className="submit">Start Your Journey</button>
                </Link>
            </div>
            <Routes>
                <Route path="/cardContainer" element={<CardContainer/>}>
                </Route>    
            </Routes>
        </div>
    );      
}

export default Home;
