import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const id_EMAILJS = process.env.REACT_APP_id_EMAILJS;
  const idTemplate = process.env.REACT_APP_template_id;
  const publicKeyEMAIL = process.env.REACT_APP_publicKey;

  const [notification, setNotification] = useState({ message: "", type: "" }); // State for notification message and type

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for validating emails
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current.user_email.value; // Get email from form

    // Validate email
    if (!validateEmail(userEmail)) {
      setNotification({
        message: "Veuillez entrer une adresse e-mail valide.",
        type: "error",
      });
      return; // Stop if email is invalid
    }

    emailjs
      .sendForm(id_EMAILJS, idTemplate, form.current, {
        publicKey: publicKeyEMAIL,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setNotification({
            message: "Votre message a bien été envoyé !",
            type: "success",
          }); // Set success message
          form.current.reset(); // Réinitialiser le formulaire après l'envoi
        },
        (error) => {
          console.log("FAILED...", error.text);
          setNotification({
            message: "Une erreur est survenue. Veuillez réessayer.",
            type: "error",
          }); // Set error message
        }
      );
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-md mx-auto mb-28 my-20 w-full sm:w-3/4 lg:w-1/2">
      <h2 className="text-2xl text-center text-white mb-4">Contactez-moi</h2>

      {notification.message && ( // Display notification if it exists
        <div className={`mb-4 text-center ${notification.type === "success" ? "text-green-400" : "text-red-400"}`}>
          {notification.message}
        </div>
      )}

      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-gray-200 mb-1 text-sm sm:text-base" htmlFor="user_name">
            Nom
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-200 mb-1 text-sm sm:text-base" htmlFor="user_email">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-200 mb-1 text-sm sm:text-base" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 text-sm sm:text-base"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
