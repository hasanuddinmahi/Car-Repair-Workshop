import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  LinearProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const phoneNumber = "+971505219792";
  const whatsappMessage = encodeURIComponent(
    "Hello! I would like to know more about your services."
  );
  const whatsappURL = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${whatsappMessage}`;

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (currentScroll / maxScroll) * 100;

      setScrollProgress(scrolled);

      // Show navbar when scrolling up or near top, hide when scrolling down
      setShowNavbar(currentScroll < lastScrollTop || currentScroll < 10);

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const drawerList = (
    <Box
      sx={{ width: 250, padding: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <motion.ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {[
          ...navItems,
          {
            label: "Call",
            href: `tel:${phoneNumber}`,
            icon: <PhoneIcon />,
          },
          {
            label: "WhatsApp",
            href: whatsappURL,
            icon: <WhatsAppIcon sx={{ color: "green" }} />,
            external: true,
          },
        ].map((item, i) => (
          <motion.li
            key={item.label}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
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
              startIcon={item.icon}
            >
              {item.label}
            </Button>
          </motion.li>
        ))}
      </motion.ul>
    </Box>
  );

  return (
    <>
      {/* Scroll Progress Bar */}
      <Box sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1300 }}>
        <LinearProgress
          variant="determinate"
          value={scrollProgress}
          sx={{
            height: "3px",
            backgroundColor: "transparent",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#faad48",
            },
          }}
        />
      </Box>

      {/* Animated Navbar */}
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            key="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <AppBar
              position="fixed"
              elevation={4}
              sx={{
                backgroundColor: "rgba(26, 26, 26, 0.75)",
                backdropFilter: "blur(10px)",
                paddingRight: isMobile ? 0 : "24px",
              }}
            >
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: { xs: 2, md: 3 },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Nidham Alaudddin Workshop
                  </Typography>
                </motion.div>

                {isMobile ? (
                  <>
                    <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
                      <MenuIcon />
                    </IconButton>
                    <Drawer
                      anchor="right"
                      open={drawerOpen}
                      onClose={toggleDrawer(false)}
                      PaperProps={{
                        sx: {
                          backgroundColor: "rgba(26, 26, 26, 0.9)",
                          backdropFilter: "blur(12px)",
                          color: "white",
                        },
                      }}
                    >
                      {drawerList}
                    </Drawer>
                  </>
                ) : (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {navItems.map(({ label, href }) => (
                      <Button
                        key={label}
                        color="inherit"
                        href={href}
                        sx={{
                          textTransform: "none",
                          fontWeight: 500,
                          position: "relative",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            width: 0,
                            height: "2px",
                            backgroundColor: "#00ff99",
                            transition: "width 0.3s",
                          },
                          "&:hover::after": {
                            width: "100%",
                          },
                        }}
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
                      href={whatsappURL}
                      startIcon={
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <WhatsAppIcon sx={{ color: "green" }} />
                        </motion.div>
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ textTransform: "none" }}
                    >
                      WhatsApp
                    </Button>
                  </Box>
                )}
              </Toolbar>
            </AppBar>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA Bar */}
      {isMobile && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#1a1a1a",
            color: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px",
            zIndex: 1301,
            boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
          }}
        >
          <Button
            variant="contained"
            color="success"
            startIcon={<WhatsAppIcon />}
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ flex: 1, mx: 1 }}
          >
            WhatsApp
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PhoneIcon />}
            href={`tel:${phoneNumber}`}
            sx={{ flex: 1, mx: 1 }}
          >
            Call
          </Button>
        </Box>
      )}
    </>
  );
}

export default Navbar;
