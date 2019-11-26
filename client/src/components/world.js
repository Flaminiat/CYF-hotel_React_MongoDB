// Create a compontetnt usuing React class
import React, { component } from ".react";
class LastName extends component {
  render() {
    return (
      <div>
        <h1>This is the {this.props.pad} Name</h1>
        <p>it's the {this.props.content} Name</p>
      </div>
    );
  }
}
export default LastName;
