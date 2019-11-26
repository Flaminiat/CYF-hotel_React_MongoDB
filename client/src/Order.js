import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Order extends Component {
  state = {
    orders: 0
  };

  addOrder = () => {
    this.setState({ orders: this.state.orders + 1 });
    console.log("Add order");
  };
  /*
  constructor(props) {
    super(props);
    this.state = { orders: 0 };
    //this.addOrder = this.addOrder.bind(this);
  }

  */
  render() {
    return (
      <div>
        <span className="m-2">{this.props.orderType}</span>
        <span className="m-2">{this.state.orders}</span>
        <RestaurantButton onClick={this.addOrder} />
      </div>
    );
  }
}

export default Order;
