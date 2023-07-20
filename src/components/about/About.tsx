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
            <Col>
              <div className="text-start">Complex</div>
              <div className="text-start">made</div>
              <div className="text-start">simple</div>
            </Col>
            <Col className="text-start">
              Sitemap VASS
              <div className="text-start">Home</div>
              <div className="text-start">Casos éxito</div>
              <div className="text-start">Somo VASS</div>
              <div className="text-start">Impactos</div>
              <div className="text-start">Método</div>
              <div className="text-start">Tecnologías</div>
              <div className="text-start">Proyectos I+D+i</div>
              <div className="text-start">Insights</div>
              <div className="text-start">Noticias</div>
              <div className="text-start">VASS Research</div>
              <div className="text-start">Canal de denuncias</div>
              <div className="text-start">Contacto</div>
            </Col>
            <Col className="text-start">
              Sitemap Talento
              <div className="text-start">Talento</div>
              <div className="text-start">#LifeVASS</div>
              <div className="text-start">Beneficios</div>
              <div className="text-start">Planes para ti</div>
              <div className="text-start">Proyectos</div>
              <div className="text-start">Smartworking</div>
              <div className="text-start">Ofertas</div>
            </Col>
            <Col className="text-start">
              Empresas
              <div className="text-start">VASS</div>
              <div className="text-start">Nateevo</div>
              <div className="text-start">Serbatic</div>
              <div className="text-start">vdSHOP</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About