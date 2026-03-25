import Image from "next/image";

export function Team() {
  return (
    <section id="equipo" className="section team">
      <div className="container">
        <p className="section-label">Equipo</p>
        <h2 className="section-title">Quién ejecuta tu producción de punta a punta</h2>
        <p className="section-lead">
          Fotografía profesional y flujos con IA: la misma dupla que cuida el set y
          la imagen final que ves en tu tienda.
        </p>
        <div className="team__grid">
          <article className="team-card">
            <div className="team-card__photo-shell">
              <div className="team-card__photo">
                <Image
                  src="/foto-pauline.jpg"
                  alt="Retrato de Pauline Gigoux"
                  width={2672}
                  height={3556}
                  sizes="(min-width: 768px) 200px, 70vw"
                  priority
                />
              </div>
            </div>
            <div className="team-card__body">
              <p className="team-card__role">Fotógrafa profesional</p>
              <h3 className="team-card__name">Pauline Gigoux</h3>
              <p className="team-card__bio">
                Fotógrafa profesional especializada en personas, producto y otras
                líneas de imagen comercial. Más de 10 años de experiencia en
                fotografía de estilo profesional.
              </p>
            </div>
          </article>
          <article className="team-card">
            <div className="team-card__photo-shell">
              <div className="team-card__photo">
                <Image
                  src="/foto-felipe.JPG"
                  alt="Retrato de Felipe Reyes"
                  width={320}
                  height={427}
                  sizes="(min-width: 768px) 200px, 70vw"
                />
              </div>
            </div>
            <div className="team-card__body">
              <p className="team-card__role">Experto en inteligencia artificial</p>
              <h3 className="team-card__name">Felipe Reyes</h3>
              <p className="team-card__bio">
                Experto en inteligencia artificial y profesor universitario en la
                materia. Ha acompañado la implementación de IA en más de 200
                empresas y ha formado a más de 3000 personas.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
