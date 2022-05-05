import React, {useEffect, useState} from 'react'
import ValidationForLogin from './ValidationForLogin';
import axios from 'axios'

const SignUpForm = ({submitForm}) => {
  
    const [values, setValues] = useState ({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    const [errors, setErrors] = useState({});

    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(ValidationForLogin(values));
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);

    return (

    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Log In!</h2>
            </div>
            <form className="form-wrapper">
                           
                <div className='email'>
                    <label className='label'>Email</label>
                    <input 
                    className='input' 
                    type="email" 
                    name='email' 
                    value={values.email}
                    onChange = {handleChange}/>
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                
                <div className='password'>
                    <label className='label'>Password</label>
                    <input 
                    className='input' 
                    type="password" 
                    name='password' 
                    value={values.password}
                    onChange = {handleChange}/>
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>

                <div>
                    <button className='submit' onClick={handleFormSubmit}>Sign Up!</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default SignUpForm

 