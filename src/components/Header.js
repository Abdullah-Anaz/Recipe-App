import React from "react";
import "./Header.css";

function Header({ heading }) {
  return (
    <div className="header">
      <p>Hello!</p>
      <h1>{heading}</h1>
    </div>
  );
}

export default Header;
