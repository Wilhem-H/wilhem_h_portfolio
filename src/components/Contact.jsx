import { useState } from "react";
import { toast } from "react-toastify";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/sendMail`,
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            mail: formData.mail,
            firstname: formData.firstname,
            lastname: formData.lastname,
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        console.log("envoie réussi!");
        toast.info("Message reçu! 🙌 ", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (response.status == 422) {
        toast.warn("Données incorrectes, rééssayez ", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error(`mon erreur : ${error}`);
      toast.error(
        "Oups, il y a eu un problème... 😧, contactez moi directement sur linkedin ",
        {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }

    setFormData(initialFormData);
  };
  return (
    <div className="contact" id="myContactDetails">
      <h1>Contact</h1>
      <div className="contact_content">
        <div className="contact_content_form">
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
              required
              value={formData.mail}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Envoyer !</button>
          </form>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/wilhem-hafsa/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={contactImg} />
          </a>
        </div>
      </div>
    </div>
  );
}
