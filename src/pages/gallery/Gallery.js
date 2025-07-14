import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./gallery.css";
import { galleryList } from "./galleryList";

const Gallery = () => {
  const navigate = useNavigate();

  const handleRetourAccueil = () => {
    navigate("Home");
  };

  return (
    <div className="gallery">
      <h1 className="gallery_title">Boys</h1>
      <p>Bienvenue ! Ici, vous retrouverez tous nos artistes.</p>
      <button onClick={handleRetourAccueil} className="back-home-button">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="gallery-container">
        {galleryList.map((gallery, index) => (
          <div key={index} className="gallery-card">
            <a href={gallery.link} target="_blank" rel="noopener noreferrer">
              <img
                src={gallery.image}
                alt={gallery.title}
                className="gallery-image"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
