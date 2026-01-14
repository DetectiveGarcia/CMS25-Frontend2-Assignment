import React, { Component } from "react";

export default class ClassComponent extends Component {



    

    render() {
      
        return <option value={this.props.price} key={this.props.title} >{`${this.props.title} (${this.props.price}kr)`}</option>;
    }
}

