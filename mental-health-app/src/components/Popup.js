import React from "react";


function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                 {props.children}
                <button className="class-btn" onClick={() => props.setTrigger(false)}>Deny</button>
                <button className="class-btn">Accept</button>
                
            </div>
        </div>
    ) : ""
}
export default Popup