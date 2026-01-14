import { useReducer } from "react";

function reducer(state, action) {

  const { type, payload } = action;

  switch (type) {
    case "Toggle Seat":

      return {
        ...state,
        seatSelected: !state.seatSelected
      }

    default:
      state;
  }

}

const initialState = {
  seatOccupied: false,
  seatSelected: false,
}


export default function Seat() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      className={`${state.seatSelected ? "seat selected" : "seat"}`} 
      onClick={() => {
        dispatch({
          type: "Toggle Seat",
        });
      }}
    ></div>
  );
}
