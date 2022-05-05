import {useEffect, useState} from 'react';



const CompleteItMessage = () => {
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setShowComponent(!showComponent);
        }, 3000);
    }, []);
    return (showComponent) ? (
        <div className="popup">
            <div className="popup-inner">
            <h3>Your activity details</h3>
                <br></br>
                <p>Hey, have you tried .. yet? Keep exercising makes you stronger than you imagine.</p>
                <br></br>
                <h4>Do you like this activity?</h4>
                <br></br>
                <div className="choices">
                    <button className="class-btn-red">Not really</button>
                    <button className="class-btn-green" onClick={() => props.setTrigger(false)}>Like it</button>
                </div>
            </div>
        </div>
    ): ""

}
export default CompleteItMessage