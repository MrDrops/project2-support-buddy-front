import React, {useState} from 'react'
import SignUpForm  from './SignUpForm'
import Home from './Home'
import SignupFormSuccess from './SignupFormSuccess'

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