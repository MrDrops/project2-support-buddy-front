import React, { useState } from "react";

const seatStyle = {
  display: "inline-block",
  textAlign: "center",
  boxSizing: "border-box",
  height: "40px",
  width: "40px",
  border: "1px solid black",
  margin: "8px",
  backgroundColor: "white",
};

const flight = {
  airline: "Summary",
  number: "27/8/13",
  date: "3/8/13",
  
  seatRows: [
    [ 
      { id: 1, seat: "M", seatOwner: null },
      { id: 2, seat: "M", seatOwner: null },
      { id: 3, seat: "M", seatOwner: null },
      { id: 4, seat: "M", seatOwner: null },
    ],
    [
      { id: 5, seat: "T", seatOwner: null },
      { id: 6, seat: "T", seatOwner: null },
      { id: 7, seat: "T", seatOwner: null },
      { id: 8, seat: "T", seatOwner: null },
 
    ],
    [
      { id: 9, seat: "W", seatOwner: null },
      { id: 10, seat: "W", seatOwner: null },
      { id: 11, seat: "W", seatOwner: null },
      { id: 12, seat: "W", seatOwner: null },

    ],
    [
      { id: 13, seat: "T", seatOwner: null },
      { id: 14, seat: "T", seatOwner: null },
      { id: 15, seat: "T", seatOwner: null },
      { id: 16, seat: "T", seatOwner: null },
   
    ],
    [
      { id: 17, seat: "F", seatOwner: null },
      { id: 18, seat: "F", seatOwner: null },
      { id: 19, seat: "F", seatOwner: null },
      { id: 20, seat: "F", seatOwner: null },

    ],
    [
      { id: 21, seat: "S", seatOwner: null },
      { id: 22, seat: "S", seatOwner: null },
      { id: 23, seat: "S", seatOwner: null },
      { id: 24, seat: "S", seatOwner: null },
   
    ],
    [
        { id: 21, seat: "S", seatOwner: null },
        { id: 22, seat: "S", seatOwner: null },
        { id: 23, seat: "S", seatOwner: null },
        { id: 24, seat: "S", seatOwner: null },
     
      ],
  ],
};

const paddingStyle = {
  padding: "10px",
};

export default function Summary() {
  const [selectedSeat, setSelectedSeat] = useState();

  return (
    <div style={{ textAlign: "center" }}>
      
      <h2>{flight.airline}</h2>
      <p>
        {flight.date} - {flight.number}  
      </p>
      {flight.seatRows.map((row, index) => {
        return (
          <div key={index}>
            {row.map((seat) => {
              let style = { ...seatStyle };
              if (seat.seatOwner) {
                style.backgroundColor = "lightgray";
                style.cursor = "not-allowed";
              } else {
                style.cursor = "pointer";
              }
              if (seat.seat === selectedSeat) {
                style.backgroundColor = "lightgreen";
              }
              return (
                <div
                  key={seat.id}
                  style={style}
                  onClick={() => {
                    if (seat.seatOwner === null) {
                      setSelectedSeat(seat.seat);
                    }
                  }}
                >
                  <p>{seat.seat}</p>
                  <p>{seat.seatOwner ?? " "}</p>
                </div>
              );
            })}
          </div>
        );
      })}
      <div style={{ textAlign: "center" }}>
        <span style={paddingStyle}>{selectedSeat ?? "Choose a seat"}</span>
        <button style={paddingStyle}>Close</button>
      </div>
    </div>
  );
}
