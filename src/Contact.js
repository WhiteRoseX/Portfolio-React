import React from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import confetti from "canvas-confetti";

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_xbtk2s3",  // Remplacez par votre ID de service
      "template_2ajrbsw", // Remplacez par votre ID de template
      e.target,
      "xU9YYRyzwVsGpDnuA" // Remplacez par votre clé publique
    )
    .then(
      (result) => {
        // Lancer les confettis
        confetti({
          particleCount: 100,
          spread: 120,
          origin: { y: 0.6 },
        });

        // Afficher une notification stylée
        toast.success("🎉 Votre message a été envoyé avec succès !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        e.target.reset(); // Réinitialiser le formulaire
      },
      (error) => {
        toast.error("❌ Une erreur est survenue, veuillez réessayer.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6 text-gray-300">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-teal-400 mb-12 tracking-wide"
        >
          Contactez-moi
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h4 className="text-2xl font-semibold mb-6 text-teal-400">
              Envoyez-moi un message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition duration-300"
              >
                Envoyer
              </button>
            </form>
          </motion.div>
	           {/* Liens et CV */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-8 rounded-lg shadow-md flex flex-col items-center"
          >
            <h4 className="text-2xl font-semibold mb-6 text-teal-400">Mes liens</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://github.com/WhiteRoseX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-teal-400 transition"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lucas-djavid-b7246025a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-teal-400 transition"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="/CV-Portfolio.pdf"
                  download
                  className="flex items-center space-x-3 hover:text-teal-400 transition"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                    alt="Télécharger CV"
                    className="w-6 h-6"
                  />
                  <span>Télécharger mon CV</span>
                </a>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Conteneur pour Toastify */}
      <ToastContainer />
    </section>
  );
};

export default Contact;

