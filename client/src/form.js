import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: ""
    };
  }

  handleNewBookingTitle = event => {
    this.setState({ title: event.target.value });
    return this.state.title;
  };

  handleNewBookingName = event => {
    this.setState({ firstName: event.target.value });
    return this.state.firstName;
  };

  handleNewBookingSurname = event => {
    this.setState({ surname: event.target.value });
    return this.state.surname;
  };
  handleNewBookingEmail = event => {
    this.setState({ email: event.target.value });
    return this.state.email;
  };
  handleNewBookingRoomId = event => {
    this.setState({ roomId: event.target.value });
    return this.state.roomId;
  };
  handleNewBookingCheckInDate = event => {
    this.setState({ checkInDate: event.target.value });
    return this.state.checkInDate;
  };
  handleNewBookingCheckOutDate = event => {
    this.setState({ checkOutDate: event.target.value });
    return this.state.checkOutDate;
  };

  handleNewBooking = () => {
    console.log(this.state);
    return this.state;
  };
  submitNewBooking = event => {
    event.preventDefault();
    const newBooking = {
      title: this.state.title,
      firstName: this.state.firstName,
      surname: this.state.surname,
      email: this.state.email,
      roomId: this.state.roomId,
      checkInDate: this.state.checkInDate,
      checkOutDate: this.state.checkOutDate
    };
    console.log(newBooking);
    axios
      .post("http://localhost:5000/bookings/add", newBooking)
      .then(res => console.log(res.data));
  };

  render() {
    return (
      <div>
        <form
          className="form-group container"
          onSubmit={() => this.submitNewBooking(event)}
          onChange={() => this.handleNewBooking(event)}
          // value={this.state.newBook || ""}
        >
          <label htmlFor="customerName">New Hotel Booking</label>
          <div className="form-row">
            <div className="form-group col-md-2 title">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control title"
                id="title"
                onChange={() => this.handleNewBookingTitle(event)}
                value={this.state.title}
              ></input>
            </div>
            <div className="form-group col-md-4 firstName">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control firstName"
                id="firstName"
                onChange={() => this.handleNewBookingName(event)}
                value={this.state.firstName}
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                className="form-control surname"
                id="surname"
                onChange={() => this.handleNewBookingSurname(event)}
                value={this.state.surname}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-2 roomId">
              <label htmlFor="roomId">Room ID</label>
              <input
                type="text"
                className="form-control roomId"
                id="roomId"
                onChange={() => this.handleNewBookingRoomId(event)}
                value={this.state.roomId}
              ></input>
            </div>
            <div className="form-group col-md-3 checkInDate">
              <label htmlFor="checkInDate">Check-in date</label>
              <input
                type="text"
                className="form-control checkInDate"
                id="checkInDate"
                onChange={() => this.handleNewBookingCheckInDate(event)}
                value={this.state.checkInDate}
              ></input>
            </div>
            <div className="form-group col-md-3 checkOutDate">
              <label htmlFor="checkOutDate">Check-out date</label>
              <input
                type="text"
                className="form-control checkOutDate"
                id="checkOutDate"
                onChange={() => this.handleNewBookingCheckOutDate(event)}
                value={this.state.checkOutDate}
              ></input>
            </div>
            <div className="form-group col-md-4 email">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                className="form-control email"
                id="email"
                onChange={() => this.handleNewBookingEmail(event)}
                value={this.state.email}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
                <button className="btn btn-primary col-md-2">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
