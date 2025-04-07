import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo splitter" />
    </header>
  );
};

export default Header;
