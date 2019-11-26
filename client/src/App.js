import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading";
import Footer from "./Footer";
import "./App.css";
import Glasgow from "./pics/glasgow.jpeg";
import Manchester from "./pics/Man4.jpeg";
import London from "./pics/london.jpeg";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="TouristInfoCards">
        <div className="card">
          <img src={Glasgow} alt="Glasgow" className="card-img-top" />
          <div className="card-body">
            <a href="www.peoplemakeglasgow.com" className="btn btn-primary">
              Glasgow
            </a>
            <p>
              New destination, out of mainstream circuits but featuring lots of
              attractions!
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Manchester} alt="Manchester" className="card-img-top" />
          <div className="card-body">
            <a href="www.visitmanchester.com" className="btn btn-primary">
              Manchester
            </a>
            <p>
              Perfect city for a weekend, home to one of the most important
              fotball teams!
            </p>
          </div>
        </div>
        <div className="card">
          <img src={London} alt="London" className="card-img-top" />
          <div className="card-body">
            <a href="www.visitlondon.com" className="btn btn-primary">
              London
            </a>
            <p>
              History, art, shopping are endless, multi-ethnic and in continuous
              evolution!
            </p>
          </div>
        </div>
      </div>
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
