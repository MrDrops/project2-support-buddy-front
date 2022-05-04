import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Ratecolors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
};

function AppRate(props) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <h2> Rate our app </h2>
        <div className="stars">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? Ratecolors.orange : Ratecolors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}
          <br></br>
        </div>
        <textarea className="textarea"
          placeholder="What's your experience?"
        />
        <br></br>
        <div className="choices">
        <button className="class-btn" onClick={() => props.setTrigger(false)}>
          Submit
        </button>
        </div>
      </div>
      
    </div>
  ) : ""
};
export default AppRate