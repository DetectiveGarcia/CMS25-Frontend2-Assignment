

export default function Seat({ dispatch, seatId, selected }) {
  


  return (
    <div
      className={`${selected ? "seat selected" : "seat"}`} 
      onClick={() => {
        dispatch({
          type: "Toggle Seat",
          payload: {
            seatId
          }
        });
      }}
    ></div>
  );
}
