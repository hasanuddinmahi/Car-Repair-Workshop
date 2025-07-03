import React from "react";
import {
  Speed,
  Warning,
  Opacity,
  Air,
  SettingsInputComposite,
  Settings,
} from "@mui/icons-material";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

function ServiceCard({ Icon, title, desc, color, index }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="col-md-4"
      style={{ display: "flex" }}
      aria-label={title}
      role="region"
      tabIndex={0} // make accessible focusable section
    >
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "#fff",
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          },
        }}
      >
        <Icon sx={{ fontSize: 50, color: color, mb: 2 }} aria-hidden="true" />
        <Typography variant="h6" fontWeight={600} gutterBottom component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </Box>
    </motion.article>
  );
}

function Services() {
  const services = [
    {
      Icon: Speed,
      title: "Engine Diagnostics",
      desc: "We use modern tools to quickly diagnose engine issues and offer reliable solutions.",
      color: "#1976d2",
    },
    {
      Icon: Warning,
      title: "Brake Service & Repair",
      desc: "Ensure your vehicle is safe with our complete brake inspection and repair services.",
      color: "#d32f2f",
    },
    {
      Icon: Opacity,
      title: "Oil Change",
      desc: "Fast, clean oil changes using premium oils to extend your engine’s life.",
      color: "#0288d1",
    },
    {
      Icon: Air,
      title: "Air & Cabin Filter Repair",
      desc: "Improve air quality and engine performance with filter cleaning or replacement.",
      color: "#388e3c",
    },
    {
      Icon: SettingsInputComposite,
      title: "Steering & Suspension Repair",
      desc: "Enhance vehicle handling and ride comfort with expert suspension and steering services.",
      color: "#fbc02d",
    },
    {
      Icon: Settings,
      title: "Transmission Repair",
      desc: "Comprehensive diagnostics and repair services for automatic and manual transmissions.",
      color: "#6d6d6d",
    },
  ];

  // JSON-LD structured data describing the offered services for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Auto Repair Services",
    "provider": {
      "@type": "AutoRepair",
      "name": "Nidham Alaudddin Workshop",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Abu Dhabi",
        "addressRegion": "Abu Dhabi",
        "addressCountry": "AE"
      },
      "telephone": "+971505219792",
      "url": "https://car-repair-workshop.vercel.app/" // Replace with your actual domain
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Repair Services",
      "itemListElement": services.map((s) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.desc,
        },
      })),
    },
  };

  return (
    <section
      id="services"
      className="py-5 bg-light"
      aria-label="Our car repair and auto service offerings"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Container>
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          gutterBottom
          sx={{
            mb: 5,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
          component="h2"
        >
          Our Services
        </Typography>
        <div className="row g-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;
