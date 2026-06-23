import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./social.css";

const socialLinks = [
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/golden_boys_show/",
    description: "Photos & moments exclusifs",
  },
  {
    name: "Facebook",
    icon: faFacebook,
    url: "https://www.facebook.com/goldenboys.show",
    description: "Avis clients & événements",
  },
  {
    name: "YouTube",
    icon: faYoutube,
    url: "https://youtube.com",
    description: "Shows & performances",
  },
];

const SocialPage = () => {
  return (
    <div className="social-page">
      <h1 className="social-title">Suivez-nous</h1>

      <div className="social-grid">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <FontAwesomeIcon icon={social.icon} className="social-icon" />
            <h2>{social.name}</h2>
            <p>{social.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialPage;
