const validation = (values) => {

  let errors = {};
  
    if(!values.name){
      errors.name="Please tell us your preferred name.";
    }

    if(!values.email){
        errors.email="Please tell us your email.";
    } else if ( !/\S+@\S+\.\S+/.test(values.email) ) {
        errors.email="Please enter a valid email address.";
    }

    if(!values.password){
        errors.password="Please enter a password."
    } else if(values.password.length < 5){
        errors.password="Password must be longer than 5 characters.";
    }
    
    // } else if(!/~!@#$%^&*/.test(values.password)) {
    //     errors.password="Password must include at least one special character (e.g. !@#$%^&*)";
    // }

    if(!values.confirmpassword){
        errors.confirmpassword="Please confirm your password.";
    } else if (values.password != values.confirmpassword) {
        errors.confirmpassword="Passwords do not match.";
    }

  return errors;
}

export default validation;