import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const phoneNumber = "+971505219792";
  const whatsappMessage = encodeURIComponent(
    "Hello! I would like to know more about your services."
  );
  const whatsappURL = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${whatsappMessage}`;

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  // Instant scroll effect (no wait)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScrollTop) {
        setShowNavbar(true); // Scrolling up – show navbar
      } else if (currentScroll > lastScrollTop) {
        setShowNavbar(false); // Scrolling down – hide navbar
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map(({ label, href }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton component="a" href={href}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton component="a" href={`tel:${phoneNumber}`}>
            <PhoneIcon sx={{ mr: 1 }} />
            <ListItemText primary="Call" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon sx={{ mr: 1, color: "green" }} />
            <ListItemText primary="WhatsApp" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Slide appear={false} direction="down" in={showNavbar}>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          backgroundColor: "rgba(26, 26, 26, 0.75)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar className="container d-flex justify-content-between">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Nidham Alaudddin Workshop
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    backgroundColor: "rgba(26, 26, 26, 0.75)",
                    backdropFilter: "blur(10px)",
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
                <Button key={label} color="inherit" href={href}>
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
          )}
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default Navbar;
