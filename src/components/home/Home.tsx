import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div className="custom-height">
      <img
        src="https://media.licdn.com/dms/image/C5612AQHYwkuDRyXecQ/article-cover_image-shrink_600_2000/0/1625738082076?e=1695254400&v=beta&t=mkNm_JG3IV6uZ3ROkjj9XHPHFIy5N9goJ_OE7cEZqYE"
        alt="Imagen de muestra"
        className="full-width-image"
      />
      <div className="container-wrapper">
        <Container>
          <Row md={3}>
            <Col className="text-start border-right col-divider">
              <h2 className="text-start">EMPECEMOS A HACERLO SENCILLO</h2>
            </Col>

            <Col className="text-start col-divider">
              <h5 className="text-start">
                Nos emociona impulsar tu transformación digital
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;

