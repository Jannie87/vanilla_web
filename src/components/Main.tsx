import { CSSProperties } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ProductCard from "../components/card";
import { mockedProducts } from "../products";
import carhood from "../assets/carhood.jpg";

function Main() {
  return (
    <div>
      <main>
        <div
          className="IntroText"
          style={{
            backgroundColor: "#333",
            display: "flex",
            height: "10vh",
          }}
        ></div>
        <div
          className="ServiceBox"
          style={{
            backgroundColor: "#06546b",
            display: "flex",
            padding: "2rem",
          }}
        >
          <Container>
            <Row>
              <Col>
                <div style={productCards}>
                  {mockedProducts.map((product) => (
                    <ProductCard product={product} />
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="AboutText"
          style={{
            backgroundColor: "#333",
            display: "flex",
            height: "30vh",
          }}
        ></div>
        <div
          className="ImageBox"
          style={{
            backgroundColor: "#06546b",
            display: "flex",
            padding: "2rem",
            justifyContent: "center",
          }}
        >
          <img src={carhood} alt="carhood" height={"400px"} />
        </div>
      </main>
    </div>
  );
}

export default Main;

const productCards: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2rem",
  paddingTop: "3rem",
};
