import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="footer__brand">
            <Image src="/logo.png" alt="foto×ia" width={878} height={680} />
          </div>
          <p className="footer__meta" style={{ marginTop: 8 }}>
            Fotografía profesional + IA para catálogos textil.
          </p>
        </div>
        <nav className="footer__links" aria-label="Pie de página">
          <a href="#servicios">Servicios</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <p className="footer__meta">© {new Date().getFullYear()} foto×ia</p>
      </div>
    </footer>
  );
}
