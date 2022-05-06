import React from "react";
import {Routes, Route, Link, Router} from "react-router-dom";
import Journal from "./Journal";


function CompletePopup(props) {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                 {props.children}
                 <h4>Do you like this activity?</h4>
                 <br></br>
                 <div className="choices">
                 <Link to="/journal">
                    <button className="class-btn-red">Not really</button>
                </Link>
                <Link to="/journal">
                    <button className="class-btn-green" onClick={props.setTrigger}>Like it</button>
                </Link>
                </div>
                
            </div>
            <Routes>
                <Route path="/journal" element={<Journal/>}>
                </Route>
            </Routes>
        </div>
    ) : ""
}
export default CompletePopup

// function CompletePopup(props) {
//     return (props.trigger) ? (
//         <div className="popup">
//             <div className="popup-inner">
//                  {props.children}
//                  <h4>Do you like this activity?</h4>
//                  <br></br>
//                  <div className="choices">
//                 <button className="class-btn-red">Not really</button>
//                 <button className="class-btn-green" onClick={() => props.setTrigger(false)}>Like it</button>
//                 </div>
                
//             </div>
//         </div>
//     ) : ""
// }