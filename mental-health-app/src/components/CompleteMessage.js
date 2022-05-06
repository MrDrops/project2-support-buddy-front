import CompletePopup from './CompletePopup';
import {useState, useNavigate, useEffect} from 'react';
import Journal from './Journal'
import {Routes, Route, Link, Router} from "react-router-dom";


const CompleteMessage = () => {
    const [buttonCompletePopup, setButtonCompletePopup] = useState(false);
    
    const navigate = useNavigate();
    useEffect(()=> {
        navigate('/journal');
    }, [buttonCompletePopup])

    function whatever() {
        setButtonCompletePopup(false)
    }

    return (
        <div className="container-popup">
            <button onClick={() => setButtonCompletePopup(true)}>Complete activity</button>
        
            <CompletePopup trigger={buttonCompletePopup} setTrigger={whatever}>
                <h3>Congratulations!</h3>
                <br></br>
                <p>You made another step to your goal!</p>
                <br></br>
            </CompletePopup>
            <Routes>
                <Route path="/journal" element={<Journal/>}>
                </Route>
            </Routes>
            
        </div>
    )
}
export default CompleteMessage

// const CompleteMessage = () => {
//     const [buttonCompletePopup, setButtonCompletePopup] = useState(false);

//     function whatever() {
//         //setButtonCompletePopup
//         //link to journal
//     }

//     return (
//         <div className="container-popup">
//             <button onClick={() => setButtonCompletePopup(true)}>Complete activity</button>
        
//             <CompletePopup trigger={buttonCompletePopup} setTrigger={setButtonCompletePopup}>
//                 <h3>Congratulations!</h3>
//                 <br></br>
//                 <p>You made another step to your goal!</p>
//                 <br></br>
//             </CompletePopup>
//         </div>
//     )
// }