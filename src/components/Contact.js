import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const id_EMAILJS = process.env.id_EMAILJS;
  const idTemplate = process.env.template_id;
  const publicKeyEMAIL = process.env.publicKey;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(id_EMAILJS, idTemplate, form.current, {
        publicKey: publicKeyEMAIL,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); // Réinitialiser le formulaire après l'envoi
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-gray-800 p-6 rounded-lg shadow-md max-w-md mx-auto mb-28 my-20"
    >
      <h2 className="text-2xl text-center text-white mb-4">Contactez-moi</h2>

      <div className="mb-4">
        <label className="block text-gray-200 mb-1" htmlFor="user_name">
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
        <label className="block text-gray-200 mb-1" htmlFor="user_email">
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
        <label className="block text-gray-200 mb-1" htmlFor="message">
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
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Envoyer
      </button>
    </form>
  );
}

export default Contact;
