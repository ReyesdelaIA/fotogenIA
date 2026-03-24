export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div>
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden />
            Fotografía textil · Post con IA · Delivery listo para tienda
          </div>
          <h1 className="hero__title">
            Catálogos que venden, con <em>foto</em> e <em>IA</em>
          </h1>
          <p className="hero__desc">
            Producción integral para marcas de moda y hogar: modelos, locaciones,
            consistencia de marca y retoques asistidos por inteligencia artificial
            para escalar tu e-commerce sin perder calidad.
          </p>
          <div className="hero__actions">
            <a href="#contacto" className="btn btn--primary">
              Solicitar propuesta
            </a>
            <a href="#portafolio" className="btn btn--ghost">
              Ver trabajos
            </a>
          </div>
        </div>
        <div className="hero__panel" aria-hidden="false">
          <div className="hero__panel-glow" />
          <p className="section-label">Qué entregamos</p>
          <h2 className="section-title" style={{ fontSize: "1.35rem" }}>
            Shootings pensados para conversión
          </h2>
          <p className="section-lead" style={{ marginBottom: 0 }}>
            Planificación de set, dirección de arte, captura y entrega en formatos
            optimizados para PDP, ads y marketplaces — con variantes y crops cuando
            los necesites.
          </p>
          <div className="hero__stat-row">
            <div>
              <div className="hero__stat-num">48h</div>
              <div className="hero__stat-label">primer entrega típica</div>
            </div>
            <div>
              <div className="hero__stat-num">4K+</div>
              <div className="hero__stat-label">resolución de captura</div>
            </div>
            <div>
              <div className="hero__stat-num">100%</div>
              <div className="hero__stat-label">brief alineado a marca</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
