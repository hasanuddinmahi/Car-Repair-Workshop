import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Hero() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/car-bg.jpg";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <Box
      component="section"
      className="d-flex align-items-center justify-content-center text-center"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#222",
        color: "white",
        py: { xs: 6, md: 8 },
        minHeight: { xs: "60vh", md: "80vh" },
      }}
    >
      {/* Dynamic Background */}
      <Box
        sx={{
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

      {/* Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          fontWeight={700}
          mb={1}
          sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
        >
          Expert Car Repair & Auto Service
        </Typography>

        <Typography
          variant="h6"
          component="p"
          fontWeight={500}
          mb={3}
          sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
        >
          Reliable, Fast, Affordable
        </Typography>

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
      </Container>
    </Box>
  );
}

export default Hero;
