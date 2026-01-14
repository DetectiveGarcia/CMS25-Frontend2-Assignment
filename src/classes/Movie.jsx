import React, { Component } from "react";

export default class ClassComponent extends Component {

    constructor(title, price, year, poster)
    {
        this.title = title;
        this.price = price;
        this.year = year;
        this.poster = poster;
    }

  render() {
    return <div>ClassComponent</div>;
  }
}

