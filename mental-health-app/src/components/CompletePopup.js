import React from "react";


function CompletePopup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                 {props.children}
                 <h4>Do you like this activity?</h4>
                 <br></br>
                 <div className="choices">
                <button className="class-btn-red">Not really</button>
                <button className="class-btn-green" onClick={() => props.setTrigger(false)}>Like it</button>
                </div>
                
            </div>
        </div>
    ) : ""
}
export default CompletePopup