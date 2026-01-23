import React from "react";

export const Post = () => {
  return (
    <section>
      <h2>Submit a movie</h2>
      <form>
        <div className="form-field">
          <label htmlFor="name">Name </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-field">
          <label htmlFor="id">Price </label>
          <input type="number" name="id" id="id" />
        </div>
        <div className="form-field">
          <label htmlFor="id">Poster </label>
          <input type="text" name="id" id="id" />
        </div>
        <input type="submit" value="Send" id="form-button" />
      </form>
    </section>
  );
};
