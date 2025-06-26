import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import AnimatedSection from "./effect/AnimatedSection";
import useScrollDirection from "./hooks/useScrollDirection";

function Home() {
  const scrollDirection = useScrollDirection();

  const sections = {
    hero: useRef(),
    services: useRef(),
    about: useRef(),
    contact: useRef(),
  };

  return (
    <div>
      <Navbar />
      <section id="hero" ref={sections.hero} className="section-peek">
        <AnimatedSection reverse={scrollDirection === "up"}>
          <Hero />
        </AnimatedSection>
      </section>
      <section id="services" ref={sections.services} className="section-peek">
        <AnimatedSection reverse={scrollDirection === "up"}>
          <Services />
        </AnimatedSection>
      </section>
      <section id="about" ref={sections.about} className="section-peek">
        <AnimatedSection reverse={scrollDirection === "up"}>
          <About />
        </AnimatedSection>
      </section>
      <section id="contact" ref={sections.contact} className="section-peek">
        <AnimatedSection reverse={scrollDirection === "up"}>
          <ContactForm />
        </AnimatedSection>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Home;
