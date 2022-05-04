import React from "react";


function CompletePopup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                 {props.children}
                 <h3>Do you like this activity?</h3>
                 <div className="choices">
                <button className="class-btn" onClick={() => props.setTrigger(false)}>Like it</button>
                <button className="class-btn">Not really</button>
                </div>
            </div>
        </div>
    ) : ""
}
export default CompletePopup