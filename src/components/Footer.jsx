function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <p>&copy; 2025 Nidham Alauddin Workshop. All rights reserved.</p>
      <p>
        <strong>Address: </strong>
        <a
          href="https://maps.app.goo.gl/qxStuLGHnksiFZaRA?g_st=iw" // Replace with your actual Google Maps URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-decoration-underline"
        >
          Musaffah M7, Abu Dahbi, UAE
        </a>
      </p>
      <p>
        <strong>Phone: </strong>
        <a href="tel:+971505219792" className="text-white text-decoration-underline">
          +971 50 521 9792
        </a>
      </p>
    </footer>
  );
}

export default Footer;
