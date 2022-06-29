import { CSSProperties } from "react";
import Card from "./card";

function Main() {
  return (
    <div style={rootStyle}>
      <Card />
    </div>
  );
}

export default Main;

const rootStyle: CSSProperties = {
  backgroundColor: "black",
  height: "90vh",
};
