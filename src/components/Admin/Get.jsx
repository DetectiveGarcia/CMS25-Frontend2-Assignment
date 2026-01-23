import React from "react";



export const Get = ({ movies }) => {
  return (
    <section>
      <h2>Get a movie</h2>
      <form>
        <div className="form-field">
          <label htmlFor="id">ID </label>
          <input type="text" name="id" id="id" />
        </div>
        <div className="form-field">
          <label htmlFor="name">Name </label>
          <input type="text" name="name" id="name" />
        </div>
        <input type="submit" value="Send" id="form-button" />
      </form>
    </section>
  );
};
