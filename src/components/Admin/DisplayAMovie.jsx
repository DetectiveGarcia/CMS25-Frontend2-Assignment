import React from "react";

const GetMovie = ({ fetchedMovie }) => {
  if (!fetchedMovie) return null;
  return (
    <section
      style={{
        backgroundImage: `url(${fetchedMovie.poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h4>{fetchedMovie.title}</h4>
      <p>Price: {fetchedMovie.price}</p>
    </section>
  );
};

export default GetMovie;
