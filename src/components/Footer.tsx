import { CSSProperties } from "react";
import { Row, Form, Col, InputGroup, Button, FormLabel } from "react-bootstrap";

function Footer() {
  return (
    <div id="contact" style={footerStyle}>
      <div style={formStyle}>
        <h2>Kontakta oss: </h2>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Firstname"
              name="firstname"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a firstname.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              required
              type="lastname"
              placeholder="Lastname"
              name="lastname"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a lastname.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              required
              placeholder="Phone number"
              name="phoneNumber"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a phone number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control required placeholder="Email" name="email" />
            <Form.Control.Feedback type="invalid">
              Please provide an email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control required placeholder="Email" name="email" />
            <Form.Control.Feedback type="invalid">
              Please provide an email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="mb-3">
          <Form.Check label=" Motoroptimering" />
          <Form.Check label=" Service" />
          <Form.Check label=" Motoroptimering" />
        </div>
        <InputGroup style={InputStyle}>
          <Form.Control
            as="textarea"
            aria-label="Meddelande"
            placeholder="meddelande"
          />
        </InputGroup>
      </div>
      <Button variant="dark">SKICKA</Button>
      <div
        style={{
          padding: "2rem",
        }}
      >
        <span style={{ color: "whitesmoke" }}>© VanillaTuning </span>
      </div>
    </div>
  );
}

export default Footer;

const formStyle: CSSProperties = {
  backgroundColor: "#06546b",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  width: "50vw",
  margin: "1rem",
  padding: "2rem",
  fontFamily: "Century Gothic",
};
const InputStyle: CSSProperties = {
  backgroundColor: "#06546b",
  display: "flex",
  width: "25%",
  justifyContent: "center",
  fontFamily: "Century Gothic",
  color: "white",
};
const footerStyle: CSSProperties = {
  height: "90vh",
  backgroundColor: "#333",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontFamily: "Century Gothic",
};
