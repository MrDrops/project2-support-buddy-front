import React from "react";
import PopUpMessage from "./PopUpMessage";
import CheckStatusMessage from "./CheckStatusMessage";
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
           <Cards img="https://cdn-icons-png.flaticon.com/512/2780/2780119.png"
           title="Keep Fit"
           description="“It never gets easier, you just get better!”" />
           

            <Cards img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Circle-icons-briefcase.svg/1200px-Circle-icons-briefcase.svg.png"
           title="Be productive"
           description="“Action is the foundational key to all success!”" />

           <Cards img="https://cdn-icons-png.flaticon.com/128/4207/4207229.png"
           title="Sharppen my hobbie"
           description="“Engage in tasks and hobbies that bring you joy, like reading a book or going for a run!”" />
           </div>
       </div>

      
    )
}

export default Home
