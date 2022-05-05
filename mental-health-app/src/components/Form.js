import React, {useState} from 'react'
import SignUpForm  from './SignUpForm'
import SignupFormSuccess from './SignupFormSuccess'
import axios from 'axios'

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    
    const submitForm = () => {
        //perform fetch post call
        //pass in data

        //handle errors that are received from the fetch

      
        setFormIsSubmitted(true);
    }; 

    return ( 
        <div>
            {!formIsSubmitted ? <SignUpForm submitForm={submitForm}/> : <SignupFormSuccess/>}
        </div>
    );
}

export default Form;