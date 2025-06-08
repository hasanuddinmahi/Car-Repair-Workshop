import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function About() {
  return (
    <section id="about" style={{ padding: '3rem 1rem', backgroundColor: '#ffffff' }}>
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#333' }}
          >
            About Us
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.8,
              color: '#555',
            }}
          >
            With over <strong>35 years of experience</strong>, Nidham Alauddin Workshop has earned a reputation
            for trusted, high-quality auto repair in the UAE. Our skilled team is committed to
            <strong> honest service</strong>, <strong>transparent pricing</strong>, and putting your
            <strong> safety first</strong>. From diagnostics to major repairs, we handle every job with care and precision.
          </Typography>
        </Box>
      </Container>
    </section>
  );
}

export default About;
