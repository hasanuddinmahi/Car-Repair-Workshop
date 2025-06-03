import Button from '@mui/material/Button';

function Hero() {
  return (
    <section className="hero d-flex align-items-center justify-content-center text-center">
      <div className="container text-white">
        <h1 className="display-4">Expert Car Repair & Auto Service</h1>
        <p className="lead">Reliable, Fast, Affordable</p>
        <Button variant="contained" size="large" sx={{ bgcolor: '#fbb034', color: 'black', mt: 2 }} href="#contact">
          Book Appointment
        </Button>
      </div>
    </section>
  );
}

export default Hero;
