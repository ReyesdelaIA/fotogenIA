const steps = [
  {
    n: "01",
    title: "Brief y casting",
    text: "Definimos tono, escenarios, modelos y formatos de salida según canales y margen editorial.",
  },
  {
    n: "02",
    title: "Shoot & captura",
    text: "Rodaje con mirada e-commerce: planos, detalles de textura y consistencia entre prendas.",
  },
  {
    n: "03",
    title: "Post e IA asistida",
    text: "Color, limpieza y variantes con control humano. IA acelera, no reemplaza el criterio.",
  },
  {
    n: "04",
    title: "Entrega lista",
    text: "Nomenclatura, tamaños y export para tu CMS, ads o partners logísticos.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="section">
      <div className="container">
        <p className="section-label">Proceso</p>
        <h2 className="section-title">De la idea al catálogo publicado</h2>
        <p className="section-lead">
          Un mismo flujo para campañas pequeñas o temporadas completas, siempre con
          punto de contacto único y calendario claro.
        </p>
        <div className="process__steps">
          {steps.map((s) => (
            <article key={s.n} className="process-step">
              <div className="process-step__num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
