import React, { useEffect, useState } from "react";

export const Put = ({
  movies,
  automaticSelectedMovie,
  
}) => {
  const [movieSelected, setMovieSelected] = useState(null);

  return (
    <section>
      <h2>Update a movie</h2>
      <form>
        <select
          name=""
          id=""
          onChange={(e) => {
            setMovieSelected(movies.find((m) => m.title === e.target.value));
          }}
        >
          {movies.map((m) => (
            <option key={m.title}>{m.title}</option>
          ))}
        </select>
        <div className="form-field">
          <label htmlFor="put-name">Name </label>
          <input
            type="text"
            name="name"
            id="put-name"
            value={movieSelected?.title ?? automaticSelectedMovie.title}
            onChange={(e) => {
              setMovieSelected({ ...movieSelected, title: e.target.value });
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="put-price">Price </label>
          <input
            type="number"
            name="price"
            id="put-price"
            value={movieSelected?.price ?? automaticSelectedMovie.price}
            onChange={(e) => {
              setMovieSelected({ ...movieSelected, price: e.target.value });
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="put-poster">Poster </label>
          <input
            type="text"
            name="poster"
            id="put-poster"
            value={movieSelected?.poster ?? automaticSelectedMovie.poster}
            onChange={(e) => {
              setMovieSelected({ ...movieSelected, poster: e.target.value });
            }}
          />
        </div>
        <input type="submit" value="Update" id="form-button" />
      </form>
    </section>
  );
};
