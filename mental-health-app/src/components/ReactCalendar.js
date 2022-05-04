import React, { useState} from "react";
import Calendar from "react-calendar";
import './NewCalendar.css';


const ReactCalendar = () => {
    const [date, setDate] = useState([new Date(2022, 5, 1), new Date(2022, 5, 4)] );

    const onChange = date => {
        setDate(date);
    };

    return (
        <div>
            
            <Calendar tileContent onChange={onChange} value={date} />
        </div>
    )
}
export default ReactCalendar