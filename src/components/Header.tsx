import { CSSProperties } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo_vanilla.png";
import "./style.css";

function Header() {
  return (
    <div style={rootStyle}>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Header;

const rootStyle: CSSProperties = {
  height: "5rem",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#06546b",

  padding: "1rem",
};

const headerButtons: CSSProperties = {
  margin: "0 3rem",
  color: "white",
  backgroundColor: "#06546b",
  border: "none",
};
