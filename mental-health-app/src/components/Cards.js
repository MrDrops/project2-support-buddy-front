import {useState} from 'react'

function Cards(props){
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    } 

    return(
        <div className="card" onClick={toggleExpanded}>
            <div className='card-body'>

                <img  src={props.img} className="img"  />
                <h2 className='title'>{props.title}</h2>
                <p className='description'>
               
                </p>

                
                { expanded && props.description }
            </div>

           

        
      

        </div>
    )
}



export default Cards