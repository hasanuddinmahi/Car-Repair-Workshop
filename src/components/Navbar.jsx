import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const phoneNumber = '+971505219792'; // Update with your UAE number
  const whatsappMessage = encodeURIComponent('Hello! I would like to know more about your services.');
  const whatsappURL = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${whatsappMessage}`;

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

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
          <ListItemButton component="a" href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon sx={{ mr: 1, color: 'green' }} />
            <ListItemText primary="WhatsApp" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" style={{ backgroundColor: '#1a1a1a' }}>
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
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerList}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navItems.map(({ label, href }) => (
              <Button key={label} color="inherit" href={href}>
                {label}
              </Button>
            ))}
            <Button
              color="inherit"
              startIcon={<PhoneIcon />}
              href={`tel:${phoneNumber}`}
              sx={{ textTransform: 'none' }}
            >
              {phoneNumber}
            </Button>
            <Button
              color="inherit"
              startIcon={<WhatsAppIcon sx={{ color: 'green' }} />}
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textTransform: 'none' }}
            >
              WhatsApp
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
