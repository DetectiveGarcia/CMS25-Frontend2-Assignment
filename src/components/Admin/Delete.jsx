import React from "react";

export const Delete = ({ movies }) => {
  return (
    <section>
      <h2>Delete a movie</h2>
      <form>
        <select name="" id="">
          {movies.map(m => <option key={m.title}>{m.title}</option>)}
        </select>

        <input type="submit" value="Delete" id="form-button" />
      </form>
    </section>
  );
};
