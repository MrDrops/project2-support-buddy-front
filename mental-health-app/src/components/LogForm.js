import React, {useState} from 'react'
import Home from './Home'
import LogInForm from './LogInForm'

const LogForm = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    
    const submitForm = () => {
        setFormIsSubmitted(true);
    }; 

    return ( 
        <div>
            {!formIsSubmitted ? <LogInForm submitForm={submitForm}/> : <Home/>}
        </div>
    );
}

export default LogForm;