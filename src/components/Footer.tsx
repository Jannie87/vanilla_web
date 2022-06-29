import { CSSProperties } from "react";

function Footer() {
  return (
    <div style={footStyle}>
      <span>kontakta oss</span>
    </div>
  );
}

export default Footer;

const footStyle: CSSProperties = {
  height: "10vh",
  backgroundColor: "#06546b",
  display: "flex",
  justifyContent: "center",
  color: "white",
};
