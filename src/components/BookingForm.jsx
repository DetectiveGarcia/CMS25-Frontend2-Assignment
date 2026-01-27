import React from "react";

export const BookingForm = () => {
  const sendBooking = async (formData) => {
    const inputName = formData.get("name");
    const inputTelephone = formData.get("telephone");


    if(!inputName && !inputTelephone){
      alert("Name and tlf.nr missing");
      return;
    }

    if(!inputName || inputName === " "){
      alert("Name missing");
      return;
    }

    if(!inputTelephone || inputTelephone === " "){
      alert("Telephone number missing")
      return;
    }

    
    if(inputName.split("").length < 2){
      alert("Name must be atleast 2 letters");
      return;
    } 

    if(!inputName.split(" ")[1]){
      alert("Please add both first name and last name");
      return;
    }

    if(!inputTelephone.split("").length === 10){
      alert("Tlf.nr must be 10 letters");
      return;
    }



  };


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
