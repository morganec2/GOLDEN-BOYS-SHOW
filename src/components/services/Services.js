import dinerShowImage from "../../assets/services/diner-show.webp";
import "./services.css";

const Services = ({ id }) => {
  const service = {
    image: dinerShowImage,
    title: "Titre du service",
    subtitle: "Sous-titre du service",
  };

  return (
    <div id={id} className="services">
      <div className="services-container">
        <div className="services-card">
          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />
          <p className="prestation_text">Ici il y aura un texte </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
