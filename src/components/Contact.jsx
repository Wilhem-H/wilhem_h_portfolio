import { useState } from "react";
import contactImg from "../assets/contact.png";
import "./Contact.css";

export default function Contact() {
  const initialFormData = {
    nom: "",
    prenom: "",
    mail: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
    setFormData(initialFormData);
  };
  return (
    <div className="contact" id="myContactDetails">
      <h1>Contact</h1>
      <div className="contact_content">
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Nom:
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Prénom:
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Mail:
              <input
                type="email"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Envoyer !</button>
          </form>
        </div>
        <div>
          <img src={contactImg} />
        </div>
      </div>
    </div>
  );
}
