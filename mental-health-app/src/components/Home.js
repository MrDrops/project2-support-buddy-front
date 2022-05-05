import React from "react";
import PopUpMessage from "./PopUpMessage";
import CheckStatusMessage from "./ChekStatusMessage";
import ShowRate from "./ShowRate";
import CompleteMessage from "./CompleteMessage";
import Cards from "./Cards";

function Home () {
    return (
       <div>
           <PopUpMessage />
           <br></br>
           <CheckStatusMessage />
           <br></br>
           <CompleteMessage />
           <br></br>
           <ShowRate />
           
            

           <div className="wrapper">
           <Cards img="https://www.kindpng.com/picc/m/616-6167538_run-icon-circle-hd-png-download.png"
           title="Keep Fit"
           description="“It never gets easier, you just get better!”" />
           

            <Cards img="https://icon-library.com/images/productivity-icon-png/productivity-icon-png-15.jpg"
           title="Be productive"
           description="“Action is the foundational key to all success!”" />

           <Cards img="https://cdn-icons-png.flaticon.com/128/4207/4207229.png"
           title="Shappen my hobbie"
           description="“Engage in tasks and hobbies that bring you joy, like reading a book or going for a run!”" />
           </div>
       </div>

      
    )
}

export default Home
