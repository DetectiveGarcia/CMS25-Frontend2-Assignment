import React, { useState } from "react";
import DisplayAMovie from "./DisplayAMovie";
import DisplayAllMovies from "./DisplayAllMovies";

export const Get = ({ movies }) => {
  const [fetchedMovie, setfetchedMovie] = useState(null);
  const [showAMovie, setShowAMovie] = useState(false);
  const [showAllMovies, setShowAllMovies] = useState(false);

  async function fetchAction(formData) {
    const movieTitle = formData.get("name");

    console.log(movieTitle);

    const movie = movies.find((m) => m.title == movieTitle);

    console.log(movie);

    setfetchedMovie(movie);
  }

  return (
    <>
      <section>
        <div id="get-buttons">
          <button
            onClick={() => {
              setShowAMovie(true);
              setShowAllMovies(false);
            }}
          >
            A Movie
          </button>
          <button
            onClick={() => {
              setShowAMovie(false);
              setShowAllMovies(true);
            }}
          >
            All Movies
          </button>
        </div>
        {showAMovie && (fetchedMovie ? (
          <DisplayAMovie {...{ fetchedMovie }} />
        ) : (
          <>
            <h2>Get a movie</h2>
            <form action={fetchAction}>
              <div className="form-field"></div>
              <div className="form-field">
                <label htmlFor="name">Name </label>
                <input type="text" name="name" id="name" />
              </div>
              <input type="submit" value="Send" id="form-button" />
            </form>
          </>
        ))}

        {showAllMovies && <DisplayAllMovies {...{ movies }} />}
      </section>
    </>
  );
};
