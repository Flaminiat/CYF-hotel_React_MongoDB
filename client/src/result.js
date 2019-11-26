import React, { Component } from "react";
import moment from "moment";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  handleClick() {
    console.log("I am clicked");
    this.state.classes === "table-warning"
      ? this.handleClick2()
      : this.handleClick1();
  }
  handleClick1() {
    console.log("I am clicked one");
    this.setState({ classes: "table-warning" });
    return this.state.classes;
  }
  handleClick2() {
    console.log("I am clicked two");
    this.setState({ classes: "table" });
    return this.state.classes;
  }

  render() {
    return (
      <tr className={this.state.classes}>
        <td>
          {" "}
          <input
            type="checkbox"
            onClick={this.handleClick}
            style={{ backgroundColor: "" }}
          />
        </td>
        <td>{this.props.object.id}</td>
        <td>{this.props.object.title}</td>
        <td>{this.props.object.firstName}</td>
        <td>{this.props.object.surname}</td>
        <td>{this.props.object.email}</td>
        <td>{this.props.object.roomId}</td>
        <td>
          {moment().format(
            this.props.object.checkInDate.toString().substring(0, 10)
          )}
        </td>
        <td>
          {moment().format(
            this.props.object.checkOutDate.toString().substring(0, 10)
          )}
        </td>
        <td>
          {moment(this.props.object.checkOutDate).diff(
            moment(this.props.object.checkInDate),
            "days"
          )}
        </td>
      </tr>
    );
  }
}

export default Result;
