import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { galleryList } from "../gallery/galleryList";
import "./artistDescription.css";

const ArtistDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Trouver l'artiste correspondant
  const artist = galleryList.find((a) => a.id === id);

  if (!artist) {
    return <h2>Artiste introuvable</h2>;
  }

  return (
    <div className="artist-description">
      <button onClick={() => navigate(-1)} className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} /> Retour sur les artistes
      </button>

      <h1 className="artist-title">{artist.title}</h1>
      {artist.description && (
        <p className="artist-short-desc">{artist.description}</p>
      )}

      {/* Sections alternées */}
      {artist.sections.map((section, index) => (
        <div
          key={index}
          className={`artist-section ${
            section.imagePosition === "left" ? "left-image" : "right-image"
          }`}
        >
          <div className="artist-image">
            <img src={section.image} alt={artist.title} />
          </div>
          <div className="artist-text">
            <p className="artist-subtitle">{section.subtitle}</p>
            <p>{section.text}</p>
          </div>
        </div>
      ))}

      {/* Texte complet */}
      {artist.fullText && (
        <div className="artist-full-text">
          <p>{artist.fullText}</p>
        </div>
      )}
    </div>
  );
};

export default ArtistDescription;
