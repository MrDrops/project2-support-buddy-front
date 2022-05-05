import React from "react";
import {Routes, Route, Link, Router} from "react-router-dom";
import Cards from "./Cards";
import Survey from "./Survey";

function CardContainer() {

    return (
        <div className="wrapper">
            <p>Please choose a category</p>
        <Cards 
        img="https://www.kindpng.com/picc/m/616-6167538_run-icon-circle-hd-png-download.png"
        title="Keep Fit"
        description=" It's important to keep active when you're feeling down! Stay healthy." />

         <Cards img="https://thumbs.dreamstime.com/b/big-open-clapper-board-movie-reel-cinema-icon-set-movie-film-elements-flat-design-cinema-movie-time-flat-icons-f-95500226.jpg"
        title="Work life"
        description=" Don't let the tough times derail you! Keep your worklife on track." />

        <Cards img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Round_Landmark_Icon_Park.svg/1024px-Round_Landmark_Icon_Park.svg.png"
        title="Hobbies and Rec"
        description="Keep yourself entertained and engaged. " />
        <Link to="/survey">Survey</Link>
            <Routes>
                <Route path="/survey/*" element={<Survey/>}>
                </Route>
            </Routes>
        </div>
    );
}

export default CardContainer;