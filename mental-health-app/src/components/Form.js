import React, {useState} from 'react'
import SignUpForm  from './SignUpForm'
import SignupFormSuccess from './SignupFormSuccess'

import Home from './Home'

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    
    const submitForm = () => {    
        setFormIsSubmitted(true);
    }; 

    return ( 
        <div>
            {!formIsSubmitted ? <SignUpForm submitForm={submitForm}/> : <Home/>}
        </div>
    );
}

export default Form;