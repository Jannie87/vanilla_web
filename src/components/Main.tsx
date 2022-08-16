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
            justifyContent: "center",
          }}
        >
          <p style={textStyle}>
            Hos VanillaTunning så kan du serva och optimera prestandan i din
            bil..
          </p>
        </div>
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
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <p style={textStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quo
            corporis. Consequatur dicta quibusdam magnam rerum necessitatibus
            nemo ratione delectus adipisci amet, quis a debitis aspernatur
            numquam recusandae mollitia eaque! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rem, quo corporis. Consequatur dicta
            quibusdam magnam rerum necessitatibus nemo ratione delectus adipisci
            amet, quis a debitis aspernatur numquam recusandae mollitia eaque!
          </p>
        </div>
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

const textStyle: CSSProperties = {
  color: "whitesmoke",
  fontWeight: "600",
  fontSize: "1.2rem",
  fontFamily: "",
  padding: "2rem",
};
