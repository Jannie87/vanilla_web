import { CSSProperties } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ProductCard from "../components/card";
import { mockedProducts } from "../products";
import subaru from "../assets/subaru.jpg";

function Main() {
  return (
    <div>
      <main>
        <div
          className="MainText"
          style={{
            backgroundColor: "#333",
            display: "flex",
            height: "10vh",
          }}
        ></div>
        <div
          className="MainContainer"
          style={{
            backgroundColor: "#06546b",
            display: "flex",
            height: "40vh",
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
          className="MainText"
          style={{
            backgroundColor: "#333",
            display: "flex",
            height: "30vh",
          }}
        ></div>
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
