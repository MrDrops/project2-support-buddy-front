import AppRate from './AppRate';
import {useState} from 'react';

const ShowRate = () => {
    const [buttonAppRate, setButtonAppRate] = useState(false);

    return (
        <div className="container">
            <button onClick={() => setButtonAppRate(true)}>Rate this app</button>
        
            <AppRate trigger={buttonAppRate} setTrigger={setButtonAppRate}>
              
            </AppRate>
        </div>
    )
}
export default ShowRate