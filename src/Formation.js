import React, { useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "bac",
    title: "Bac Général",
    subtitle: "Spécialités Maths & SES",
    img: "/img/Lavoisier.jpg",
    alt: "Bac Général",
    desc:
      "Base scientifique et économique : raisonnement, analyse et curiosité. Cette étape m’a donné une vraie appétence pour la modélisation et la logique.",
  },
  {
    id: "but",
    title: "BUT Informatique",
    subtitle: "2 ans d’apprentissage",
    img: "/img/sorbonne.webp",
    alt: "BUT Informatique",
    desc:
      "Développement, algorithmique, bases de données, POO et gestion de projet. Projets en équipe, bonnes pratiques et esprit produit.",
  },
];

function Formation() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <section id="formation" className="bg-#171E2D text-gray-200">
      {/* --- En-tête --- */}
      <div className="container mx-auto px-4  md:pt-20">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white glitch-effect">
          Formation
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-400 text-sm md:text-base">
          Un parcours clair et structuré, sans artifices.
        </p>
      </div>

      {/* --- Timeline Desktop --- */}
      <div className="container mx-auto px-4 md:pb-28">
        <div className="relative mx-auto hidden max-w-5xl md:block">
          {/* Ligne centrale */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gray-700" />

          <ul className="space-y-20 mt-12">
            {steps.map((s, idx) => {
              const right = idx % 2 === 1;
              return (
                <li
                  key={s.id}
                  className="relative grid grid-cols-2 items-start gap-12"
                >
                  {/* Image ronde */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2">
                    <img
                      src={s.img}
                      alt={s.alt}
                      className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover"
                    />
                  </div>

                  {/* Carte de contenu */}
                  <motion.article
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className={`${
                      right ? "col-start-2" : "col-start-1"
                    } bg-gray-800 rounded-2xl p-6 md:p-8 shadow-md`}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {s.title}
                    </h3>
                    <h4 className="text-lg md:text-xl text-teal-400 mt-1">
                      {s.subtitle}
                    </h4>
                    <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                      {s.desc}
                    </p>
                  </motion.article>

                  {/* Colonne vide opposée */}
                  <div className={`${right ? "col-start-1" : "col-start-2"}`} />
                </li>
              );
            })}
          </ul>
        </div>

        {/* --- Version Mobile --- */}
        <div className="md:hidden mt-10">
          <div className="relative pl-8">
            {/* Ligne verticale simple */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-700" />

            <ul className="space-y-10">
              {steps.map((s) => (
                <li key={s.id} className="relative">
                  {/* Image */}
                  <div className="absolute -left-1 top-2">
                    <img
                      src={s.img}
                      alt={s.alt}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  </div>

                  {/* Texte */}
                  <div className="ml-24 bg-gray-800 rounded-2xl p-4 shadow-md">
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                    <h4 className="text-md text-teal-400 mt-1">{s.subtitle}</h4>
                    <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formation;
