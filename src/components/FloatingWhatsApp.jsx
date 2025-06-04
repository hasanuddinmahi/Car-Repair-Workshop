import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Fab, Tooltip } from '@mui/material';

function FloatingWhatsApp() {
  const phoneNumber = '+971505219792'; // Replace with your UAE number
  const message = encodeURIComponent('Hello! I would like to know more about your services.');
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`;

  return (
    <Tooltip title="Chat with us" placement="left">
      <Fab
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: '#25D366',
          color: 'white',
          zIndex: 9999,
          animation: 'pulse 2s infinite',
          '&:hover': {
            backgroundColor: '#20b957',
            transform: 'scale(1.1)'
          }
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Tooltip>
  );
}

export default FloatingWhatsApp;
