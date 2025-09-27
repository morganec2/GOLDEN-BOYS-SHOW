import { useState } from "react";
import backgroundImage from "../../assets/about/fondbio.webp";
import photobio from "../../assets/about/golden-boys.jpg";
import "./about.css";

const About = ({ id }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div id={id} className="about-container" style={backgroundStyle}>
      <div className="about-me">
        <img src={photobio} alt="boys" className="photo_bio" />
        <div className="about-text">
          <h2 className="about_title">
            {" "}
            Golden Boys : une troupe masculine soudée, charismatique et
            artistique
          </h2>
          <p className="about_subtitle">Des danseurs au charisme unique</p>
          {!showFullText && (
            <p className="about_text">
              Il suffit d’un regard pour que la scène s’embrase. L’aura qui
              émane des six artistes est d’une densité rare, magnétique, presque
              troublante. Le charisme de chacun s’exprime avec sa propre
              intensité, et ce qui frappe avant tout, c’est la façon dont ces
              présences si distinctes se répondent, se complètent, s’élèvent
              ensemble sans jamais se faire ombre. Certains, comme Drogo,
              s’imposent dans le silence : une posture, une respiration, une
              tension maîtrisée du regard suffisent à installer une connexion
              intime et profonde. D’autres comme Enzo ou Travis, vibrants et
              spontanés, projettent une intensité joyeuse qui emplit l’espace et
              invite à la fête. Chez Ross, la maîtrise technique renforce
              l’autorité tranquille d’un corps qui parle avant même de bouger.
              Nelly, quant à lui, impose par sa prestance d’homme de scène,
              tandis que Shawn dégage une assurance naturelle qui rassure et
              intrigue à la fois. Ensemble, ils donnent au spectacle une force
              sensorielle rare, dans une alchimie charismatique qui laisse une
              empreinte bien au-delà du dernier éclair de lumière.
            </p>
          )}
          <p>Des physiques athlétiques et harmonieux</p>
          <p>
            Chaque silhouette raconte une histoire, chaque musculature révèle un
            engagement. Les corps de ces artistes sont à la fois outils de
            travail et objets d’expression, sculptés par des heures
            d’entraînement, d’exigence et de précision. Mais ce qui fascine chez
            eux ne se résume pas à la puissance : c’est l’harmonie de la forme
            et du mouvement, l’élégance dans la force. Le brun intense et
            ténébreux de Drogo contraste avec la fraîcheur solaire de Travis, au
            sourire désarmant et aux lignes souples. Leurs physiques ne
            cherchent pas l’uniformité, mais l’équilibre entre puissance,
            souplesse et sensualité. Shawn incarne la force maîtrisée, animale,
            presque féline, avec des abdominaux sculptés comme taillés dans la
            pierre, et un sens instinctif du rythme. Ross et Enzo possèdent tous
            deux des corps athlétiques dessinés par la danse, au port altier et
            aux gestes d’une fluidité redoutable. Nelly, dans sa maturité
            physique, affiche un charisme corporel affirmé, sublimé par des
            tatouages évocateurs. Ensemble, ils incarnent un éventail de désirs
            et de fantasmes, dans un ballet de muscles et d’émotions savamment
            orchestré.
          </p>

          {showFullText && (
            <>
              <p>Des personnalités fortes et attachantes</p>
              <p>
                Derrière chaque chorégraphie millimétrée, chaque posture
                sensuelle, il y a des hommes aux tempéraments affirmés, à la
                sensibilité sincère. Ce qui rend ces artistes inoubliables ne
                tient pas seulement à leur esthétique ou à leur technique, mais
                à l’humanité qu’ils laissent affleurer. Loin des stéréotypes
                figés, ils dévoilent, à travers leur présence, des facettes
                multiples et touchantes. Enzo, avec son humour vif et sa
                spontanéité, détend l’atmosphère comme un éclat de rire au
                milieu du feu. Travis, plus jeune, déborde d’enthousiasme et
                d’énergie, avec cette fougue qui rend chaque mouvement
                irrésistiblement vivant. Ross incarne une force tranquille :
                discret, précis, toujours à l’écoute, il impressionne sans
                jamais en faire trop. Nelly, avec son regard juste et son sens
                du collectif, agit comme un ciment entre les membres de la
                troupe, une figure de repère. Shawn, plus réservé, impose le
                respect par sa droiture et sa fiabilité. Enfin, Drogo, dans la
                force de sa jeunesse, combine mystère et intensité avec une
                maturité étonnante. Leur singularité ne divise pas : elle crée
                un lien, une chaleur humaine qui transparaît dans chaque
                tableau.
              </p>
              <p>Une troupe soudée et professionnelle</p>
              <p>
                Ce qui fait la force de cette troupe ne se voit pas toujours sur
                scène : c’est l’énergie invisible, mais palpable, qui circule
                entre les corps, dans les silences, dans les regards. L’entente
                entre ces artistes dépasse la simple collaboration
                professionnelle. Il s’agit d’un véritable collectif, construit
                sur le respect, la confiance et une passion commune pour l’art
                du spectacle. Leur synchronisation ne repose pas uniquement sur
                des heures de répétition, mais sur une écoute constante, un
                instinct partagé, une fraternité subtile. Ce lien se ressent
                dans chaque mouvement collectif, chaque interaction implicite.
                Ross, en tant que chorégraphe, façonne cet équilibre délicat
                entre rigueur et liberté. Shawn, pilier discret mais
                fondamental, assure la cohésion du groupe dans les moments les
                plus intenses. Enzo et Nelly, expérimentés, guident sans
                dominer. Travis et Drogo, derniers arrivés, apportent fraîcheur
                et dynamisme, tout en s’inscrivant avec respect dans l’héritage
                du groupe. Sur scène comme en coulisses, rien n’est laissé au
                hasard : les détails sont soignés, les transitions fluides, la
                discipline constante. Ce professionnalisme n’enlève rien à leur
                spontanéité, il en est le socle solide.
              </p>
              <p>Des hommes, mais surtout des artistes</p>
              <p>
                Il serait réducteur de les considérer uniquement comme des
                hommes séduisants à la plastique impressionnante. Ce qu’ils
                offrent au public, c’est une forme d’art à part entière, un
                langage corporel où la danse, le théâtre, la sensualité et la
                scénographie s’entrelacent. Leur capacité à incarner des rôles,
                à passer d’un personnage à un autre, confère à chaque numéro une
                dimension narrative et émotionnelle. À l’image des performeurs
                de cabaret, ils manient le costume, le rythme et la lumière pour
                composer des tableaux vivants, parfois drôles, parfois
                poétiques, toujours maîtrisés. Chaque détail de leur prestation
                est pensé pour éveiller les sens et provoquer l’émerveillement.
                Shawn, avec son numéro de cracheur de feu, transcende la scène
                par une explosion de maîtrise et de danger maîtrisé. Les autres,
                tour à tour pompiers, super-héros ou créatures mythologiques,
                jouent avec les codes et renversent les attentes. Ils ne se
                contentent pas de danser, ils racontent. Et dans cette narration
                chorégraphiée, c’est une vision renouvelée de la masculinité et
                du spectacle vivant qu’ils incarnent, avec audace, générosité et
                élégance.
              </p>
            </>
          )}
          <button onClick={toggleText} className="read-more-button">
            {showFullText ? "Lire moins" : "Lire la suite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
