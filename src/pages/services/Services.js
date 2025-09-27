import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import dinerShowImage from "../../assets/services/golden-boys-troupe.jpg";
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
          <h1 className="prestation-title">
            Un show à l’image des Chippendales, made in France avec les Golden
            Boys
          </h1>
          <p className="prestation_subtext">
            Des prestations chics, élégantes et sensuelles
          </p>
          <p>
            Les Golden Boys proposent en France un spectacle masculin haut de
            gamme qui réinvente le genre du show de danse pour adultes. Cette
            troupe mêle avec talent élégance, charme et sensualité dans un
            univers scénique raffiné. Habitués des cabarets, casinos et
            événements privés, ses artistes séduisent par leur prestance, leur
            aisance scénique et l’attention portée à chaque détail.
          </p>
          <p>
            Leur image professionnelle reflète un glamour moderne qui transporte
            instantanément le public dans une expérience immersive. Chaque
            performance est pensée pour stimuler les sens et susciter
            l’admiration. Costumes, chorégraphies et décors forment un tout
            harmonieux où l’on retrouve l’esprit des shows internationaux
            célèbres mais avec une touche française unique.
          </p>
          <p>
            La sensualité demeure toujours suggérée, jamais imposée, conférant à
            l’ensemble une dimension chic et intemporelle qui distingue ce
            strip-show chic sur le marché du spectacle masculin.
          </p>
          <p className="prestation_subtext">
            Une troupe d’artistes expérimentés et intermittents du spectacle
          </p>
          <p>
            Derrière ce nom se cache une équipe soudée d’artistes
            professionnels, tous intermittents du spectacle et riches d’une
            expérience solide en danse, animation et performance scénique. Leur
            savoir-faire se traduit par des prestations impeccables qui allient
            rigueur technique et charisme.
          </p>
          <p>
            La configuration type comprend au minimum quatre danseurs
            talentueux, un animateur-DJ qui insuffle l’énergie et deux
            régisseurs garantissant la fluidité technique et la qualité sonore
            et visuelle. Ce dispositif assure un rendu digne des meilleures
            productions masculines.
          </p>
          <p>
            La notoriété de la troupe s’est affirmée à travers l’Hexagone grâce
            à des performances régulières dans des événements réputés, notamment
            les soirées Ladies Paradise, programmées à quinze reprises dans le
            Grand Est en 2026. Ce calendrier dense illustre la popularité
            croissante et la capacité de ce show masculin élégant à séduire des
            publics variés.
          </p>
          <p className="prestation_subtext">
            Des shows renouvelés chaque saison
          </p>
          <p>
            L’innovation artistique constitue l’ADN de cette troupe. Chaque
            année, un nouveau spectacle masculin voit le jour, mêlant
            chorégraphies inédites, mises en scène créatives et séquences
            originales. Cette approche garantit aux organisateurs un contenu
            renouvelé qui fidélise le public saison après saison.
          </p>
          <p>
            Après avoir conquis de nombreuses scènes en métropole, la troupe
            poursuit son expansion en se produisant à Tahiti et à La Réunion.
            Ces représentations hors de la métropole marquent une étape
            importante dans son développement et témoignent d’un rayonnement qui
            dépasse désormais les frontières françaises.
          </p>
          <p>
            Chaque show est pensé comme un moment d’émotion intense, orchestré
            avec soin pour captiver les spectateurs et sublimer l’instant. Cette
            évolution confirme la capacité des artistes à séduire de nouveaux
            publics tout en conservant leur identité artistique et leur niveau
            d’exigence exemplaire dans l’univers du spectacle masculin.
          </p>
          <p className="prestation_subtext">
            Une expérience unique avec le concept « dollars à l’américaine »
          </p>
          <p>
            Au-delà de la performance scénique, les Golden Boys proposent une
            expérience immersive inspirée des célèbres clubs américains, comme
            un clin d’œil au monde des Chippendales.
          </p>
          <p>
            Le concept du « dollar à l’américaine » apporte une touche ludique,
            interactive et raffinée. Durant la soirée, les spectateurs peuvent
            se procurer de faux billets qu’ils glissent avec élégance dans le
            boxer des danseurs, dans un jeu de séduction respectueux et
            suggestif.
          </p>
          <p>
            Ce rituel scénique crée une tension complice entre l’artiste et le
            public, où les regards échangés intensifient chaque instant. Ces
            moments, en marge des chorégraphies principales, enrichissent
            l’expérience sans empiéter sur le rythme du show.
          </p>
          <p>
            À l’image des spectacles les plus prisés, cette approche décomplexée
            mais stylisée renforce la proximité émotionnelle entre scène et
            public, tout en conservant une esthétique chic et maîtrisée. Cette
            dimension apporte un plus marketing aux organisateurs et contribue à
            différencier la troupe sur le marché.
          </p>
          <p className="prestation_subtext">
            Des prestations complètes et personnalisées
          </p>
          <p>
            Le format du spectacle s’adapte aisément aux attentes des
            institutions : une heure de performance continue pour une montée en
            puissance intense, ou deux passages de 30 minutes pour rythmer la
            soirée avec finesse.
          </p>
          <p>
            Chaque configuration est pensée pour assurer un impact maximal, quel
            que soit le lieu. Si l’établissement ne dispose pas du matériel
            technique nécessaire, l’équipe peut fournir, sur demande et
            moyennant un supplément, un équipement son et lumière professionnel.
            Cette autonomie garantit une qualité constante.
          </p>
          <p>
            Pour préserver l’effet de surprise, les séances photo sont
            autorisées uniquement après la première apparition ; les vidéos
            privées sont tolérées afin de prolonger le souvenir. En choisissant
            cette troupe, les organisateurs s’assurent une soirée élégante,
            personnalisée et inoubliable, où chaque détail contribue à faire de
            l’événement un moment hors du commun.
          </p>
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
