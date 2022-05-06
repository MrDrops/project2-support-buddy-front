import CheckStatus from './CheckStatus';
import {useState} from 'react';

const CheckStatusMessage = () => {
    const [buttonCheckStatus, setButtonCheckStatus] = useState(false);

    return (
        <div className="container-popup">
            <button className="popup-check-btn" onClick={() => setButtonCheckStatus(true)}>Check all activity</button>
        
            <CheckStatus trigger={buttonCheckStatus} setTrigger={setButtonCheckStatus}>
                <h3>Your activity details</h3>
                <br></br>
                <p>Hey, Seems like you have unfinished activities. Keep exercising makes you stronger than you imagine.</p>
                <br></br>
            </CheckStatus>
        </div>
    )
}
export default CheckStatusMessage