import React from "react";
import {Routes, Route, Link, Router} from "react-router-dom";
import Cards from "./Cards";
import Survey from "./Survey";

function CardContainer() {

    return (
        <div>
            <div className="wrapper">
                <p>Please choose a category</p>
                <Link to="/survey"> 
        
                <Cards img="https://cdn-icons-png.flaticon.com/512/2780/2780119.png"
                title="Keep Fit"
                description="“It never gets easier, you just get better!”" /> 
                
                </Link>
    
                <Cards img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Circle-icons-briefcase.svg/1200px-Circle-icons-briefcase.svg.png"
                title="Be productive"
                description="“Action is the foundational key to all success!”" />

                <Cards img="https://cdn-icons-png.flaticon.com/128/4207/4207229.png"
                title="Sharppen my hobbie"
                description="“Engage in tasks and hobbies that bring you joy, like reading a book or going for a run!”" />
            </div>

            <Routes>
               <Route path="/survey/*" element={<Survey/>}>
               </Route>
           </Routes>
            
        </div>

    );
}

export default CardContainer;