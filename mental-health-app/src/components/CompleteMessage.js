import CompletePopup from './CompletePopup';
import {useState} from 'react';

const CompleteMessage = () => {
    const [buttonCompletePopup, setButtonCompletePopup] = useState(false);

    return (
        <div className="container-popup">
            <button onClick={() => setButtonCompletePopup(true)}>Complete activity</button>
        
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