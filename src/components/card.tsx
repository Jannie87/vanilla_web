import { CSSProperties, useContext } from "react";
import { Button, Card } from "react-bootstrap";
// import { ProductContext } from "../context/productContext";
// import { Link } from "react-router-dom";
import { mockedProducts } from "../products";
import { Product } from "../products";

export interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card border="dark" style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ width: "19.9rem", height: "12rem" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

//
