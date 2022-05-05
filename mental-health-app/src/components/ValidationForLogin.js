const ValidationForLogin = (values) => {

    let errors = {};
    
  
      if(!values.email){
          errors.email="Please enter your email.";
      } else if ( !/\S+@\S+\.\S+/.test(values.email) ) {
          errors.email="Please enter a valid email address.";
      }
  
      if(!values.password){
          errors.password="Please enter a password."
      } else if(values.password.length < 5){
          errors.password="Incorrect Password.";
      }
      
      // } else if(!/~!@#$%^&*/.test(values.password)) {
      //     errors.password="Password must include at least one special character (e.g. !@#$%^&*)";
      // }
  
  
    return errors;
  }
  
  export default ValidationForLogin;