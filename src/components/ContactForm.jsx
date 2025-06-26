import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
  Container,
  CircularProgress,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const shakeVariant = {
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.5 },
  },
};

const inputFocusVariant = {
  focused: {
    scale: 1.02,
    boxShadow: "0 0 8px rgba(37, 211, 102, 0.6)",
  },
  unfocused: {
    scale: 1,
    boxShadow: "none",
  },
};

function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // null, "success", or "error"
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const businessNumber = "971505219792";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setStatus("error");
      setOpenSnackbar(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setIsLoading(true);
    const text = `Name: ${name}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${businessNumber}?text=${encodedText}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setStatus("success");
      setOpenSnackbar(true);
      setName("");
      setMessage("");
      setIsLoading(false);
    }, 1500); // simulate delay for UX
  };

  return (
    <section
      className="contact mt-5"
      id="contact"
      style={{ backgroundColor: "#f9fafb", padding: "3rem 1rem" }}
    >
      <Container maxWidth="sm">
        <motion.div
          variants={shakeVariant}
          animate={shake ? "shake" : ""}
          style={{
            backgroundColor: "#fff",
            padding: "2.5rem 2rem",
            borderRadius: 16,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
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

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <motion.div
              animate={
                focusedInput === "name" ? "focused" : "unfocused"
              }
              variants={inputFocusVariant}
              transition={{ duration: 0.3 }}
            >
              <TextField
                label="Your Name"
                variant="outlined"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput(null)}
                fullWidth
                sx={{
                  borderRadius: 2,
                }}
              />
            </motion.div>

            <motion.div
              animate={
                focusedInput === "message" ? "focused" : "unfocused"
              }
              variants={inputFocusVariant}
              transition={{ duration: 0.3 }}
            >
              <TextField
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setFocusedInput("message")}
                onBlur={() => setFocusedInput(null)}
                fullWidth
                sx={{
                  borderRadius: 2,
                }}
              />
            </motion.div>

            <Box sx={{ textAlign: "center", position: "relative" }}>
              <Button
                variant="contained"
                type="submit"
                disabled={isLoading}
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
                  },
                }}
              >
                {isLoading ? (
                  <CircularProgress
                    size={24}
                    sx={{ color: "white" }}
                    thickness={5}
                  />
                ) : (
                  "Send to WhatsApp"
                )}
              </Button>
            </Box>
          </form>
        </motion.div>
      </Container>

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
