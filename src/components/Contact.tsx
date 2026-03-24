export function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <p className="section-label">Contacto</p>
        <h2 className="section-title">Contanos tu próximo lanzamiento</h2>
        <p className="section-lead">
          Completá el formulario y te respondemos con disponibilidad y una propuesta
          acorde a volumen y canales.
        </p>
        <div className="contact__grid">
          <div className="contact__details">
            <p>
              También podemos agendar una videollamada corta para revisar referencias
              y definir formatos de salida.
            </p>
            <dl className="contact__list">
              <div>
                <dt>Email</dt>
                <dd>hola@fotoia.studio</dd>
              </div>
              <div>
                <dt>Ubicación</dt>
                <dd>Buenos Aires · producción remota & on-site</dd>
              </div>
            </dl>
          </div>
          <form className="contact-form" aria-labelledby="contacto-heading">
            <h3 id="contacto-heading" className="sr-only">
              Formulario de contacto
            </h3>
            <div className="contact-form__row contact-form__row--2">
              <div className="field">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" autoComplete="name" placeholder="Tu nombre" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="vos@marca.com"
                />
              </div>
            </div>
            <div className="contact-form__row" style={{ marginTop: 20 }}>
              <div className="field">
                <label htmlFor="marca">Marca o proyecto</label>
                <input id="marca" name="marca" type="text" placeholder="Nombre del proyecto" />
              </div>
            </div>
            <div className="contact-form__row" style={{ marginTop: 20 }}>
              <div className="field">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Piezas, volumen aproximado, fechas y canales (web, ads, marketplace…)"
                />
              </div>
            </div>
            <div className="contact-form__actions">
              <button type="button" className="btn btn--primary">
                Enviar consulta
              </button>
              <p className="contact-form__hint">
                Este envío es solo visual por ahora; en la siguiente iteración podés
                conectarlo a un endpoint o proveedor de formularios.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
