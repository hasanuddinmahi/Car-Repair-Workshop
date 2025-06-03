function Services() {
  return (
    <section className="services bg-light py-5" id="services">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row g-4">
          {[
            {
              icon: "bi-speedometer2",
              color: "text-primary",
              title: "Engine Diagnostics",
              desc: "We use modern tools to quickly diagnose engine issues and offer reliable solutions."
            },
            {
              icon: "bi-exclamation-triangle-fill",
              color: "text-danger",
              title: "Brake Service & Repair",
              desc: "Ensure your vehicle is safe with our complete brake inspection and repair services."
            },
            {
              icon: "bi-droplet-half",
              color: "text-info",
              title: "Oil Change",
              desc: "Fast, clean oil changes using premium oils to extend your engine’s life."
            },
            {
              icon: "bi-wind",
              color: "text-success",
              title: "Air & Cabin Filter Repair",
              desc: "Improve air quality and engine performance with filter cleaning or replacement."
            },
            {
              icon: "bi-compass",
              color: "text-warning",
              title: "Steering & Suspension Repair",
              desc: "Enhance vehicle handling and ride comfort with expert suspension and steering services."
            },
            {
              icon: "bi-gear-fill",
              color: "text-secondary",
              title: "Transmission Repair",
              desc: "Comprehensive diagnostics and repair services for automatic and manual transmissions."
            }
          ].map(({ icon, color, title, desc }) => (
            <div className="col-md-4" key={title}>
              <div className="service-card p-4 border rounded shadow-sm bg-white h-100 text-center">
                <i className={`bi ${icon} display-5 mb-3 ${color} service-icon`}></i>
                <h3 className="h5">{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
