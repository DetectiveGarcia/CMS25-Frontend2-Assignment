import React from "react";

export const Put = () => {
  return (
    <section>
      <h2>Update a movie</h2>
      <form>
      <select name="" id="">
        <option value="">Hello</option>
      </select>
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
        <input type="submit" value="Update" id="form-button" />
      </form>
    </section>
  );
};
