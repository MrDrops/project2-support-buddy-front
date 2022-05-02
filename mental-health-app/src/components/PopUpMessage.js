import Popup from './Popup';
import {useState} from 'react';

const PopUpMessage = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="container">
            <button onClick={() => setButtonPopup(true)}>TRY an new activity</button>
        
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>New activity</h3>
                <p>Here is the description of the new activity</p>
            </Popup>
        </div>
    )
}
export default PopUpMessage