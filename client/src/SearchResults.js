import React, { Component } from "react";
import Result from "./result";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingsList: props.bookingsList
    };
  }

  render() {
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Select</th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">E-mail</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">N° of Days</th>
          </tr>
        </thead>
        <tbody>
          {this.props.bookingsList.map(object => {
            return <Result object={object} key={object._id} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default SearchResults;
