import React from 'react';

function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-20">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-teal-500 hover:text-teal-400 cursor-pointer transform transition duration-300">Mon Portfolio</h1>
        
        {/* Menu principal */}
        <nav>
          <ul className="flex space-x-10">
            <li>
              <a
                href="#about"
                className="text-lg text-white hover:text-teal-500 cursor-pointer transform transition duration-300"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg text-white hover:text-teal-500 cursor-pointer transform transition duration-300"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg text-white hover:text-teal-500 cursor-pointer transform transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Bouton de menu hamburger pour les petits écrans */}
        <div className="block lg:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Barre de dégradé en bas (effet futuriste) */}
      <div className="h-1 bg-gradient-to-r from-teal-400 to-blue-500"></div>
    </header>
  );
}

export default Navbar;
