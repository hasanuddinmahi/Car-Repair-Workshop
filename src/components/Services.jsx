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
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="col-md-4"
      style={{ display: "flex" }}
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
        <Icon sx={{ fontSize: 50, color: color, mb: 2 }} />
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </Box>
    </motion.div>
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

  return (
    <section id="services" className="py-5 bg-light">
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
