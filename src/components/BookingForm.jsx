import React from "react";

export const BookingForm = () => {
  const sendBooking = async (formData) => {
    const inputName = formData.get("name").trim();
    const inputTelephone = formData.get("telephone").trim();

    if (!inputName && !inputTelephone) {
      alert("Name and tlf.nr missing");
      return;
    }

    if (!inputName || !inputTelephone) {
      alert("Name and telephone are required");
      return;
    }

    if (inputName.split("").length < 2) {
      alert("Name must be atleast 2 letters");
      return;
    }

    if (!inputName.split(" ")[1]) {
      alert("Please add both first name and last name");
      return;
    }

    const digits = inputTelephone.replace(/\D/g, "");
    if (digits.length !== 10) {
      alert("Tlf.nr must be 10 digits");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/bookings", {
        method: "POST",
        body: JSON.stringify({
          visitor: {
            name: inputName,
            telephone: inputTelephone,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        alert("Booking not possible");
        return;
      }

      alert("Thank you for you booking!");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <form action={sendBooking} id="booking-form">
        <h3 style={{ alignSelf: "center" }}>Book seats</h3>
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
