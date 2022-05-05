import React, {useState} from 'react'
import SignUpForm  from './SignUpForm'
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






// import React, {useState} from 'react'
// import SignUpForm  from './SignUpForm'
// import Home from './Home'
// import LogInForm from './LogInForm'

// const Form = () => {
//     const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    
//     const submitForm = () => {    
//         setFormIsSubmitted(true);
//     }; 

//     return ( 
//         <div>
//             {/* {!formIsSubmitted ? <SignUpForm submitForm={submitForm}/> : <Home/>} */}
//             {!formIsSubmitted ? <LogInForm submitForm={submitForm}/> : <Home/>}
//         </div>
//     );
// }

// export default Form;