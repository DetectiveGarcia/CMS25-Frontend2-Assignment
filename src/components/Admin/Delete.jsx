import React, { useEffect, useState } from "react";

export const Delete = ({ movies, automaticSelectedMovie }) => {
  const [movieSelected, setMovieSelected] = useState(null);

  async function deleteAction(formData) {
    const confirmDeletion = confirm("Are you sure?");

    if (!confirmDeletion) {
      return;
    }

    const movieTitle = formData.get(
      `${movieSelected?.title ?? automaticSelectedMovie.title}`,
    );

    const movie = movies.find((m) => m.title == movieTitle);

    try {
      await fetch(`https://localhost:7194/api/Movies/${movie.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  }

  return (
    <section>
      <h2>Delete a movie</h2>
      <form action={deleteAction}>
        <select
          name={movieSelected?.title ?? automaticSelectedMovie.title}
          id=""
          onChange={(e) => {
            setMovieSelected(movies.find((m) => m.title === e.target.value));
          }}
        >
          {movies.map((m) => (
            <option key={m.title}>{m.title}</option>
          ))}
        </select>

        <input type="submit" value="Delete" id="form-button" />
      </form>
    </section>
  );
};
