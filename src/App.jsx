import MovieSelector from "./components/MovieSelector";
import { BookingForm } from "./components/BookingForm";
import "./App.css";
import Seat from "./components/Seat";
import { useEffect, useReducer } from "react";

function reducer(state, action){

  const { type, payload } = action;

  switch (type) {
    case "Toggle Booking":
      
      return {
        ...state,
        toggleBooking: !state.toggleBooking
      }

      case "Get Movies":
        return{
          ...state,
          movieList: payload
        }
  
    default:
      return state;
  }

}

let initialState = {
  toggleBooking: false,
  movieList: []
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  const rows = {
    row0: [0, 1, 2, 3, 4, 5, 6, 7],
    row1: [0, 1, 2, 3, 4, 5, 6, 7],
    row2: [0, 1, 2, 3, 4, 5, 6, 7],
    row3: [0, 1, 2, 3, 4, 5, 6, 7],
    row4: [0, 1, 2, 3, 4, 5, 6, 7],
    row5: [0, 1, 2, 3, 4, 5, 6, 7],
  };

  useEffect(() => {
    const getData = async () => {

      try {

        const response = await fetch("https://gist.githubusercontent.com/aspcodenet/32a21ce9d8b8ccf19108a8a02883e9bb/raw/785f9bcb1527cb01e182d3fe40ffafd6fd00dac9/movies.json")

        if (!response.ok) {
          throw new Error("Something wrong");
        }

        const data = await response.json();

        console.log(data);

        dispatch({
          type: "Get Movies",
          payload: data
        })

      } catch (error) {
        console.log(error);
      }



    }

    getData();

  }, [])

  return (
    <>
      <MovieSelector movies={state.movieList} />
      <div className="container">
        <div className="screen"></div>
        <div className="row">
          {rows.row0.map((seat) => {
            return (
              <Seat />
            );
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
      <button onClick={() => {
        dispatch({
          type: "Toggle Booking",
        })
      }}>{state.toggleBooking ? "Cancel" : "Book"}</button>
      {state.toggleBooking && <BookingForm />}
    </>
  );
}

export default App;
