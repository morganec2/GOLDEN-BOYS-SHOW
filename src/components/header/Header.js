import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import Logo from "../../assets/logo/Logo.png";
import "./header.css";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 400) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 400) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  });

  const scrollToTop = () => {
    scroller.scrollTo("header", {
      smooth: true,
      duration: 500,
      offset: -70,
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="just_header" id="header">
      <img src={Logo} alt="golden-boys-show" className="logo_goldenboys" />
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="neon-link"
          href="#about"
        >
          Accueil
        </ScrollLink>
        <Link to="/gallery" className="neon-link">
          Boys
        </Link>
        <Link to="/services" className="neon-link">
          Prestations
        </Link>
        <a
          href="https://www.facebook.com/goldenboys.show/posts/pfbid0Xt52X9rVrwsoJQm9EkGjseAWt78CDQnEtHZHEACLK5x68g7JL4PPH8PrtwfhBPzal"
          target="_blank"
          rel="noopener noreferrer"
          className="neon-link"
        >
          Avis Clients
        </a>
        <ScrollLink
          to="video"
          smooth={true}
          duration={500}
          className="neon-link"
          href="#video"
        >
          Vidéos
        </ScrollLink>
        <a
          href="https://www.facebook.com/goldenboys.show/posts/pfbid0me4vg3hhTjKRAsZG6GrCHj3UhyDHxpvYdXimkPc1YoSh4fLcwUMLwsrekvWoo24Al"
          target="_blank"
          rel="noopener noreferrer"
          className="neon-link"
        >
          Agenda
        </a>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="neon-link"
          href="#contact"
        >
          Contact
        </ScrollLink>
        <ScrollLink
          to="reseauxsociaux"
          smooth={true}
          duration={500}
          className="neon-link"
          href="#reseauxsociaux"
        >
          Réseaux Sociaux
        </ScrollLink>
        <Link to="/goodies" className="neon-link">
          Goodies
        </Link>
      </nav>
      <li className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </li>
      <div className={`back-to-top ${isVisible ? "visible" : ""}`}>
        <div className="arrow" onClick={scrollToTop}>
          &#8593;
        </div>
      </div>
    </header>
  );
}

export default Header;
