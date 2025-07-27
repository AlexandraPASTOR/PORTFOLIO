import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/pagination.css';
import '../../node_modules/swiper/modules/navigation.css';

import ZoomImage from '../components/ZoomImage';

import wildeats from '../assets/wildeats.png';
import straszik from '../assets/straszik.png';
import cosmiccode from '../assets/cosmic-code.png';
import takutaku from '../assets/takutaku.png';
import portfolio from '../assets/portfolio.png';

function Projects() {
  const projects = [
        {
      title: 'TakuTaku',
      description:
        'Plateforme de streaming d’animés, accessible sur abonnement, proposant un vaste catalogue de séries animées. Interface intuitive, affichage sous forme de fiches, historique de visionnage intégré.',
      objectif:
        'Centraliser, suivre et enrichir son expérience de visionnage d’animés, en toute simplicité.',
      technologies_utilisées: 'React, Tailwind CSS, Figma, API, Express, SQL, Git',
      imageUrl: takutaku,
      gitHubLink: 'https://github.com/AlexandraPASTOR/Project-TakuTaku',
      link: 'https://takutaku.vercel.app/',
    },
    {
      title: "Stras'Zik",
      description:
        "Site officiel d’un groupe de rock alsacien, alliant l'énergie brute des années rétro à une forte identité locale. Il met en lumière leur univers à travers leurs performances live, leurs actualités, leurs anecdotes de scène et leurs produits dérivés.",
      objectif:
        "Donner une visibilité professionnelle au groupe et renforcer le lien avec leur communauté de fans.",
      technologies_utilisées: 'React, Tailwind CSS, Figma, API custom, Local Storage, Git',
      imageUrl: straszik,
      gitHubLink: 'https://github.com/wildcodeschool-2025-03/straszik',
      link: 'https://straszik-client.vercel.app/',
    },
    {
      title: "Cosmic'Code",
      description:
        'Application mobile ludique développée en 48 heures lors d’un hackathon. Elle met en scène Biome, un petit alien qui explore la galaxie. Chaque planète représente un thème clé du code.',
      objectif: 'Offrir une introduction ludique à la programmation pour les débutants.',
      technologies_utilisées: 'React, Tailwind CSS, Excalidraw, Git',
      imageUrl: cosmiccode,
      gitHubLink: 'https://github.com/AlexandraPASTOR/CosmicCode',
      link: 'https://cosmi-code.vercel.app/',
    },
    {
      title: 'WildEats',
      description:
        'Plateforme intuitive et interactive conçue pour la communauté de la Wild Code School. Elle permet aux étudiants de découvrir les bonnes adresses autour du campus mais également de réserver son repas à la cafétéria.',
      objectif:
        'Faire gagner du temps aux étudiants tout en leur offrant une expérience culinaire variée et simplifiée.',
      technologies_utilisées: 'HTML, CSS, JavaScript, Figma, Git',
      imageUrl: wildeats,
      gitHubLink: 'https://github.com/AlexandraPASTOR/Project-WildEats/',
      link: 'https://alexandrapastor.github.io/Project-WildEats/',
    },
    {
      title: 'Portfolio',
      description:
        'Portfolio personnel sur lequel vous vous trouvez actuellement ! Ici, je vous ouvre les portes de mon parcours, mes projets, mes compétences et mes valeurs.',
      objectif: 'Vous faire découvrir mon univers avec passion et vous donner envie d’aller plus loin.',
      technologies_utilisées: 'React, Tailwind CSS, Git',
      imageUrl: portfolio,
      gitHubLink: 'https://github.com/AlexandraPASTOR/PORTFOLIO',
      link: 'https://portfolio-alexandrapastors-projects.vercel.app/',
    },
  ];

  return (
    <section className="w-full py-12 px-4 lg:px-16 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--color-secondary)] mb-12 border-b-2 border-[var(--color-tertiary)] inline-block pb-2">
        Mes Projets
      </h2>

<div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: -60 },
          1024: { slidesPerView: 3, spaceBetween: -60 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}  className="px-12 md:px-16 pb-12 h-full">
<div className="bg-[var(--color-block)] rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[650px] max-h-[650px] h-full hover:shadow-xl transition-shadow duration-300">
                <div className="scrollable overflow-x-hidden overflow-y-auto max-h-[250px] mb-4 rounded-xl">
  <ZoomImage
    src={project.imageUrl}
    alt={project.title}
    className="object-cover w-full hover:scale-105 transition-transform duration-300"
  />
</div>

              <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-4 mt-2">{project.title}</h3>
              <p className="text-sm text-[var(--color-secondary)] mb-4">{project.description}</p>
             {(project.objectif || project.technologies_utilisées) && (
                    <table className="text-sm text-[var(--color-secondary)]">
                      <tbody>
                        {project.objectif && (
                          <tr>
                            <td className="align-top pr-2 text-[var(--color-tertiary)] text-xl">🞋</td>
                            <td><strong>Objectif :</strong> {project.objectif}</td>
                          </tr>
                        )}
                        {project.technologies_utilisées && (
                          <tr>
                            <td className="align-top pr-2 text-[var(--color-tertiary)] text-xl">⛭</td>
                            <td><strong>Tech :</strong> {project.technologies_utilisées}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  )}
              <div className="mt-auto flex flex-col items-start">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block text-[var(--color-tertiary)] hover:underline font-semibold text-sm"
                >
                  Voir le projet →
                </a>
                {project.gitHubLink && (
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[var(--color-tertiary)] hover:underline font-semibold text-sm"
                  >
                    Voir le code source sur GitHub →
                  </a> )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}

export default Projects;
