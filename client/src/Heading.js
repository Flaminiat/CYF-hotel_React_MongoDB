import React from "react";
import Clock from "./Clock";

const Heading = () => {
  return (
    <div className="Container-heading">
      <div className="flexItem clock">
        <Clock />
      </div>
      <div className="flexItem">
        <header className="App-header">CYF Hotel</header>
      </div>
      <div className="Flex-item">
        <img
          className="App-logo"
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          alt="logo of CYF hotel"
        />
      </div>
    </div>
  );
};

export default Heading;
