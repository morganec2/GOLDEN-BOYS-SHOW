import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./services.css";
import { servicesList } from "./servicesList";

const Services = () => {
  const navigate = useNavigate();

  const handleRetourAccueil = () => {
    navigate("/");
  };

  return (
    <div className="services">
      <h1 className="gallery_title">
        Un show à l’image des Chippendales, made in France avec les Golden Boys
      </h1>

      <button onClick={handleRetourAccueil} className="back-home-button">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <div className="services-container">
        {servicesList.map((item, index) => {
          // 👉 TITLE
          if (item.type === "title") {
            return (
              <h1 key={index} className="prestation-title">
                {item.title}
              </h1>
            );
          }

          // 👉 CONTENT
          if (item.type === "content") {
            return (
              <div key={index} className={`services-card ${item.position}`}>
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.subtitle}
                  className="service-image"
                />

                {/* TEXTE */}
                <div className="service-text">
                  <p className="prestation_subtext">{item.subtitle}</p>

                  {item.text.split("\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>

      <div className="prestation">
        <a
          className="presta"
          href="https://www.facebook.com/goldenboys.show/posts/pfbid0mTuvNuRxdzZi6qcZXNXWM8VAXJYE3z3W65Xk5fksi6VqzsxGCev1RSKLaFq7L2BFl"
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
