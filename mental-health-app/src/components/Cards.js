import {useState} from 'react'

function Cards(props){
    return(
        <div className="card">
            <div className='card-body'>

                <img src={props.img} width={50} />
                <h2 className='card-title'>{props.title}</h2>
                <p className='card-description'>{props.description}
                </p>
            </div>

            <button className='card-btn'>accept</button>

        
      

        </div>
    )
}



export default Cards