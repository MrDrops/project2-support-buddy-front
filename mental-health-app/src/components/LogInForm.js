import React, {useEffect, useState} from 'react';
import axios from 'axios';

const LogInForm = ({submitForm}) => {

  const [values, setValues] = useState ({
    email: '',
    password: ''
  });

  const [submit, setSubmit] = useState(false);
  
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if(submit) {
      submitForm(true) 
    }
  }, [submit]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    axios.get('http://localhost:3000/user/new', {user:{
      email: values.email,
      password: values.password
      }
  })     
  }


  return (
    <div>
      <div>
        <div>
          <h2 className='title'>Log In</h2>
        </div>
        <form className="form-wrapper">
          <div className='email'>
            <label className='label'>Email</label>
            <input 
            className='input'
            type="email" 
            name="email" 
            placeholder="example@gmail.com" 
            required onChange={handleChange}/>
          </div>

          <div className='password'>
            <label className='label'>Password</label>
            <input 
            className='input'
            type="password" 
            name="password" 
            placeholder="password..." 
            required onChange={handleChange}/>
          </div>
          
          <div>
            <button className='submit' onClick={handleFormSubmit}>Log In!</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogInForm;























// import React, {useEffect, useState} from 'react';

// const LogInForm = ({submitForm}) => {

//   const [values, setValues] = useState ({
//     email: '',
//     password: ''
//   });

//   const [submit, setSubmit] = useState(false);
  
//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };

//   useEffect(() => {
//     if(submit) {
//       submitForm(true) 
//     }
//   }, [submit]);

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     submitForm(true);
//     //setSubmit(true);
//   }


//   return (
//     <div>
//       <div>
//         <div>
//           <h2 className='title'>Log In</h2>
//         </div>
//         <form className="form-wrapper">
//           <div className='email'>
//             <label className='label'>Email</label>
//             <input 
//             className='input'
//             type="email" 
//             name="email" 
//             placeholder="example@gmail.com" 
//             required onChange={handleChange}/>
//           </div>

//           <div className='password'>
//             <label className='label'>Password</label>
//             <input 
//             className='input'
//             type="password" 
//             name="password" 
//             placeholder="password..." 
//             required onChange={handleChange}/>
//           </div>
          
//           <div>
//             <button className='submit' onClick={handleFormSubmit}>Log In!</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LogInForm;
