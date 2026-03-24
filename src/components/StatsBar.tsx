export function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Indicadores">
      <div className="container stats-bar__row">
        <div>
          <div className="stats-bar__value">+120</div>
          <div className="stats-bar__label">producciones año</div>
        </div>
        <div>
          <div className="stats-bar__value">32</div>
          <div className="stats-bar__label">marcas acompañadas</div>
        </div>
        <div>
          <div className="stats-bar__value">98%</div>
          <div className="stats-bar__label">rebooking en campañas</div>
        </div>
        <div>
          <div className="stats-bar__value">12</div>
          <div className="stats-bar__label">países de envío digital</div>
        </div>
      </div>
    </section>
  );
}
