// components/Navbar/MobileDrawer.jsx

import React from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { navItems, extraItems } from "../js/navItems";

const MobileDrawer = ({ open, toggleDrawer }) => {
  const drawerVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
      },
    }),
  };

  const iconMap = {
    phone: <PhoneIcon />,
    whatsapp: <WhatsAppIcon sx={{ color: "green" }} />,
  };

  const items = [
    ...navItems.map((item) => ({ ...item })),
    ...extraItems,
  ];

  return (
    <>
      <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(26, 26, 26, 0.9)",
            backdropFilter: "blur(12px)",
            color: "white",
          },
        }}
      >
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <motion.ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {items.map((item, i) => (
              <motion.li
                key={item.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={drawerVariants}
                whileHover={{ scale: 1.05 }}
                style={{ marginBottom: 16 }}
              >
                <Button
                  variant="text"
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    color: "white",
                    textTransform: "none",
                    gap: 1,
                    fontSize: "1rem",
                  }}
                  startIcon={iconMap[item.icon] || null}
                >
                  {item.label}
                </Button>
              </motion.li>
            ))}
          </motion.ul>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
