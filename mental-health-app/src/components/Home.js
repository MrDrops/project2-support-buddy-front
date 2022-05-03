import React from "react";
import PopUpMessage from "./PopUpMessage";
import CheckStatusMessage from "./ChekStatusMessage";
import ShowRate from "./ShowRate";

function Home () {
    return (
       <div>
           <PopUpMessage />
           <br></br>
           <CheckStatusMessage />
           <br></br>
           <ShowRate />
       </div>
    )
}

export default Home