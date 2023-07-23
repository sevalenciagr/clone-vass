import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container bg-black py-5 px-3">
      <div className="row container py-5 my-5">
          <div className="col-sm-4 col-md-6">
            <div className="mb-3">
              <div className="">
                <input type="text" className="form-control" id="name" />
                <label htmlFor="name">Nombre y apellidos</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="">
                <input type="email" className="form-control" id="email" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="">
                <input type="text" className="form-control" id="company" />
                <label htmlFor="company">Empresa/Organismo</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="">
                <input type="text" className="form-control" id="country" />
                <label htmlFor="country">País</label>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-6">
            <div className="mb-3">
              <div className="">
                <input type="tel" className="form-control" id="phone" />
                <label htmlFor="phone">Teléfono</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="">
                <textarea className="form-control" id="message" rows={5}></textarea>
                <label htmlFor="message">Mensaje:</label>
              </div>
            </div>
            <div className="d-flex justify-content-center position-relative">
              <button type="button" className="btn btn-outline-light border-2 btn_send">Enviar</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
