import { CSSProperties } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo_vanilla.png";
import NavBar from "./NavBar";
import "./style.css";

function Header() {
  return (
    <div style={rootStyle}>
      <img src={logo} alt="logo" />
      <div style={navBar}>
        <NavBar />
      </div>
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

const navBar: CSSProperties = {
  margin: "0 3rem",
  color: "whitesmoke",
  border: "none",
  fontFamily: "Century Gothic",
};
