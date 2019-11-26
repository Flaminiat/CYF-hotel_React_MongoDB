import React, { Component } from "react";
//import FakeBookings from "./data/fakeBookings.json";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import Form from "./form";
import axios from "axios";

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/bookings/")
      .then(response => {
        this.setState({ bookings: response.data });
        console.log(this.state.bookings);
      })
      .catch(error => {
        console.log(error);
      });
  }
  

  search = searchVal => {
    console.info("TO DO!", searchVal);
    console.log("Hello");
    const toShow = this.state.bookings.filter(booking => {
      return booking.firstName === searchVal || booking.surname === searchVal;
    });
    this.setState({ bookings: toShow });
  };

  booking = newClient => {
    console.info("TO DO!", newClient);
    console.log("Hello");
    this.setState({ bookings: this.state.bookings.concat(newClient) });
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <SearchResults
            sortBy={this.props.sortBy}
            bookingsList={this.state.bookings}
          />
          <Form booking={this.booking} />
        </div>
      </div>
    );
  }
}
export default Bookings;
