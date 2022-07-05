import { CSSProperties } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ProductCard from "../components/card";
import { mockedProducts } from "../products";
import subaru from "../assets/subaru.jpg";

function Main() {
  return (
    <div>
      <main
        className="MainContainer"
        style={{
          backgroundColor: "#333",
          display: "flex",
          height: "80vh",
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

        <aside style={{ display: "flex", flexDirection: "row" }}>
          <img src={subaru} alt="subaru" width={375} height={750} />
        </aside>
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
