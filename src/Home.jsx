import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </motion.div>
  );
}

export default Home;
