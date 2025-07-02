import "./services.css";

const Services = ({ id }) => {
  const service = {
    image: "https://via.placeholder.com/150",
    title: "Titre du service",
    subtitle: "Sous-titre du service",
  };

  return (
    <div id={id} className="services">
      <h3 className="services-title">Prestations</h3>
      <div className="services-container">
        <div className="services-card">
          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />
          <p className="prestations_subtitle">{service.subtitle}</p>
          <p className="prestations_title">{service.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
