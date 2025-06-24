import React from "react";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const socialLinks = [
  {
    icon: <FacebookIcon />,
    url: "https://facebook.com/YourPage", // Replace with your actual URL
    label: "Facebook",
    color: "#1877F2",
  },
  {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/nidhamaluddin_workshop",
    label: "Instagram",
    color: "#E4405F",
  },
  {
    icon: <TwitterIcon />,
    url: "https://twitter.com/YourProfile",
    label: "Twitter",
    color: "#1DA1F2",
  },
  {
    icon: <WhatsAppIcon />,
    url: "https://wa.me/971505219792",
    label: "WhatsApp",
    color: "#25D366",
  },
];

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: "linear-gradient(135deg, #121212 0%, #1f1f1f 100%)",
        color: "#eee",
        textAlign: "center",
        padding: "2rem 1rem",
        marginTop: "3rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "0.9rem",
        userSelect: "none",
      }}
    >
      <p style={{ margin: "0.2rem 0" }}>
        &copy; 2025 Nidham Alauddin Workshop. All rights reserved.
      </p>

      <p style={{ margin: "0.2rem 0" }}>
        <strong>Address: </strong>
        <a
          href="https://maps.app.goo.gl/qxStuLGHnksiFZaRA?g_st=iw"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#4caf50",
            textDecoration: "underline",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#81c784")}
          onMouseLeave={(e) => (e.target.style.color = "#4caf50")}
        >
          Musaffah M7, Plot No- 35, Abu Dhabi, UAE
        </a>
      </p>

      <p style={{ margin: "0.2rem 0" }}>
        <strong>Phone: </strong>
        <a
          href="tel:+971505219792"
          style={{
            color: "#4caf50",
            textDecoration: "underline",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#81c784")}
          onMouseLeave={(e) => (e.target.style.color = "#4caf50")}
        >
          +971 50 521 9792
        </a>
      </p>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          gap: 24,
          fontSize: 28,
        }}
      >
        {socialLinks.map(({ icon, url, label, color }) => (
          <motion.a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.2, color }}
            style={{ color: "#eee", transition: "color 0.3s ease" }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </motion.footer>
  );
}

export default Footer;
