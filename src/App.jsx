import MovieSelector from "./components/MovieSelector";
import { BookingForm } from "./components/BookingForm";
import Movie from "./classes/MovieClass";
import "./App.css";
import Seat from "./components/Seat";
import { useEffect, useReducer } from "react";
import { NavLink } from "react-router";


function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "Get Movies":
      return {
        ...state,
        movieList: payload.movies.map(m => new Movie(m.id, m.title, m.price, m.poster)),
        movieSelected: payload.movies[0],
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
    row0: [{id: 0, occupied: false }, {id: 1, occupied: false }, {id: 2, occupied: false }, {id: 3, occupied: false }, {id: 4, occupied: false }, {id: 5, occupied: false }, {id: 6, occupied: false }, {id: 7, occupied: false }],
    row1: [{id: 0, occupied: false }, {id: 1, occupied: false }, {id: 2, occupied: false }, {id: 3, occupied: true }, {id: 4, occupied: true }, {id: 5, occupied: false }, {id: 6, occupied: false }, {id: 7, occupied: false }],
    row2: [{id: 0, occupied: false }, {id: 1, occupied: false }, {id: 2, occupied: false }, {id: 3, occupied: false }, {id: 4, occupied: false }, {id: 5, occupied: false }, {id: 6, occupied: true }, {id: 7, occupied: true }],
    row3: [{id: 0, occupied: false }, {id: 1, occupied: false }, {id: 2, occupied: false }, {id: 3, occupied: false }, {id: 4, occupied: false }, {id: 5, occupied: false }, {id: 6, occupied: false }, {id: 7, occupied: false }],
    row4: [{id: 0, occupied: false }, {id: 1, occupied: false }, {id: 2, occupied: false }, {id: 3, occupied: true }, {id: 4, occupied: true }, {id: 5, occupied: false }, {id: 6, occupied: false }, {id: 7, occupied: false }],
    row5: [{id: 0, occupied: false }, {id: 1, occupied: false }, {id: 2, occupied: false }, {id: 3, occupied: false }, {id: 4, occupied: true }, {id: 5, occupied: true }, {id: 6, occupied: true }, {id: 7, occupied: false }],
  };

  useEffect(() => {
    const getData = async () => {



      try {
        const responseMovies = await fetch(
          "https://localhost:7282/api/Movies"
          // "https://localhost:7194/api/Movies",
        );

        // const responseAuditorium = await fetch(
        //   "https://localhost:7194/api/Auditorium",
        // );

        if (!responseMovies.ok) {
          throw new Error("Something wrong with movies");
        }

        // if (!responseAuditorium.ok) {
        //   throw new Error("Something wrong with auditorium");
        // }

        // const dataAuditorium = await responseAuditorium.json();
        const dataMovies = await responseMovies.json();

        // console.log(dataAuditorium);
        // console.log(dataMovies);

        // if (!window.localStorage.getItem("auditorium")) {
        //   window.localStorage.setItem("auditorium", JSON.stringify(dataAuditorium))
        // }

        // const auditorium = window.localStorage.getItem("auditorium")

        // console.log(JSON.parse(auditorium));
        // console.log(moviesObject);


        dispatch({
          type: "Get Movies",
          payload: {
            movies: dataMovies,
            auditorium: rows
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
      <NavLink to="/AdminPanel" end>
        Admin
      </NavLink>
      <MovieSelector movies={state.movieList} dispatch={dispatch} />
      <div className="container">
        <div className="screen"></div>
        <div className="row">
          {rows.row0.map((seat) => {
            const seatId = `row0-${seat.id}`;

            const selected = state.selectedSeatsIds.includes(seatId);

            return <Seat {...{ dispatch, seatId, selected, seat }} />;
          })}
        </div>
        <div className="row">
          {rows.row1.map((seat) => {
            const seatId = `row1-${seat.id}`;

            const selected = state.selectedSeatsIds.includes(seatId);

            return <Seat {...{ dispatch, seatId, selected, seat }} />;
          })}
        </div>
        <div className="row">
          {rows.row2.map((seat) => {
            const seatId = `row2-${seat.id}`;

            const selected = state.selectedSeatsIds.includes(seatId);

            return <Seat {...{ dispatch, seatId, selected, seat }} />;
          })}
        </div>
        <div className="row">
          {rows.row3.map((seat) => {
            const seatId = `row3-${seat.id}`;

            const selected = state.selectedSeatsIds.includes(seatId);

            return <Seat {...{ dispatch, seatId, selected, seat }} />;
          })}
        </div>
        <div className="row">
          {rows.row4.map((seat) => {
            const seatId = `row4-${seat.id}`;

            const selected = state.selectedSeatsIds.includes(seatId);

            return <Seat {...{ dispatch, seatId, selected, seat }} />;
          })}
        </div>
        <div className="row">
          {rows.row5.map((seat) => {
            const seatId = `row5-${seat.id}`;

            const selected = state.selectedSeatsIds.includes(seatId);

            return <Seat {...{ dispatch, seatId, selected, seat }} />;
          })}
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
