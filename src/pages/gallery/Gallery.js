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

  const handleImageClick = (id) => {
    navigate(`/artist/${id}`);
  };

  return (
    <div className="gallery">
      <h1 className="gallery_title">Boys</h1>
      <p>Bienvenue ! Ici, vous retrouverez tous nos artistes.</p>
      <button onClick={handleRetourAccueil} className="back-home-button">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="gallery-container">
        {galleryList.map((gallery) => (
          <div
            key={gallery.id}
            className="gallery-card"
            onClick={() => handleImageClick(gallery.id)}
          >
            <img
              src={gallery.sections[0].image}
              alt={gallery.title}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
