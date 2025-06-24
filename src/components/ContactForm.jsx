import React, { useState } from "react";
import { TextField, Button, Box, Typography, Snackbar, Alert } from "@mui/material";
import { motion } from "framer-motion";

function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // null, "success", or "error"
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const businessNumber = "971505219792";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 8px #25D366",
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };

  const shakeVariant = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setStatus("error");
      setOpenSnackbar(true);
      return;
    }

    const text = `Name: ${name}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${businessNumber}?text=${encodedText}`;

    window.open(whatsappURL, "_blank");

    setStatus("success");
    setOpenSnackbar(true);
    setName("");
    setMessage("");
  };

  return (
    <section
      className="contact mt-4"
      id="contact"
      style={{ backgroundColor: "#f9fafb", padding: "3rem 1rem" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        style={{
          maxWidth: 500,
          margin: "0 auto",
          borderRadius: 12,
          padding: 24,
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "700", color: "#222", mb: 3 }}
        >
          Contact Us
        </Typography>

        <motion.form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
          variants={shakeVariant}
          animate={status === "error" ? "shake" : "visible"}
          onAnimationComplete={() => status === "error" && setStatus(null)}
        >
          <TextField
            label="Your Name"
            variant="outlined"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              borderRadius: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&.Mui-focused": {
                  borderColor: "#25D366",
                  boxShadow: "0 0 8px rgba(37, 211, 102, 0.6)",
                },
              },
            }}
          />

          <TextField
            label="Your Message"
            multiline
            rows={4}
            variant="outlined"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              borderRadius: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&.Mui-focused": {
                  borderColor: "#25D366",
                  boxShadow: "0 0 8px rgba(37, 211, 102, 0.6)",
                },
              },
            }}
          />

          <motion.div
            whileHover="hover"
            style={{ display: "inline-block", alignSelf: "center" }}
            variants={buttonVariants}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{
                bgcolor: "#25D366",
                color: "white",
                fontWeight: "700",
                px: 5,
                py: 1.5,
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
                textTransform: "none",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  bgcolor: "#20b857",
                  boxShadow: "0 6px 16px rgba(32, 184, 87, 0.6)",
                },
              }}
            >
              Send to WhatsApp
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>

      {/* Snackbar for feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {status === "success" ? (
          <Alert severity="success" sx={{ width: "100%" }}>
            Message sent! Redirecting to WhatsApp...
          </Alert>
        ) : status === "error" ? (
          <Alert severity="error" sx={{ width: "100%" }}>
            Please fill in all fields before sending.
          </Alert>
        ) : null}
      </Snackbar>
    </section>
  );
}

export default ContactForm;
