import { useState } from "react";
import contactImg from "../assets/contact.png";
import "./Contact.css";

export default function Contact() {
  const initialFormData = {
    lastName: "",
    firstName: "",
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
            <label htmlFor="lastName">Nom:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="firstName">Prénom:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="mail">Mail:</label>
            <input
              type="email"
              name="mail"
              id="mail"
              value={formData.mail}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            />
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
