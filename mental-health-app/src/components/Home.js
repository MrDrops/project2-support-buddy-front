import React from "react";
import PopUpMessage from "./PopUpMessage";
import CheckStatusMessage from "./CheckStatusMessage";
import ShowRate from "./ShowRate";
import CompleteMessage from "./CompleteMessage";
import Cards from "./Cards";
import CardContainer from "./CardContainer";

function Home () {
    return (
       <div className="wrapper">
           {/* <PopUpMessage />
            <br></br>
            <CheckStatusMessage />
            <br></br>
            <CompleteMessage />
            <br></br>
            <ShowRate /> */}

            <h1>Welcome USERNAME!</h1>
            <p>I am your suppport buddy and I'm here to help you through these though times!</p>

            <CardContainer />
       </div>      
    );
}

export default Home;
