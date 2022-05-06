import CompletePopup from './CompletePopup';
import {useState} from 'react';

const CompleteMessage = () => {
    const [buttonCompletePopup, setButtonCompletePopup] = useState(false);

    return (
        <div className="container-popup">
            <button className="popup-finish-btn" onClick={() => setButtonCompletePopup(true)}>Finished</button>
        
            <CompletePopup trigger={buttonCompletePopup} setTrigger={setButtonCompletePopup}>
                <h3>Congratulations!</h3>
                <br></br>
                <p>You made another step to your goal!</p>
                <br></br>
            </CompletePopup>
        </div>
    )
}
export default CompleteMessage