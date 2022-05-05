import React, {useEffect, useState} from 'react'
import validation from './Validation';
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
        setErrors(validation(values));
        setDataIsCorrect(true);
        console.log(values.name);
        console.log(values.email);
        console.log(values.password);
        axios.post('http://localhost:3000/users', {user:{
            name: values.name,
            email: values.email,
            password: values.password
            }
        })        
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
                console.log(error);
        });
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
                <h2 className='title'>Create Account</h2>
            </div>
            <form className="form-wrapper">
                
                <div className='name'>
                    <label className='label'>Preferred Name</label>
                    <input 
                    className='input' 
                    type="text" 
                    name='name' 
                    value={values.name}
                    onChange = {handleChange}/>
                    {errors.name && <p className='error'>{errors.name}</p>}
                </div>
                
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

                <div className='confirm-password'>
                    <label className='label'>Confirm Password</label>
                    <input 
                    className='input' 
                    type="password" 
                    name='confirmpassword' 
                    value={values.confirmpassword} 
                    onChange = {handleChange}/>
                    {errors.confirmpassword && <p className='error'>{errors.confirmpassword}</p>}
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