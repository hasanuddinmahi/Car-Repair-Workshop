import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const businessNumber = '971505219792'; // Replace with your business WhatsApp number (without "+")

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Name: ${name}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${businessNumber}?text=${encodedText}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="contact mt-4" id="contact">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Box
        component="form"
        className="container"
        sx={{ maxWidth: 500, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Your Name"
          variant="outlined"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Your Message"
          multiline
          rows={4}
          variant="outlined"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" sx={{ bgcolor: '#25D366', color: 'white' }} type="submit">
          Send to WhatsApp
        </Button>
      </Box>
    </section>
  );
}

export default ContactForm;
