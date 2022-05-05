import React from "react";


function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                 {props.children}
                 <div className="choices">
                <button className="class-btn-red" onClick={() => props.setTrigger(false)}>Deny</button>
                <button className="class-btn-green">Accept</button>
                </div>
            </div>
        </div>
    ) : ""
}
export default Popup