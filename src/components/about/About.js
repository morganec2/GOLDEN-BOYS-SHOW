import "./about.css";
import { aboutList } from "./aboutList";

const About = () => {
  return (
    <div className="about-container">
      {aboutList.map((item, index) => {
        if (item.type === "title") {
          return (
            <h2 key={index} className="about-main-title">
              {item.title}
            </h2>
          );
        }

        return (
          <div
            key={index}
            className={`about-section ${
              item.position === "right" ? "reverse" : ""
            }`}
          >
            <img src={item.image} alt="" className="about-image" />

            <div className="about-text">
              <h3>{item.subtitle}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
