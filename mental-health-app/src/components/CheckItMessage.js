import {useEffect, useState} from 'react';



const CheckItMessage = () => {
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
                <div className="choices">
                    <button className="class-btn" onClick={() => setShowComponent(false)}>Deny</button>
                    <button className="class-btn">Accept</button>
                </div>
            </div>
        </div>
    ): ""

}
export default CheckItMessage