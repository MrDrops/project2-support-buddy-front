
import React, {useEffect, useState} from 'react';

const Survey = ({submitForm}) => {

    const [values, setValues] = useState ({
        survey: 1,
        otherstate: 1
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
      }

    return(
        
    <div className="container">

        <div className="box">
          <h3>Please complete this brief survey:</h3>
            
            <div className="box-1">
        <h3> How old are you? </h3>
            <form className="form-1">
                <input className="age"
                 type="integer" 
                 placeholder="...Enter your age" />   
            </form>

            <div className="box-2">
                <h3> What would you rate your mobility out of 5?</h3>
                <select>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="movies">3</option>
                    <option value="movies">4</option>
                    <option value="movies">5</option>
                </select>
            </div>

            <div className="box-4">
                <h3> What equipment do you have access to?</h3>
                <form className="form-1">
                <input className="age"
                 type="integer" 
                 placeholder="e.g. Basketball" />   
            </form>


                {/* <select>
                    <option value="local-park">Local-park 🏞️</option>
                    <option value="gym">Gym 🏋️ </option>
                    <option selected value="shops">Shopping center 🛍️ </option>
                </select> */}



              </div>


                <div>
                <button className="s-btn" type="submit" onClick={handleFormSubmit}>submit</button>
                </div>
            
        </div>
    </div>
    </div>
    );
}

export default Survey;