import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap, faHeart, faSync, faUsers, faComments } from '@fortawesome/free-solid-svg-icons';

interface Skill {
  category: string;
  items: SkillItem[];
}

interface SkillItem {
  name: string;
  description: string;
  icon?: any; // Utilisation de FontAwesomeIcon
}

function Skills() {
  const skills: Skill[] = [
    {
      category: 'Compétences techniques',
      items: [
        { name: 'HTML', description: 'Structure du web, sémantique et accessibilité.' },
        { name: 'CSS', description: 'Mise en forme, animations, responsive design.' },
        { name: 'JavaScript', description: 'Logique, DOM, interactions utilisateurs.' },
        { name: 'React', description: 'Composants, hooks, état, router.' },
        { name: 'Node.js', description: 'Serveur backend avec Express, création et gestion d\'API REST.' },
        { name: 'Tailwind CSS', description: 'Utilisation de classes utilitaires modernes.' },
        { name: 'SQL & NoSQL', description: 'Gestion de bases de données relationnelles et non relationnelles.' },
      ],
    },
    {
      category: 'Outils & Méthodologies',
      items: [
        { name: 'Git & GitHub', description: 'Gestion de version, branches, pull requests.' },
        { name: 'VS Code', description: 'IDE léger et performant avec extensions.' },
        { name: 'Figma', description: 'Maquettage UI collaboratif.' },
        { name: 'Trello', description: 'Suivi agile des tâches en équipe.' },
      ],
    },
    {
       category: 'Valeurs & Engagement',
      items: [
        { name: 'Organisation', icon: faSitemap, description: 'Priorisation, rigueur, planification.' },
        { name: 'Empathie', icon: faHeart, description: 'Écoute active, bienveillance, sens humain.' },
        { name: 'Adaptabilité', icon: faSync, description: 'Réactivité, résilience, souplesse.' },
        { name: 'Equipe', icon: faUsers, description: 'Collaboration, synergie, entraide.' },
        { name: 'Communication', icon: faComments, description: 'Clarté, écoute, transmission efficace.' },
      ],
    },
  ];

return (
  <>

<section className="w-full flex flex-col items-center justify-center">
    <section className="py-16 bg-[var(--color-block)] text-[var(--color-secondary)] mx-8 md:mx-0">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 border-b-2 border-[var(--color-tertiary)] inline-block pb-2 text-center">
          Mes Compétences
        </h2>

        {skills
          .filter((section) => section.category !== 'Valeurs & Engagement')
          .map((section, i) => (
            <div key={i} className="mb-16">
              <h3 className="text-[var(--color-tertiary)] text-2xl font-semibold mb-8">
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.items.map((skill, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-lg text-[var(--color-secondary)]">{skill.name}</h4>
                    <p className="text-sm text-[var(--color-secondary)]">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>

    {/* Section Valeurs */}
    <section className="bg-[#F3ECD5] py-10 text-[#333333] lg:w-2/3">
      <div className="container mx-auto px-6 md:px-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 border-b-2 border-[var(--color-tertiary)] pb-2 text-center">
          Valeurs & Engagement
        </h3>
        <div className="flex justify-center items-center space-x-2 flex-wrap">
          {skills
            .find((section) => section.category === 'Valeurs & Engagement')!
            .items.map((skill, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-6 rounded-lg shadow-md w-24 h-24 md:w-32 md:h-32 cursor-pointer bg-[var(--color-tertiary)] mb-6 transition-all duration-300 hover:scale-105 hover:bg-[var(--color-primary)]"
              >
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="w-28 h-28 mb-3 text-[var(--color-primary)]"
                />
                <h4 className="font-semibold text-xs text-center text-[var(--color-primary)]">{skill.name}</h4>

                <div className="absolute inset-0 bg-[var(--color-primary)] bg-opacity-90 text-[var(--color-tertiary)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <p className="text-xs text-center p-2">{skill.description}</p>
                </div>
              </div>
            ))}
        </div>
        <p className="text-center italic text-[#333333] text-xs md:text-sm max-w-2xl mx-auto">
          Chaque principe ci-dessus oriente mon travail et mes interactions, établissant ainsi les bases de mon engagement professionnel.
        </p>
      </div>
    </section>

  </section>
  </>
);
}

export default Skills;
