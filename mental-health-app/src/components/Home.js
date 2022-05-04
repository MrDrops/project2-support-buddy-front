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
           description=" I could go for a quick run today and now and after and another time ohh noooo" />

            <Cards img="https://thumbs.dreamstime.com/b/big-open-clapper-board-movie-reel-cinema-icon-set-movie-film-elements-flat-design-cinema-movie-time-flat-icons-f-95500226.jpg"
           title="To the movies"
           description=" I could have some PopCorn? Why not?what about later !" />

           <Cards img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Round_Landmark_Icon_Park.svg/1024px-Round_Landmark_Icon_Park.svg.png"
           title="what a view"
           description="Check the weather, is it a nice day?lets just stay home i dotn want to do nothing i want to eat" />
           </div>
       </div>

      
    )
}

export default Home
