

export default function Seat({ dispatch, seatId, selected, seat }) {
  


  return (
    <div
      className={`${selected ? "seat selected" : "seat"} ${seat.occupied ? "occupied" : ""}`} 
      onClick={() => {
        if(!seat.occupied){
          dispatch({
            type: "Toggle Seat",
            payload: {
              seatId: seatId
            }
          });
        }
      }}
    ></div>
  );
}
