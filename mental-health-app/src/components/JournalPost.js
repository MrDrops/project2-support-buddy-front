import axios from "axios";
import React, {useEffect, useState} from 'react'
import UserMain from "./UserMain";
import {Routes, Route, Link} from "react-router-dom";

const Journal = ({submitForm}) => {

    const [values, setValues] = useState ({
        journal: ''
    });
   
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
  
    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/commitments', {commitment:{
            journal: values.journal,
            }
        });
    };

        return (
        <div className="journal-text">
            <h2>Journal</h2>
            
            <br></br>

            <p>A place for you to explore <br></br> your thoughts and feelings...</p>
            
            <br></br>
            
            <div>

            <textarea 
                className="journal-text-box"
                type="text" 
                value={values.journal}
                onChange={handleChange}
            />

            </div>

            <br></br><br></br>

            <div>   
                    <Link to='/usermain'>
                        <button className='submit' onClick={handleFormSubmit}>Submit!</button>
                    </Link>
            </div>

            <Routes>
                <Route path="/usermain" element={<UserMain/>}>
                </Route> 
            </Routes>

        </div>
    );
}


export default Journal;