import Popup from './Popup';
import {useState} from 'react';

const PopUpMessage = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="container-popup">
           <button className="popup-btn" onClick={() => setButtonPopup(true)}>TRY something new</button>
        
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>New activity</h3>
                <br></br>
                <p>Here is the description of the new activity</p>
                <br></br>
            </Popup>
        </div>
    )
};
export default PopUpMessage