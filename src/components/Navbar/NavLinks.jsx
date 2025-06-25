// components/Navbar/NavLinks.jsx

import React from "react";
import { Button, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { navItems, phoneNumber, whatsappURL } from "../js/navItems";

const NavLinks = () => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    {navItems.map(({ label, href }) => (
      <Button
        key={label}
        color="inherit"
        href={href}
        sx={{ textTransform: "none", fontWeight: 500 }}
      >
        {label}
      </Button>
    ))}

    <Button
      color="inherit"
      startIcon={<PhoneIcon />}
      href={`tel:${phoneNumber}`}
      sx={{ textTransform: "none" }}
    >
      {phoneNumber}
    </Button>

    <Button
      color="inherit"
      startIcon={<WhatsAppIcon sx={{ color: "green" }} />}
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ textTransform: "none" }}
    >
      WhatsApp
    </Button>
  </Box>
);

export default NavLinks;
