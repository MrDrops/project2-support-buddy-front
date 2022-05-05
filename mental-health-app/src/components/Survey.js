<<<<<<< HEAD
import React from "react";
=======
import React, { Component } from "react";
// import {useState} from 'react';

// 

>>>>>>> ccd6d334cf8802271aa7472bdd3dd5001857d807

const Survey = () => {

<<<<<<< HEAD
    let age = '';

        return(
            <div class="box">
                <div>
                    <h1>What's on for today? 🏅 </h1>
                    <h2> Your group of age </h2>
                        <form>
                            <input className="age" type="integer" placeholder="please enter your age"/>   
                        </form>

                    <div>
                            <h2> Should we push ourselvs to an activity today?</h2>
                            <select>
                                <option value="hangout">Hang out</option>
                                <option value="swimming">swimming pool</option>
                                <option selected value="movies">to the movies?</option>
                                <option value="friends">call a friend?</option>
                            </select>
                        </div>

                        <div>
                            <h2> Who is going to join us?</h2>
                            <form>
                                <input className="age" type="integer" placeholder="call a good friend💕 "/>   
                            </form>
                        </div>

                        <div>
                            <h2> Where are we going to do this activity</h2>
                            <select>
                                <option value="local-park">Local-park 🏞️</option>
                                <option value="gym">Gym 🏋️ </option>
                                <option selected value="movies">closest cinema 🎬💿🏢?</option>
                            </select>
                        </div>
                        
=======
  

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
                    <h3> Where are we going to do this activity</h3>
                    <select>
                        <option value="local-park">Local-park 🏞️</option>
                        <option value="gym">Gym 🏋️ </option>
                        <option selected value="shops">Shopping center 🛍️ </option>
                    </select>

                    <div>
                    <button className="s-btn" type="submit">submit</button>
                    </div>
>>>>>>> ccd6d334cf8802271aa7472bdd3dd5001857d807
                </div>
            </div>
<<<<<<< HEAD
=======
        </div>
        </div>
>>>>>>> ccd6d334cf8802271aa7472bdd3dd5001857d807
        );
}

export default Survey;