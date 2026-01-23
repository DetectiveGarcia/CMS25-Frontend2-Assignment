import React from "react";



export const Get = () => {
  return (
    <section id="get">
      <h2>Get a movie</h2>
      <form>
        <div id="form-id">
          <label htmlFor="id">ID: </label>
          <input type="text" name="id" id="id" />
        </div>
        <div id="form-name">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <input type="submit" value="Send" id="form-button" />
      </form>
    </section>
  );
};
