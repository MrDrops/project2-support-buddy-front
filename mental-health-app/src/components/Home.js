import React, { useState } from "react"


    
    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
            <input 
            type='text'
             placeholder="Add an activity"
             value={input}
             name='text'
             className="activity-input"
             onChange={handleChange}
             />

             <button className="todo-button">add something to your list</button>


            </form>
            </div>
    )
}

export default Home