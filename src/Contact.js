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
    <section id="contact" className="bg-gray-900 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 text-gray-300">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-8 md:mb-12 tracking-wide"
        >
          Contactez-moi
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-4 md:p-8 rounded-lg shadow-xl border border-gray-700"
          >
            <h4 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-teal-400">
              Envoyez-moi un message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium mb-3 text-gray-300 group-hover:text-teal-300 transition-colors duration-300">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:border-gray-500 transition-all duration-300 placeholder-gray-400"
                />
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium mb-3 text-gray-300 group-hover:text-teal-300 transition-colors duration-300">
                  Adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="votre.email@exemple.com"
                  className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:border-gray-500 transition-all duration-300 placeholder-gray-400"
                />
              </div>
              
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium mb-3 text-gray-300 group-hover:text-teal-300 transition-colors duration-300">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Décrivez votre projet ou posez votre question..."
                  className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:border-gray-500 transition-all duration-300 resize-none placeholder-gray-400"
                ></textarea>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-futuristic btn-primary btn-particles w-full py-3 font-medium"
                >
                  <span>Envoyer le message</span>
                </button>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  * Champs obligatoires - Votre message sera envoyé directement dans ma boîte mail
                </p>
              </div>
            </form>
          </motion.div>
          {/* Liens et CV */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-4 md:p-8 rounded-lg shadow-xl border border-gray-700"
          >
            <h4 className="text-xl md:text-2xl font-semibold mb-6 text-teal-400 text-center">
              Retrouvez-moi aussi ici
            </h4>
            
            <div className="space-y-4">
              {/* GitHub */}
              <a
                href="https://github.com/WhiteRoseX"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 bg-gray-700 rounded-lg border border-gray-600 hover:border-teal-500 hover:bg-gray-600 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                    className="w-6 h-6 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h5 className="font-medium text-gray-100 group-hover:text-white transition-colors duration-300">
                    GitHub
                  </h5>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Mes projets et contributions
                  </p>
                </div>
                <div className="text-gray-400 group-hover:text-teal-400 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/lucas-djavid-b7246025a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 bg-gray-700 rounded-lg border border-gray-600 hover:border-teal-500 hover:bg-gray-600 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                    alt="LinkedIn"
                    className="w-6 h-6 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h5 className="font-medium text-gray-100 group-hover:text-white transition-colors duration-300">
                    LinkedIn
                  </h5>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Mon réseau professionnel
                  </p>
                </div>
                <div className="text-gray-400 group-hover:text-teal-400 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              {/* CV Download */}
              <a
                href="/CV-Portfolio.pdf"
                download
                className="group flex items-center p-4 bg-gray-700 rounded-lg border border-gray-600 hover:border-teal-500 hover:bg-gray-600 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <h5 className="font-medium text-gray-100 group-hover:text-white transition-colors duration-300">
                    Mon CV
                  </h5>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Télécharger au format PDF
                  </p>
                </div>
                <div className="text-gray-400 group-hover:text-teal-400 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-400 text-center">
                N'hésitez pas à me contacter pour discuter de vos projets !
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Conteneur pour Toastify */}
      <ToastContainer />
    </section>
  );
};

export default Contact;

