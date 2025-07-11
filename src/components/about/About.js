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
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression.
          </p>
          <p>
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les
            années 1500, quand un imprimeur anonyme assembla ensemble des
            morceaux de texte pour réaliser un livre spécimen de polices de
            texte.
          </p>
          <p>
            Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à
            la bureautique informatique, sans que son contenu n'en soit modifié.
          </p>
          <p>
            Il a été popularisé dans les années 1960 grâce à la vente de
            feuilles Letraset contenant des passages du Lorem Ipsum, et, plus
            récemment, par son inclusion dans des applications de mise en page
            de texte, comme Aldus PageMaker
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
