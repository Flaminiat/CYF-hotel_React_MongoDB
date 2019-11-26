import React from "react";

const strings = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
//const listItem = strings.map(string => <li key={string}>{string}</li>);
const Footer = () => {
  return (
    <ul>
      {strings.map(string => (
        <li key={string}>{string}</li>
      ))}
    </ul>
  );
};

export default Footer;
