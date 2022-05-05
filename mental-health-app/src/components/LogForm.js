import React, {useState} from 'react'
import Home from './Home'
import LogInFormUpdated from './LogInFormUpdated'

const LogForm = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    
    const submitForm = () => {
        setFormIsSubmitted(true);
    }; 

    return ( 
        <div>
            {!formIsSubmitted ? <LogInFormUpdated submitForm={submitForm}/> : <Home/>}
        </div>
    );
}

export default LogForm;