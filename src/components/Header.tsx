import { CSSProperties } from "react";
import logo from "../assets/logo_vanilla.png";

function Header() {
  return (
    <div style={rootStyle}>
      <button style={headerButtons}>Menu</button>
      <img src={logo} alt="logo" />
      <button style={headerButtons}>Cart</button>
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
  backgroundColor: "#333",
};
