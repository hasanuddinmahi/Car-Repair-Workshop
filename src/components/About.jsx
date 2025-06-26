import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

import BuildIcon from "@mui/icons-material/Build";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import AnimatedCounter from "../effect/AnimatedCounter";

const statsData = [
  {
    icon: <BuildIcon sx={{ fontSize: 48, color: "#fbb034" }} />,
    label: "Repairs Completed",
    value: 50000,
  },
  {
    icon: <SentimentSatisfiedAltIcon sx={{ fontSize: 48, color: "#fbb034" }} />,
    label: "Happy Customers",
    value: 20000,
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 48, color: "#fbb034" }} />,
    label: "Years of Experience",
    value: 35,
  },
];

function About() {
  const bgRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setOffset(y * 0.1);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "5rem 1rem",
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: `${10 + offset}px`,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <img
          src="/gear-icon.svg"
          alt="Gear Icon"
          style={{ width: "200px", maxWidth: "60vw" }}
        />
      </div>

      <Container maxWidth="md" style={{ position: "relative", zIndex: 2 }}>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#222" }}
          >
            About Us
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.8,
              color: "#555",
            }}
          >
            With over{" "}
            <strong>
              <AnimatedCounter targetNumber={35} duration={2} /> years of
              experience
            </strong>
            , Nidham Alauddin Workshop has earned a reputation for trusted,
            high-quality auto repair in the UAE. Our skilled team is committed
            to <strong>honest service</strong>, <strong>transparent pricing</strong>, and
            putting your <strong>safety first</strong>. From diagnostics to major
            repairs, we handle every job with care and precision.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {statsData.map(({ icon, label, value }) => (
            <Grid key={label} item xs={12} sm={4} md={4}>
              <Box
                textAlign="center"
                sx={{
                  p: 3,
                  borderRadius: 3,
                  boxShadow: "0 4px 10px rgb(0 0 0 / 0.05)",
                  bgcolor: "#fff",
                  cursor: "default",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  {icon}
                </Box>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  <AnimatedCounter targetNumber={value} duration={2} suffix="+" />
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#555", fontWeight: "medium" }}
                >
                  {label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default About;
