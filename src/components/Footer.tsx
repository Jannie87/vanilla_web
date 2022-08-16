import { CSSProperties } from "react";

function Footer() {
  return (
    <div style={footStyle}>
      <form>
        <input></input>
        <input></input>
        <input></input>
        <input></input>

        <input></input>
        <input></input>
        <input></input>
        <textarea></textarea>
      </form>
      <button></button>
    </div>
  );
}

export default Footer;

const footStyle: CSSProperties = {
  height: "80vh",
  backgroundColor: "#06546b",
  display: "flex",
  justifyContent: "center",
  color: "white",
};
