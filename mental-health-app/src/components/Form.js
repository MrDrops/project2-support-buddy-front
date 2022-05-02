import React, {useState} from 'react'
import SignUpForm  from './SignUpForm'
import SignupFormSuccess from './SignupFormSuccess'

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    
    const submitForm = () => {
        setFormIsSubmitted(true);
    }; 

    return ( 
        <div>
            {!formIsSubmitted ? <SignUpForm submitForm={submitForm}/> : <SignupFormSuccess/>}
        </div>
    );
}

export default Form;