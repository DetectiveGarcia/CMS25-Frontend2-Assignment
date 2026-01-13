import { useReducer } from "react";
import MovieSelector from "./components/MovieSelector";
import "./App.css"

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


function seatSelected(e) {
  console.log(e);

}

const rows = {
  row0: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  row1: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  row2: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  row3: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  row4: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  row5: [0, 1, 2, 3, 4, 5, 6, 7, 8],

}


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <>
      <MovieSelector />
      <div className="container">
        <div className="screen"></div>
        <div className="row">
          {rows.row0.map((seat) => {
            return (
              <div className={state.seatOccupied ? "seat" : "seat selected"} key={seat} onClick={(e) => {console.log(e);
              }}></div>

            )
          })}
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
        </div>
      </div>
      <p className="text">
        You have selected <span id="count">0</span> seats for a price of $
        <span id="total">0</span>
      </p>
    </>
  );
}

export default App;
