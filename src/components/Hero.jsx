import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { motion, useInView } from "framer-motion";

function Hero() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const img = new Image();
    img.src = "/car-bg.jpg";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <section
      ref={ref}
      className="hero d-flex align-items-center justify-content-center text-center"
      style={{
        minHeight: "80vh",
        color: "white",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#222",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: bgLoaded
            ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/car-bg.jpg')`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: bgLoaded ? 1 : 0,
          transition: "opacity 0.8s ease",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <motion.div
        className="container"
        style={{ position: "relative", zIndex: 2, maxWidth: "800px" }}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="display-4" style={{ fontWeight: "700", marginBottom: "0.5rem" }}>
          Expert Car Repair & Auto Service
        </h1>
        <p
          className="lead"
          style={{
            fontSize: "1.25rem",
            marginBottom: "1.5rem",
            fontWeight: "500",
          }}
        >
          Reliable, Fast, Affordable
        </p>
        <Button
          variant="contained"
          size="large"
          href="#contact"
          sx={{
            bgcolor: "#fbb034",
            color: "black",
            px: 4,
            py: 1.5,
            fontWeight: 700,
            boxShadow: "0 4px 15px rgba(251, 176, 52, 0.6)",
            "&:hover": {
              bgcolor: "#f9a825",
              boxShadow: "0 6px 20px rgba(249, 168, 37, 0.8)",
            },
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          Book Appointment
        </Button>
      </motion.div>
    </section>
  );
}

export default Hero;
