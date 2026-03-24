import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Team } from "@/components/Team";
import { StatsBar } from "@/components/StatsBar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#inicio" className="skip-link">
        Ir al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <Team />
        <StatsBar />
        <Process />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
