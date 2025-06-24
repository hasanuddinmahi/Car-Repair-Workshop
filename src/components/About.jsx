import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";

import BuildIcon from "@mui/icons-material/Build";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function formatNumberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function AnimatedCounter({ targetNumber, suffix = "+", duration = 3 }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({
        count: targetNumber,
        transition: {
          duration,
          ease: [0.77, 0, 0.175, 1], // smoother easeInOutQuart curve
        },
      });
    }
  }, [controls, isInView, targetNumber, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ count: 0 }}
      animate={controls}
      onUpdate={(latest) => {
        setDisplay(Math.round(latest.count));
      }}
    >
      {formatNumberWithCommas(display)}
      {suffix}
    </motion.span>
  );
}

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

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const statsControls = useAnimation();

  useEffect(() => {
    if (statsInView) {
      statsControls.start("visible");
    }
  }, [statsInView, statsControls]);

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#222" }}
              >
                About Us
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
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
                  <AnimatedCounter targetNumber={35} /> years of experience
                </strong>
                , Nidham Alauddin Workshop has earned a reputation for trusted,
                high-quality auto repair in the UAE. Our skilled team is
                committed to <strong>honest service</strong>,{" "}
                <strong>transparent pricing</strong>, and putting your{" "}
                <strong>safety first</strong>. From diagnostics to major
                repairs, we handle every job with care and precision.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* Animated Stats Section */}
        <motion.div
          ref={statsRef}
          variants={statsVariants}
          initial="hidden"
          animate={statsControls}
        >
          <Grid container spacing={4} justifyContent="center">
            {statsData.map(({ icon, label, value }) => (
              <Grid key={label} xs={12} sm={4} md={4}>
                <motion.div variants={itemVariants}>
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
                      <AnimatedCounter targetNumber={value} suffix="+" />
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#555", fontWeight: "medium" }}
                    >
                      {label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;
