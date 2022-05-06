import React, {useEffect, useState} from 'react';
import Cards from './Cards';
import CheckItMessage from './CheckItMessage';
import CheckStatusMessage from './CheckStatusMessage';
import CompleteMessage from './CompleteMessage';
import Journal from './Journal';
import PopUpMessage from './PopUpMessage';



const UserMain = () => {
    

    return (
      
           
        <div className='wrapper'>
            <h1>User Page</h1>
            <PopUpMessage />
            <CheckStatusMessage />
            


            <Cards img="https://cdn.imgbin.com/24/16/21/imgbin-sport-fitbit-activity-tracker-physical-exercise-computer-icons-fitbit-S8HN4FK9qdNPpBYfGaYTzzAnc.jpg"
                title="One more step"
                description="“Keep moving forward. If you want to fly, you have to give up what weighs you down.”" 
                />
             <CompleteMessage />

            <Cards img="https://thumbs.dreamstime.com/b/aqua-drinking-water-vector-icon-which-can-easily-edit-aqua-drinking-water-vector-icon-which-can-easily-edit-153442810.jpg"
            title="Drink Water"
            description="“Drink your way to better helth!”" />
            <CompleteMessage />
        </div>

    );
        
}

export default UserMain;