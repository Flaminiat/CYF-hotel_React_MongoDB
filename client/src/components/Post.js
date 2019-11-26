import React, { Component } from "react";

export default class LastName extends Component {
  render() {
    return (
      <div>
        <h1>D {this.props.pad} Name</h1>
        <p>it's the {this.props.content} Name</p>
      </div>
    );
  }
}
