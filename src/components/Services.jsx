import React from "react";
import {
  Speed,
  Warning,
  Opacity,
  Air,
  SettingsInputComposite,
  Settings,
} from "@mui/icons-material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function ServiceCard({ Icon, title, desc, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="col-md-4"
      variants={variants}
      initial="hidden"
      animate={controls}
      style={{ display: "flex" }}
    >
      <div className="service-card p-4 border rounded shadow-sm bg-white h-100 text-center" style={{ flexGrow: 1 }}>
        <Icon sx={{ fontSize: 50, color, mb: 2 }} />
        <h3 className="h5">{title}</h3>
        <p>{desc}</p>
      </div>
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
    <section className="services bg-light py-5" id="services">
      <div className="container">
        <h2 className="text-center mb-5" style={{ fontWeight: "700" }}>
          Our Services
        </h2>
        <div className="row g-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
