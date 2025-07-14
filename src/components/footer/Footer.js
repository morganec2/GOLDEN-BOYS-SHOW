import facebookIcon from "../../assets/footer/facebook.webp";
import instaIcon from "../../assets/footer/insta.webp";
import mailIcon from "../../assets/footer/mail.webp";
import phoneIcon from "../../assets/footer/phone.webp";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul className="social-links">
        <li>
          <a
            href="tel:0674080606"
            title="Contacter"
            aria-label="Contacter par téléphone"
          >
            <img src={phoneIcon} alt="Icône de téléphone" />
          </a>
        </li>
        <li>
          <a href="mailto:Golden-Boys-Show@outlook.fr" title="Envoyer un email">
            <img src={mailIcon} alt="Icône de mail" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/golden_boys_chippendales/"
            title="lien instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instaIcon} alt="Icône instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/goldenboysx?mibextid=wwXlfr"
            title="lien facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Icône facebook" />
          </a>
        </li>
      </ul>
      <p className="copyright">
        Mentions légales | Politique de confidentialité | Site crée par Morgane
        Cobigo{" "}
      </p>
    </div>
  );
}

export default Footer;
