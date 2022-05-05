import React from "react";
import {Routes, Route, Link, Router} from "react-router-dom";
import CardContainer from "./CardContainer";
import Fader from "./Fader";
import Survey from "./Survey";

const Home = () => {

    return (
       <div className="hometext">

            <h1 className="hometext-title">Welcome!</h1>
            <br></br>
            <div className="hometext-p">
            <h3>In order to work together, I need to learn a bit about you... </h3>
            </div>                
                <br></br>
               <br></br><br></br>
            <div className="centerer">
                <Link to="/survey"><Fader text="Begin your Journey"></Fader></Link>
            </div>
                                 
                    <Routes>
                        <Route path="/survey" element={<Survey/>}>
                        </Route>
                    </Routes>
        </div>
    );      
}

export default Home;
