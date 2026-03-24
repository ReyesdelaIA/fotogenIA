const quotes = [
  {
    quote:
      "Pasamos de tres semanas por temporada a una semana con calidad igual o mejor. La mano en el post se nota.",
    name: "Lucía M.",
    role: "Head of E-commerce · Marca de loungewear",
  },
  {
    quote:
      "Los archivos llegan listos para Shopify y Ads. Cero ida y vuelta por tamaños o nombres.",
    name: "Andrés V.",
    role: "Founder · DTC textiles hogar",
  },
  {
    quote:
      "El mix foto + IA nos permitió lanzar drops semanales sin quemar al equipo.",
    name: "Valentina R.",
    role: "Marketing Lead · Retail multimarca",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="section">
      <div className="container">
        <p className="section-label">Testimonios</p>
        <h2 className="section-title">Marcas que ya confían</h2>
        <p className="section-lead">
          Trabajamos con equipos pequeños que necesitan velocidad sin sacrificar la
          identidad visual.
        </p>
        <div className="testimonials__grid">
          {quotes.map((t) => (
            <blockquote key={t.name} className="testimonial">
              <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
              <footer className="testimonial__author">
                <strong>{t.name}</strong>
                {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
