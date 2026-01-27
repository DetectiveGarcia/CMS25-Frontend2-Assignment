import React, { useEffect, useState } from "react";

export const Put = ({ movies, automaticSelectedMovie }) => {
  const [movieSelected, setMovieSelected] = useState(null);


  async function updateMovie() {
    const confirmUpdate = confirm("Are you sure?");

    if (!confirmUpdate) {
      return;
    }
    try {
      // await fetch("https://localhost:7194/api/Movies", {
      await fetch(`http://localhost:3001/movies/${movieSelected.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(movieSelected),
      });
    } catch (error) {
      console.log(error);
    }

    window.location.reload();
  }

  useEffect(() => {
    const getData = async () => {
      try {
        // const response = await fetch("https://localhost:7194/api/Movies");
        const response = await fetch("http://localhost:3001/movies");

        if (!response.ok) {
          throw new Error("Something wrong with database");
        }

        const data = await response.json();

        setMovieSelected(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();

  }, []);

  return (
    <section>
      <h2>Update a movie</h2>
      <form action={updateMovie}>
        <select
          name="movie"
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
              setMovieSelected({ ...movieSelected, title: e.target.value.trim() });
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
              setMovieSelected({ ...movieSelected, price: parseInt(e.target.value) });
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
              setMovieSelected({ ...movieSelected, poster: e.target.value.trim() });
            }}
          />
        </div>
        <input type="submit" value="Update" id="form-button" />
      </form>
    </section>
  );
};
