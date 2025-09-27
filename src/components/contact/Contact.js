import { useState } from "react";
import backgroundFond from "../../assets/contact/image-contact.webp";
import "./contact.css";

const Contact = () => {
  const initialFormState = {
    nom: "",
    type: "particulier",
    telephone: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedName(formData.nom);
    setError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/contact.spectaclesevents@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            nom: formData.nom,
            type: formData.type,
            telephone: formData.telephone,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message.");
      }

      setFormSubmitted(true);
      setFormData(initialFormState);
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (err) {
      console.error("Erreur:", err);
      setError("Un problème est survenu. Merci de réessayer plus tard.");
    }
  };

  return (
    <div className="contact">
      <p className="phrase_contact">
        Ajoutez une touche de glamour et de sensualité à votre événement !
        <br />
        <br />
        Pour une prestation de striptease inoubliable ou simplement pour obtenir
        plus d'informations,
        <br />
        <br />
        <strong>contactez-moi dès maintenant</strong> et faites de votre soirée
        un moment unique.
      </p>

      <div className="form-image-wrapper">
        <img
          src={backgroundFond}
          alt="fond pour formulaire"
          className="contact-fond"
        />

        <div className="form-container">
          <h1>Contactez-Nous</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Votre nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />

            <label htmlFor="type">Vous êtes</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="particulier">Particulier</option>
              <option value="professionnel">Professionnel</option>
            </select>

            <label htmlFor="telephone">Téléphone</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              placeholder="Votre numéro de téléphone"
              value={formData.telephone}
              onChange={handleChange}
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <input type="text" name="_honey" style={{ display: "none" }} />
            <button type="submit">Envoyer</button>
          </form>

          {/* Message de confirmation */}
          {formSubmitted && (
            <div className="confirmation-message">
              <p className="message-confirme">
                Merci, {submittedName || "utilisateur"} ! Votre message a bien
                été envoyé.
              </p>
            </div>
          )}

          {/* Message d’erreur */}
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
