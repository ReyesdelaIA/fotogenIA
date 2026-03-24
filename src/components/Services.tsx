const services = [
  {
    icon: "◆",
    title: "E-commerce & lookbook",
    text: "Fondo infinito, still life y looks editoriales con storytelling de producto.",
  },
  {
    icon: "◇",
    title: "Modelo & locación",
    text: "Casting, styling y escenarios en estudio o locación según presupuesto.",
  },
  {
    icon: "○",
    title: "IA para escala",
    text: "Variantes de color, fondos y crops consistentes sin repetir el shooting entero.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <p className="section-label">Servicios</p>
        <h2 className="section-title">Lo que tu tienda necesita, en un solo lugar</h2>
        <p className="section-lead">
          Unimos producción clásica de alta gama con automatización inteligente para
          que tu equipo interno gaste tiempo en vender, no en Photoshop.
        </p>
        <div className="services__grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <div className="service-card__icon" aria-hidden>
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
