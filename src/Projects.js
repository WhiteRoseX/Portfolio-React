import React, { useState } from "react";
import { motion } from "framer-motion"; // Import de framer-motion
import ProjectModal from "./Modal"; // Assure-toi que ton Modal est bien configuré avec des animations

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/640px-Vitejs-logo.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/640px-Node.js_logo_2015.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pygame_logo.gif",
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg"
    // Ajoute d'autres logos ici...
  ];

  const projects = [
    {
      id: 10,
      title: "Neural Booster",
      description: "Application mobile d'entrainement cérébral dévelopée avec react native et expo. L'application permet de réaliser des exercices de mémorisation, concentration, adaptabilité et + encore.",
      image: "/img/neural-booster.png",
      link: "https://neural-booster.vercel.app/",
      date: "Février, 2025",
      category: "Développement",
      technologies: [ ],
    },
    {
      id: 1,
      title: "ÉchangeLivre",
      description: "ÉchangeLivre est un exemple de plateforme concernant un projet encore en développement dans lequel il serai possible de revendre ses manuels scolaire déjà utilisés. React + vite utilisé ainsi que quelques librairies d'animations.",
      image: "/img/Échange-Livre.png",
      link: "https://react-livre-app.vercel.app/",
      date: "Aug 3, 2024",
      category: "Développement",
      technologies: [
        { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" },
        { name: "Tailwind.css", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      ],
    },
    {
      id: 2,
      title: "YesTech",
      description: "YesTech est mon premier test de développement d'un site en utilisant simplement bootstrap avec sa documentation",
      image: "/img/yestech.png",
      link: "https://yes-tech.vercel.app/",
      date: "Jan 5, 2022",
      category: "Développement",
      technologies: [
        { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
        { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
        
      ],
    },
    {
      id: 3,
      title: "Hand tracker",
      description: "Le trackeur de main est mon premier projet de 'computer vision' en python basé sur les librairies OpenCV et MediaPipe",
      image: "/img/hand.jpg",
      link: "https://github.com/WhiteRoseX/Hand-tracker",
      date: "Jan 20, 2022",
      category: "Développement",
      technologies: [
        { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
      ],
    },
    {
      id: 4,
      title: "Pacman en Python",
      description: "Recréation du jeu pacman avec ses logiques fait grâce à la librairie Pygcoame en Python, inclue des ennemies intelligents realisés avec les bases de l'algorithmique.",
      image: "/img/pacman.png",
      link: "https://github.com/WhiteRoseX/Pacman-Pygame",
      date: "Feb 21, 2022",
      category: "Développement",
      technologies: [
        { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { name: "Pygame", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pygame_logo.gif" },
      ],
    },
    {
      id: 5,
      title: "2D Unity game",
      description: "Jeu 2D assez simple fais en C# pour éxpérimenter le développement orienté objet ",
      image: "/img/jeu2D.png",
      link: "https://github.com/WhiteRoseX/Game-2D-Unity",
      date: "Oct 24, 2022",
      category: "Développement",
      technologies: [
        { name: "C#", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/C-Sharp_Logo.svg" },
        { name: "Unity", logo: "/img/unity.png" },
      ],
    },
    {
      id: 6,
      title: "Chaîne Youtube",
      description: "De par ma passion pour l'informatique j'ai testé de créer une chaîne youtube dans laquelle je parle de divers sujet autour de la tech. Pour l'instant en stand by je souhaite tout de même continuer a publier des vidéos par la suite.",
      image: "/img/chaine.png",
      link: "https://www.youtube.com/@misterz81",
      date: "9 juil, 2022 - Today",
      category: "Développement",
      technologies: [
        { name: "Premiere Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" },
        { name: "Youtube Studio", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" },
      ],
    },
    {
      id: 7,
      title: "Antea.lu",
      description: "Réalisation + design d'un site avec wordpress pour un cabinet de consulting en Finance situé au Luxembourg.",
      image: "/img/Antea.png",
      link: "https://exemple.com",
      date: "8 march, 2024",
      category: "Développement",
      technologies: [
        { name: "Wordpress", logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
      ],
    },
    {
      id: 8,
      title: "Root me +45 challenges",
      description: "RootMe une des plus ancienne plateforme d'apprentissage en cybersécurité. J'ai pu y réaliser dessus + de 45 challenges avec principalement des challenges coté web client et web serveur et quelque uns en réseau. Je vous partage le lien vers mon profil ci dessous ou plus de détails ainsis que les challenges correspondants sont disponibles",
      image: "https://media.licdn.com/dms/image/D4D12AQEIHt8dWFgGbg/article-cover_image-shrink_720_1280/0/1712243238027?e=2147483647&v=beta&t=8LOzQS_R2QJKs3PAoobbr82knw9hcqnrq1AH5jMBVys",
      link: "https://www.root-me.org/White-Rose?lang=fr#8580abadec12ed4e0b4c97690de4ece9",
      category: "PenTest",
      technologies: [
      ],
    },
    {
      id: 9,
      title: "PortSwigger +15 labs",
      description: "J'ai découvert PortSwigger en utilisant Burp Suite Community edition. Leurs labs sont orientés web client & web serveur. En apprentissage constant j'essaye d'en réaliser de plus en plus chaque jours.",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*ZUkpT8yBuSmz3n0U.png",
      link: "https://portswigger.net/web-security/all-labs",
      date: "Feb 17, 2023",
      category: "PenTest",
      technologies: [
      ],
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-gray-900 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-teal-400 text-center mb-6 md:mb-8 tracking-wider glitch-effect">
          Mes Projets
        </h3>

        {/* Catégorie Développement */}
        <h4 className="text-lg md:text-2xl font-semibold text-teal-400 mb-4 md:mb-6">Développement</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.filter(project => project.category === "Développement").map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group relative bg-gray-800 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Gradient lumineux au survol */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                style={{ pointerEvents: "none" }}
              ></div>

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-3 md:mb-4 w-full h-32 md:h-40 object-cover"
              />

              {/* Titre */}
              <h4 className="text-lg md:text-xl font-semibold text-teal-300 mb-2 text-center">
                {project.title}
              </h4>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-300 text-center mt-2">
                {project.description.substring(0, 45)}...
              </p>

              {/* Bouton */}
              <div className="flex justify-center mt-3 md:mt-4 w-full">
                <button
                  onClick={() => openModal(project)}
                  className="btn-futuristic btn-secondary px-4 py-1.5 text-xs md:text-sm"
                >
                  <span>En savoir plus</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Catégorie PenTest */}
        <h4 className="text-lg md:text-2xl font-semibold text-teal-400 mb-4 md:mb-6 mt-10">PenTest</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.filter(project => project.category === "PenTest").map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group relative bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Gradient lumineux au survol */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                style={{ pointerEvents: "none" }}
              ></div>

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-4 w-full h-40 object-cover"
              />

              {/* Titre */}
              <h4 className="text-xl font-semibold text-teal-300 mb-2 text-center">
                {project.title}
              </h4>

              {/* Description */}
              <p className="text-gray-300 text-center mt-2">
                {project.description.substring(0, 50)}...
              </p>

              {/* Bouton */}
              <div className="flex justify-center mt-4 w-full">
                <button
                  onClick={() => openModal(project)}
                  className="btn-futuristic btn-secondary px-3 py-1 text-xs"
                >
                  <span>En savoir plus</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}  
        onClose={closeModal}
        title={selectedProject?.title}
        description={selectedProject?.description}
        image_path={selectedProject?.image}
        link={selectedProject?.link}
        date={selectedProject?.date}
        technologies={selectedProject?.technologies || []}
      />
    </section>
  );
}

export default Projects;
