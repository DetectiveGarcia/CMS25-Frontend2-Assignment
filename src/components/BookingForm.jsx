import React from 'react'

export const BookingForm = () => {

    const sendBooking = (formData) => {
        


        const inputName = formData.get("name");
        const inputTelephone = formData.get("telephone");
        

        console.log(inputName);
        console.log(inputTelephone);
        

    }


    
    // class Movie{
    //     constructor(poster, price, title, year){
    //         this.poster = poster;
    //         this.price = price;
    //         this.title = title;
    //         this.year = year;
    //     }
    // }



  return (
    <form action={sendBooking}  >
        <label htmlFor="name" >Namn: </label>
        <input type="text" name='name' id='' />

        <label htmlFor="telephone">Telefonnummer: </label>
        <input type="text" name="telephone" id="" />
        <input type="submit" value="Send" />
    </form>
  )
}
