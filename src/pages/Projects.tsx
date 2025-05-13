import ZoomImage from "../components/ZoomImage";

import wildeats from '../assets/wildeats.png';
import straszik from '../assets/straszik.png';

function Projects() {
  const projects = [
    {
      title: 'WildEats',
      description:
        'Plateforme intuitive et interactive conçue pour la communauté de la Wild Code School. Elle permet aux étudiants de découvrir les bonnes adresses autour du campus mais également de réserver son repas à la cafétéria.',
      objectif:
        'Faire gagner du temps aux étudiants tout en leur offrant une expérience culinaire variée et simplifiée.',
      technologies_utilisées: 'HTML, CSS, JavaScript',
      imageUrl: {wildeats},
      gitHubLink: 'https://github.com/AlexandraPASTOR/Project-WildEats/',
      link: 'https://alexandrapastor.github.io/Project-WildEats/',
    },
    {
      title: "Stras'Zik",
      description:
        "Site officiel d’un groupe de rock alsacien, alliant l'énergie brute des années rétro à une forte identité locale. Il met en lumière leur univers à travers leurs performances live, leurs actualités, leurs anecdotes de scène et leurs produits dérivés. ",
      objectif:
        "Donner une visibilité professionnelle au groupe et renforcer le lien avec leur communauté de fans.",
      technologies_utilisées: 'React, Tailwind CSS, API custom, Local Storage',
      imageUrl: { straszik },
      gitHubLink: 'https://github.com/wildcodeschool-2025-03/straszik',
      link: 'https://straszik-client.vercel.app/',
    },
    {
      title: 'Projet 3',
      description:
        'A venir.',
      objectif: '',
      technologies_utilisées: '',
      imageUrl: '',
      gitHubLink: '',
      link: '#',
    },
  ];

  return (

    <section className="w-full flex flex-col items-center justify-center pb-6 mx-6 lg:mx-12">
      <div className="container mx-auto px-4 md:px-12">
      <div className="w-full flex justify-center">
  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-secondary)] my-12 border-b-2 border-[var(--color-tertiary)] pb-2">
    Mes Projets
  </h2>
</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--color-block)] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-auto"

            > {project.imageUrl && (<div className="overflow-y-auto max-h-[300px] p-6">
              <ZoomImage
                src={typeof project.imageUrl === 'string' ? project.imageUrl : Object.values(project.imageUrl)[0]}
                alt={project.title}
                className="object-cover w-full rounded-2xl"
              /></div>)}
              <div className="p-6 flex flex-col justify-end">

                  <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-4">{project.title}</h3>
                  <p className="text-[var(--color-secondary)] text-sm mb-4">{project.description}</p>
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block text-[var(--color-tertiary)] hover:text-[#B88B29] font-semibold"
                >
                  Voir le projet →
                </a>
                {project.gitHubLink && (
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[var(--color-secondary)] hover:text-[var(--color-tertiary)] font-semibold"
                  >
                    Voir le code source sur GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;