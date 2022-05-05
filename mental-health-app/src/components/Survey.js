import React, { Component } from "react";
// import {useState} from 'react';

// 


const Survey = () => {

    let age = '';
  

        return(
            
        <div className="container">

           <div className="box">
             <h2>Please, answer the questions bellow: </h2>
             
             <div className="box-1">
            <h3> What is your Age? </h3>
                <form className="form-1">
                    <input className="age" type="integer" placeholder="...Enter your age"/>   
                </form>

               <div className="box-2">
                    <h3> How confident do you fell with your mobility?</h3>
                    <select>
                        <option value="Very confident">Very confident</option>
                        <option value="unsteady">Unsteady at times</option>
                        <option selected value="movies">Unable to exercise</option>
                    </select>
                </div>

                {/* <div className="box-3">
                    <h3>Your location</h3>
                    <form>
                        <input className="location" type="text" placeholder="call a good friend💕 "/>   
                    </form>
                </div> */}

                <div className="box-4">
                    <h3> Where are we going today?</h3>
                    <select>
                        <option value="local-park">Local-park 🏞️</option>
                        <option value="gym">Gym 🏋️ </option>
                        <option selected value="shops">Shopping center 🛍️ </option>
                    </select>

                    <div>
                    <button className="s-btn" type="submit">submit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
}

export default Survey;