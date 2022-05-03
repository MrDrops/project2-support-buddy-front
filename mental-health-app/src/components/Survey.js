import React, { Component } from "react";

 
const Survey = () => {

    const age = '';

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
                
            </div>
        </div>
        );

    }



export default Survey;