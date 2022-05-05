import React from "react";
import Summary from "./Summary";
import ReactCalendar from "./ReactCalendar";
import Journal from "./Journal";
import PopUpMessage from "./PopUpMessage";
import CheckStatusMessage from "./CheckStatusMessage";
import ShowRate from "./ShowRate";
import CompleteMessage from "./CompleteMessage";
import CheckIt from "./CheckIt";


function TestPage () {
    return (
       <div>
           <Journal />
           <PopUpMessage />
            <br></br>
            <CheckStatusMessage />
            <br></br>
            <CompleteMessage />
            <br></br>
            <ShowRate /> 
            <CheckIt />
       </div>

      
    )
}

export default TestPage