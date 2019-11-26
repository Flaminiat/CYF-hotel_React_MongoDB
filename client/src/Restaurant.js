import React, { Component } from "react";
import Order from "./Order";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <h3>You can order your food here</h3>
        <ul>
          <li>
            <Order orderType="Pizza" />
            <Order orderType="Salad" />
            <Order orderType="Tiramisu" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Restaurant;
