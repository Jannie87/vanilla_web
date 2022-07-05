import { CSSProperties } from "react";
import logo from "../assets/logo_vanilla.png";
import "./style.css";

function Header() {
  return (
    <div style={rootStyle}>
      <button style={headerButtons}>
        <span className="material-icons-outlined">menu</span>
      </button>
      <img src={logo} alt="logo" />
      <button style={headerButtons}>
        <span className="material-icons-outlined">mail</span>
      </button>
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
