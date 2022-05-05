import React, {useEffect, useState} from 'react';
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
            <CompleteMessage />
            <Journal />
        </div>

    );
        
}

export default UserMain;