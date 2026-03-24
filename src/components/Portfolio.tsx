const items = [
  { label: "Moda · Studio" },
  { label: "Textil hogar" },
  { label: "Lifestyle urbano" },
  { label: "Detalle textura" },
  { label: "Campaña color" },
  { label: "PDP limpio" },
];

export function Portfolio() {
  return (
    <section id="portafolio" className="section portfolio">
      <div className="container">
        <p className="section-label">Portafolio</p>
        <h2 className="section-title">Referencias de estilo y consistencia</h2>
        <p className="section-lead">
          Placeholder visual hasta integrar tu reel. Sustituye estas tarjetas por
          imágenes reales manteniendo crops similares.
        </p>
        <div className="portfolio__grid">
          {items.map((item, i) => (
            <div
              key={item.label}
              className="portfolio-item"
              data-label={item.label}
              style={{
                opacity: 1 - i * 0.04,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
