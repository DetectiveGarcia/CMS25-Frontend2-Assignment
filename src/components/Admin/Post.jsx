import React, { useState } from "react";

export const Post = ({ movies }) => {

  async function submitAMovie(formData) {


    const movieTitle = formData.get("name");
    const moviePrice = formData.get("price");
    const moviePoster = formData.get("poster");

    console.log(movieTitle);
    console.log(moviePrice);
    console.log(moviePoster);

    /*
      Stranger things
      190
      https://m.media-amazon.com/images/I/81DrD8zq1XL._AC_SY300_SX300_QL70_ML2_.jpg
    */
    try {
      
      const response = await fetch("http://localhost:3001/movies", {
        method: "POST",
        body: JSON.stringify({
          id: movies.length + 1,
          title: movieTitle,
          price: moviePrice,
          poster: moviePoster
        }),
        headers: {
          "Content-type": "application/json"
        }
      })

      if(!response.ok){
        throw new Error("Submission not possible")
      }

    } catch (error) {
      console.log(error);
      return;
    }

    alert("Movie added");
    window.location.reload();
  }

  return (
    <section>
      <h2>Submit a movie</h2>
      <form action={submitAMovie}>
        <div className="form-field">
          <label htmlFor="name">Name </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-field">
          <label htmlFor="price">Price </label>
          <input type="number" name="price" id="price" />
        </div>
        <div className="form-field">
          <label htmlFor="poster">Poster </label>
          <input type="text" name="poster" id="poster" />
        </div>
        <input type="submit" value="Send" id="form-button" />
      </form>
    </section>
  );
};
