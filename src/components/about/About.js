import photobio from "../../assets/about/FBM_0633-Modifier.jpg";
import backgroundImage from "../../assets/about/fondbio.webp";
import "./about.css";

const About = ({ id }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div id={id} className="about-container" style={backgroundStyle}>
      <h2>À PROPOS DE NOUS</h2>
      <div className="about-me">
        <img src={photobio} alt="boys" className="photo_bio" />
        <div className="about-text">
          <p>En cours de construction !!!!</p>
          <p>Prochainement nous vous parlerons de nous !!!!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
