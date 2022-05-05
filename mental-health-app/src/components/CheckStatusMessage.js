import CheckStatus from './CheckStatus';
import {useState} from 'react';

const CheckStatusMessage = () => {
    const [buttonCheckStatus, setButtonCheckStatus] = useState(false);

    return (
        <div className="container">
            <button onClick={() => setButtonCheckStatus(true)}>Check my activity</button>
        
            <CheckStatus trigger={buttonCheckStatus} setTrigger={setButtonCheckStatus}>
                <h3>Your activity details</h3>
                <br></br>
                <p>Hey, have you tried .. yet? Keep exercising makes you stronger than you imagine.</p>
                <br></br>
            </CheckStatus>
        </div>
    )
}
export default CheckStatusMessage