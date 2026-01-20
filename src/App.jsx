import MovieSelector from "./components/MovieSelector";
import { BookingForm } from "./components/BookingForm";
import "./App.css";
import Seat from "./components/Seat";
import { useEffect, useReducer } from "react";

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "Get Movies":
      return {
        ...state,
        movieList: payload.movieList,
        movieSelected: payload[0],
        auditorium: payload.auditorium
      };
    case "Toggle Booking":
      return {
        ...state,
        toggleBooking: !state.toggleBooking,
      };
    case "Toggle Seat":
      const { seatId } = payload;

      const seatSelected = state.selectedSeatsIds.includes(seatId);

      return {
        ...state,
        selectedSeatsIds: seatSelected
          ? state.selectedSeatsIds.filter((id) => id !== seatId)
          : [...state.selectedSeatsIds, seatId],
      };
    case "Movie Selected":
      return {
        ...state,
        movieSelected: state.movieList.find((movie) => movie.id === payload),
      };
    default:
      return state;
  }
}

let initialState = {
  selectedSeatsIds: [],
  movieList: [],
  toggleBooking: false,
  movieSelected: null,
  auditorium: null,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        const responseMovies = await fetch(
          // "https://localhost:7282/api/Movies"
          "https://localhost:7194/api/Movies",
        );

        const responseAuditorium = await fetch(
          "https://localhost:7194/api/Auditorium",
        );

        if (!responseMovies.ok) {
          throw new Error("Something wrong with movies");
        }

        if (!responseAuditorium.ok) {
          throw new Error("Something wrong with auditorium");
        }

        const dataAuditorium = await responseAuditorium.json();
        const dataMovies = await responseMovies.json();

        console.log(dataAuditorium);
        console.log(dataMovies);

        dispatch({
          type: "Get Movies",
          payload: {
            movies: dataMovies,
            auditorium: dataAuditorium
          },
        });
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <MovieSelector movies={state.movieList} dispatch={dispatch} />
      <div className="container">
        <div className="screen"></div>
        <div className="row">
          {/* {rows.row0.map((seat) => <Seat parentDispatch={dispatch} parentState={state} />)} */}
          {rows.row0.map((seat) => {
            const seatId = `row0-${seat}`;

            const selected = state.selectedSeatsIds.includes(seatId);

            return <Seat {...{ dispatch, seatId, selected }} />;
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
        You have selected{" "}
        <span id="count">{state.selectedSeatsIds.length}</span> seats for a
        price of $
        <span id="total">
          {state.movieSelected
            ? `${state.movieSelected.price * state.selectedSeatsIds.length}`
            : "0"}
        </span>
      </p>
      <button
        onClick={() => {
          dispatch({
            type: "Toggle Booking",
          });
        }}
      >
        {state.toggleBooking ? "Cancel" : "Book"}
      </button>
      {state.toggleBooking && <BookingForm />}
    </>
  );
}

export default App;
