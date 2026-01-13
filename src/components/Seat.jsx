import { useReducer } from "react";

function reducer(state, action) {

  const { type, payload } = action;

  switch (type) {
    case "Toggle Seat":

      return {
        ...state,
        seatOccupied: !state.seatOccupied
      }

    default:
      state;
  }

}

const initialState = {
  seatOccupied: false
}


export default function Seat() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      className={`${state.seatOccupied ? "seat occupied" : "seat"}`} 
      onClick={() => {
        dispatch({
          type: "Toggle Seat",
        });
      }}
    ></div>
  );
}
