import MovieOptions from "./MovieOptions";
import { useEffect } from "react";

export default function MovieSelector({ movies, dispatch }) {


  return (
    <>
      <div className="movie-container">
        <label htmlFor="movie" >
          Pick a movie:
        </label>
          <select name="movie" id="movie"  onChange={(e) => {
                
                dispatch({
                    type: "Movie Selected",
                    payload: e.target.value
                })
          }}>
            {movies && movies.map((movie) => <MovieOptions {...{ movie }} />)}
 
          </select>
      </div>
      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>N/A</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>
    </>
  );
}
