import CompletePopup from './CompletePopup';
import {useState} from 'react';

const CompleteMessage = () => {
    const [buttonCompletePopup, setButtonCompletePopup] = useState(false);

    return (
        <div className="container">
            <button onClick={() => setButtonCompletePopup(true)}>Complete activity</button>
        
            <CompletePopup trigger={buttonCompletePopup} setTrigger={setButtonCompletePopup}>
                <h3>Congratulations!</h3>
                <p>You made another step to your goal!</p>
            </CompletePopup>
        </div>
    )
}
export default CompleteMessage