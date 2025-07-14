import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import dinerShowImage from "../../assets/services/diner-show.webp";
import "./services.css";

const Services = () => {
  const service = {
    image: dinerShowImage,
    title: "Titre du service",
    subtitle: "Sous-titre du service",
  };
  const navigate = useNavigate();

  const handleRetourAccueil = () => {
    navigate("Home");
  };

  return (
    <div className="services">
      <h1 className="gallery_title">Nos prestations</h1>
      <button onClick={handleRetourAccueil} className="back-home-button">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="services-container">
        <div className="services-card">
          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />
          <p className="prestation_text">En cours de construction !!!!</p>
        </div>
      </div>
      <div className="prestation">
        <a
          className="presta"
          href="https://www.facebook.com/goldenboysx/posts/pfbid02qF7yzC2gu1qyBrgYhMc3WmFxht8e9hph8dFZWbYe3yxLh3mjjhta4Dq3eb55tPzCl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cliquez ici, pour retrouver toutes nos dates de spectacle !
        </a>
      </div>
    </div>
  );
};

export default Services;
