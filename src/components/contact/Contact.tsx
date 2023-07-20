import "./contact.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <div className="contact-container">
      <Container>
        <Row md={2}>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">Nombre y apellidos</InputGroup.Text>
              <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">Email</InputGroup.Text>
              <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">Empresa/Organismo</InputGroup.Text>
              <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">País</InputGroup.Text>
              <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">Teléfono</InputGroup.Text>
              <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text>
                Mensaje:
              </InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
          </Col>
        </Row>
        <Button variant="primary">Enviar</Button>{' '}
      </Container>

    </div>
  );
};

export default Contact;
