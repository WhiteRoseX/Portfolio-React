import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import WorkIcon from './components/travail.js';

function Experience() {
  const useReveal = (delay = 0) => {
    const ref = useRef(null);
    const controls = useAnimation();
    const inView = useInView(ref, { amount: 0.3 });
    useEffect(() => {
      controls.start(inView ? 'visible' : 'hidden');
    }, [inView, controls]);
    const variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay } }
    };
    return { ref, controls, variants };
  };

  const card1 = useReveal(0);
  const card2 = useReveal(0.05);
  const card3 = useReveal(0.1);

  const useTilt = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const rotateX = useTransform(scrollYProgress, [0, 1], [24, -24]);
    const rotateY = useTransform(scrollYProgress, [0, 1], [-24, 24]);
    const y = useTransform(scrollYProgress, [0, 1], [6, -6]);
    return { ref, style: { rotateX, rotateY, y, transformPerspective: 800 } };
  };

  const tilt1 = useTilt();
  const tilt2a = useTilt();
  const tilt2b = useTilt();
  const tilt3 = useTilt();
  return (
    <section className="bg-gray-900 text-gray-200" aria-label="Expériences professionnelles">
      <div className="container mx-auto px-4 pt-16">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white glitch-effect">
          Expériences
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400 text-sm md:text-base">
          Mes expériences professionnelles
        </p>
      </div>

      {/* Cartes en "escalier" */}
      <div className="container mx-auto px-4 pb-20 mt-12 md:pb-28 space-y-8 md:space-y-10">
        {/* 1. Antea - Front-end Web */}
        <motion.article
          ref={card1.ref}
          className="relative rounded-2xl bg-[#1F2937] p-6 md:p-8 shadow-sm"
          initial="hidden"
          animate={card1.controls}
          variants={card1.variants}
        >
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-stretch">
            <div className="md:col-span-7 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <WorkIcon size={22} />
                <h3 className="text-xl md:text-2xl font-semibold text-teal-400">Antea — Développement Web Front‑end</h3>
              </div>
              <motion.p
                className="mt-3 text-gray-300 leading-relaxed max-w-prose"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                Intégration front‑end moderne, composants réutilisables, accessibilité et
                performance. Mise en place d’une base de styles cohérente et d’un design
                system léger pour un rendu clair et professionnel.
              </motion.p>
              <div className="mt-4">
                <motion.a
                  href="https://antea.lu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Voir le site Antea
                  <span className="ml-2">↗</span>
                </motion.a>
              </div>
            </div>
            <div className="md:col-span-5 md:ml-8 md:mt-2">
              <motion.div
                ref={tilt1.ref}
                style={tilt1.style}
                className="rounded-xl overflow-hidden border border-white/10 bg-black/30 will-change-transform"
                animate={{}}
                transition={{}}
              >
                <img src="/img/Antea.png" alt="Site Antea" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
          
        </motion.article>

        {/* 2. Wellia — Mobile Full‑stack */}
        <motion.article
          ref={card2.ref}
          className="relative rounded-2xl bg-[#1F2937] p-6 md:p-8 shadow-sm"
          initial="hidden"
          animate={card2.controls}
          variants={card2.variants}
        >
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-stretch">
            <div className="md:col-span-7 order-2 md:order-1 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <WorkIcon size={22} />
                <h3 className="text-xl md:text-2xl font-semibold text-teal-400">Wellia — Développement Mobile Full‑stack</h3>
              </div>
              <motion.p
                className="mt-3 text-gray-300 leading-relaxed max-w-prose"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                Conception et développement d’une application mobile de bien‑être, du front
                jusqu’au backend: authentification, stockage, synchronisation et livraison
                sur stores. UI simple, axée sur la clarté et la constance visuelle.
              </motion.p>
              <div className="mt-4 flex gap-5 flex-wrap">
                <motion.a
                  href="https://apps.apple.com/fr/app/wellia-ai/id6745897871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  App Store
                  <span className="ml-2">↗</span>
                </motion.a>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.wellia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                >
                  Google Play
                  <span className="ml-2">↗</span>
                </motion.a>
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2 md:mr-8 md:mt-2">
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  ref={tilt2a.ref}
                  style={tilt2a.style}
                  className="rounded-xl overflow-hidden border border-white/10 bg-black/30 will-change-transform"
                >
                  <img src="/img/wellia-app-store.jpeg" alt="Wellia App Store" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  ref={tilt2b.ref}
                  style={tilt2b.style}
                  className="rounded-xl overflow-hidden border border-white/10 bg-black/30 will-change-transform"
                >
                  <img src="/img/wellia-android.PNG" alt="Wellia Google Play" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </div>
          
        </motion.article>

        {/* 3. Wellia — Site Web Full‑stack */}
        <motion.article
          ref={card3.ref}
          className="relative rounded-2xl bg-[#1F2937] p-6 md:p-8 shadow-sm"
          initial="hidden"
          animate={card3.controls}
          variants={card3.variants}
        >
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-stretch">
            <div className="md:col-span-7 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <WorkIcon size={22} />
                <h3 className="text-xl md:text-2xl font-semibold text-teal-400">Wellia — Développement Web Full‑stack</h3>
              </div>
              <motion.p
                className="mt-3 text-gray-300 leading-relaxed max-w-prose"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                Développement du site vitrine: pages marketing performantes, rédaction
                technique, SEO de base et pipeline de déploiement simple. Focus sur la
                lisibilité, la structure et la cohérence typographique.
              </motion.p>
              <div className="mt-4">
                <motion.a
                  href="https://wellia.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Voir le site Wellia
                  <span className="ml-2">↗</span>
                </motion.a>
              </div>
            </div>
            <div className="md:col-span-5 md:ml-8 md:mt-2">
              <motion.div
                ref={tilt3.ref}
                style={tilt3.style}
                className="rounded-xl overflow-hidden border border-white/10 bg-black/30 will-change-transform"
              >
                <img src="/img/wellia-site.png" alt="Site Wellia" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
          
        </motion.article>
      </div>
    </section>
  );
}

export default Experience; 