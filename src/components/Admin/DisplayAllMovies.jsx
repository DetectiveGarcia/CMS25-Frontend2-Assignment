import React from "react";

const DisplayAllMovies = ({ movies }) => {
  return (
    <section>
      <h4>All movies</h4>
      <ul style={{ display: "flex", flexDirection: "column", paddingLeft: 0, gap: "10px" }}>
        {movies.map((m) => {
          return (
            <li
              style={{
                backgroundImage: `url(${m.poster})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                listStyleType: "none",
                height: "300px",
                width: "240px",
                borderRadius: "12px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                overflow: "hidden",
                
              }}
            >
              <h5>{m.title}</h5>
              <p>Price: {m.price}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DisplayAllMovies;
