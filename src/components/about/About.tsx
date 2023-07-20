import './about.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <div>
      <div></div>
      <div>
        <Container>
          <Row md={4}>
            <Col className="text-start">
              <div>Complex</div>
              <div>made</div>
              <div>simple</div>
            </Col>
            <Col className="text-start">
              <h6>Sitemap VASS</h6>
              <div>Home</div>
              <div>Casos éxito</div>
              <div>Somo VASS</div>
              <div>Impactos</div>
              <div>Método</div>
              <div>Tecnologías</div>
              <div>Proyectos I+D+i</div>
              <div>Insights</div>
              <div>Noticias</div>
              <div>VASS Research</div>
              <div>Canal de denuncias</div>
              <div>Contacto</div>
            </Col>
            <Col className="text-start">
              <h6>Sitemap Talento</h6>
              <div>Talento</div>
              <div>#LifeVASS</div>
              <div>Beneficios</div>
              <div>Planes para ti</div>
              <div>Proyectos</div>
              <div>Smartworking</div>
              <div>Ofertas</div>
            </Col>
            <Col className="text-start">
              <h6>Empresas</h6>
              <div>VASS</div>
              <div>Nateevo</div>
              <div>Serbatic</div>
              <div>vdSHOP</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About