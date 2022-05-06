import React, { Component } from "react";
import axios from "axios";
import UserMain from "./UserMain";
import {Routes, Route, Link} from "react-router-dom";
class Journal extends Component {
    constructor() {
        super();
        this.state = {
        textAreaValue: ""
        };

        this.handleChange = this.handleChange.bind(this);


    }

    handleChange(event) {
        this.setState({ textAreaValue: event.target.value });
    }
   


    render() {
        return (
        <div className="journal-text">
            <h2>Congratulations!</h2><br></br>
            <p>Leave your feelings and thoughts here,<br></br> and you can review these later.  </p><br></br>
            <textarea className="journal-text-box"
            value={this.state.textAreaValue}
            onChange={this.handleChange}
            />
            <br></br>
           <div>
             <Link to='/usermain'>
                        <button className='popup-btn'>Submit!</button>
                    </Link>

            <Routes>
                <Route path="/usermain" element={<UserMain/>}>
                </Route> 
            </Routes>
            </div>
            
        </div>
        );
    }
}

export default Journal;