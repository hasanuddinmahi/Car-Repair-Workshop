import React from "react";
import { Container, Typography, Link, Box, Stack, IconButton } from "@mui/material";
import { motion } from "framer-motion";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const socialLinks = [
  {
    Icon: FacebookIcon,
    url: "https://facebook.com/YourPage",
    label: "Facebook",
    color: "#1877F2",
  },
  {
    Icon: InstagramIcon,
    url: "https://www.instagram.com/nidhamaluddin_workshop",
    label: "Instagram",
    color: "#E4405F",
  },
  {
    Icon: TwitterIcon,
    url: "https://twitter.com/YourProfile",
    label: "Twitter",
    color: "#1DA1F2",
  },
  {
    Icon: WhatsAppIcon,
    url: "https://wa.me/971505219792",
    label: "WhatsApp",
    color: "#25D366",
  },
];

// Motion-enabled IconButton for hover animations
const MotionIconButton = motion(IconButton);

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        background: "linear-gradient(135deg, #121212 0%, #1f1f1f 100%)",
        color: "#eee",
        py: 4,
        mt: 5,
        userSelect: "none",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="body2" sx={{ mb: 1, userSelect: "text" }}>
          &copy; 2025 Nidham Alauddin Workshop. All rights reserved.
        </Typography>

        <Typography variant="body2" sx={{ mb: 1, userSelect: "text" }}>
          <strong>Address: </strong>
          <Link
            href="https://maps.app.goo.gl/qxStuLGHnksiFZaRA?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="success.main"
            sx={{
              transition: "color 0.3s ease",
              "&:hover": { color: "success.light" },
            }}
          >
            Musaffah M7, Plot No- 35, Abu Dhabi, UAE
          </Link>
        </Typography>

        <Typography variant="body2" sx={{ mb: 3, userSelect: "text" }}>
          <strong>Phone: </strong>
          <Link
            href="tel:+971505219792"
            underline="hover"
            color="success.main"
            sx={{
              transition: "color 0.3s ease",
              "&:hover": { color: "success.light" },
            }}
          >
            +971 50 521 9792
          </Link>
        </Typography>

        <Stack direction="row" justifyContent="center" spacing={4} sx={{ fontSize: 28 }}>
          {socialLinks.map(({ Icon, url, label, color }) => (
            <MotionIconButton
              key={label}
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={{ color: "#eee" }}
              whileHover={{ scale: 1.3, color }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon fontSize="inherit" />
            </MotionIconButton>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
