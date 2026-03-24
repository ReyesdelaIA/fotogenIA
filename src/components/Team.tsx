import Image from "next/image";

export function Team() {
  return (
    <section id="equipo" className="section team">
      <div className="container">
        <p className="section-label">Equipo</p>
        <h2 className="section-title">Quién está detrás de cada shooting</h2>
        <p className="section-lead">
          Somos un equipo híbrido: producción foto tradicional + flujos con IA para
          iterar más rápido sin bajar el listón creativo.
        </p>
        <div className="team__grid" style={{ marginTop: 40 }}>
          <article className="team-card">
            <div className="team-card__photo">
              <Image
                src="/images/pauline.jpg"
                alt="Retrato de Pauline"
                width={400}
                height={500}
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
            <div>
              <p className="team-card__role">Dirección creativa & producción</p>
              <h3 className="team-card__name">Pauline</h3>
              <p className="team-card__bio">
                Dirección de arte y coordinación de set. Cuida narrativa visual,
                continuidad entre campañas y la experiencia en PDP.
              </p>
            </div>
          </article>
          <article className="team-card">
            <div className="team-card__photo">
              <Image
                src="/images/felipe.jpg"
                alt="Retrato de Felipe"
                width={400}
                height={500}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div>
              <p className="team-card__role">Foto, post & automatización IA</p>
              <h3 className="team-card__name">Felipe</h3>
              <p className="team-card__bio">
                Captura, color y post. Implementa pipelines con IA para acelerar
                edición, fondos y variantes manteniendo control de marca.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
