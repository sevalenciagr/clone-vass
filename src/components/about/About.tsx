import './about.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="row">
        <div className="col-sm-3 text-end text-md-start fw-bold">
          <p>Complex <br />
            made <br />
            simple <br />
          </p>
        </div>
        <div className="col-sm-3 fs-6 p-0 m-0 text-start">
          <div className="fw-bold fs-4 pb-4">Sitemap VASS</div>
          <div>Home</div>
          <div>Casos éxito</div>
          <div>Somos Vass</div>
          <div>Método</div>
          <div>Tecnologias</div>
          <div>Proyectos I+D+i</div>
          <div>Insights</div>
          <div>Noticias</div>
          <div>Vass Research</div>
          <div>Canal de denuncias</div>
          <div className="text-start">Contacto</div>
        </div>
        <div className="col-sm-3 fs-6 p-0 m-0 text-start ">
          <div className="fw-bold fs-4 pb-4">Sitemap Talento</div>
          <div>Talento</div>
          <div>#LifeVASS</div>
          <div>Beneficios</div>
          <div>Planes para ti</div>
          <div>Proyectos</div>
          <div>Smartworking</div>
          <div>Ofertas</div>
        </div>
        <div className="col-sm-3 fs-6 p-0 m-0 py-4 p-md-0 text-start text-md-end">
          <div className="fw-bold fs-4 pb-4">Empresas</div>
          <div>VASS</div>
          <div>Nateevo</div>
          <div>Serbatic</div>
          <div>vdSHOP</div>
        </div>
        <a className="navbar-brand d-none d-md-block  pb-5" href="#">
            <img src="https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png" alt="Logo" width="71" height="24" />
          </a>
        <hr />
        <div className="row text-center p_languaje py-3">
          <div className="text-lg-start fw-light">Copyright &#169; 2023 Todos los derechos reservados</div>
          <div>Memoria Ambiental</div>
          <div>Politica de Cookies</div>
          <div>Politica de calidad y medio ambiente</div>
        <div className="d-flex fs-1 justify-content-center justify-content-lg-end">
          <i className="pe-2 lab la-twitter"></i>
          <i className="pe-2 lab la-linkedin"></i>
          <i className="pe-2 lab la-instagram"></i>
          <i className="pe-2 lab la-youtube"></i>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About