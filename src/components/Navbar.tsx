export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__brand">
          foto<span>×</span>ia
        </a>
        <nav className="navbar__links" aria-label="Principal">
          <a href="#inicio">Inicio</a>
          <a href="#equipo">Equipo</a>
          <a href="#proceso">Proceso</a>
          <a href="#servicios">Servicios</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#testimonios">Testimonios</a>
        </nav>
        <a href="#contacto" className="navbar__cta">
          Hablar del proyecto
        </a>
      </div>
    </header>
  );
}
