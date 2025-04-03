import React from "react";
import logo from "../../assets/images/logo.png";
import GameState from "./GameState";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <GameState />
      <Menu />
    </header>
  );
};

export default Header;
