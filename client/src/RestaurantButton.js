import React, { Component } from "react";

class RestaurantButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="btn btn-primary m-2">
        Add
      </button>
    );
  }
}

export default RestaurantButton;
