import React from "react";

export const BookingForm = () => {
  const sendBooking = (formData) => {
    const inputName = formData.get("name");
    const inputTelephone = formData.get("telephone");

    console.log(inputName);
    console.log(inputTelephone);
  };

  // class Movie{
  //     constructor(poster, price, title, year){
  //         this.poster = poster;
  //         this.price = price;
  //         this.title = title;
  //         this.year = year;
  //     }
  // }

  return (
    <>
      <form action={sendBooking} id="booking-form">
        <h3 style={{ alignSelf: "center"}}>Book seats</h3>
        <div className="form-field">
          <label htmlFor="name">Namn</label>
          <input type="text" name="name" id="" />
        </div>

        <div className="form-field">
          <label htmlFor="telephone">Tlf. nr</label>
          <input type="text" name="telephone" id="" />
        </div>
        <input type="submit" value="Send" />
      </form>
    </>
  );
};
