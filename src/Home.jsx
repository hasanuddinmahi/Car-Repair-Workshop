import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default Home;
