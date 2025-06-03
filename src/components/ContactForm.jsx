import React, { useState } from 'react';
import { TextField, Button, Box, Typography, InputAdornment } from '@mui/material';

function ContactForm() {
  const [name, setName] = useState('');
  const [whatsappLocal, setWhatsappLocal] = useState('');
  const [message, setMessage] = useState('');

  const whatsappNumber = '+971505219792'; // Your business WhatsApp number (with country code, no +)

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullUserWhatsapp = `+971${whatsappLocal}`; // fixed UAE code +971
    const text = `Name: ${name}\nWhatsApp: ${fullUserWhatsapp}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(url, '_blank');
  };

  return (
    <section className="contact" id="contact">
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
          label="WhatsApp Number"
          variant="outlined"
          required
          value={whatsappLocal}
          onChange={(e) => {
            // allow only numbers
            const val = e.target.value.replace(/\D/g, '');
            setWhatsappLocal(val);
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">+971</InputAdornment>,
          }}
          helperText="Enter your UAE WhatsApp number without the country code"
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
        <Button variant="contained" sx={{ bgcolor: '#fbb034', color: 'black' }} type="submit">
          Send Message
        </Button>
      </Box>
    </section>
  );
}

export default ContactForm;
