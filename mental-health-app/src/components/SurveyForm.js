import React, {useState} from 'react'
import UserMain from './UserMain';
import Survey from './Survey';

const SurveyForm = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    
    const submitForm = () => {
        setFormIsSubmitted(true);
    }; 

    return ( 
        <div>
            {!formIsSubmitted ? <Survey submitForm={submitForm}/> : <UserMain/>}
        </div>
    );
}

export default SurveyForm;

