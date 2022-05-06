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
            <h3>Hello Jane</h3>
            <PopUpMessage />
            <CheckStatusMessage />
            


            <Cards img="https://cdn.imgbin.com/24/16/21/imgbin-sport-fitbit-activity-tracker-physical-exercise-computer-icons-fitbit-S8HN4FK9qdNPpBYfGaYTzzAnc.jpg"
                title="One more step"
                description="“Keep moving forward. If you want to fly, you have to give up what weighs you down.”" 
                />
             <CompleteMessage />

            <Cards img="https://www.iconpacks.net/icons/2/free-swimmer-icon-2238-thumb.png"
            title="Get in the water"
            description="“Just keep swimming, dont let yourself SINK!”" />
            <CompleteMessage />
        </div>

    );
        
}

export default UserMain;