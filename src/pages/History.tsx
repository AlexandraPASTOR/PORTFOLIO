import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.js";

import neona1t from "../assets/neonat1.png";
import gr1 from "../assets/gr1.png";
import neonat2 from "../assets/neonat2.png";
import gr2 from "../assets/gr2.png";

function History() {
  const { theme } = useTheme();

  const imgSrcGR = theme === 'dark' ? gr1 : gr2;
  const imgSrcNeonat = theme === 'dark' ? neona1t : neonat2;

  return (
    <>
      <section className="relative w-full flex flex-col items-center justify-start px-4 pb-8">

        {/* Images décoratives */}
        <img
          src={imgSrcNeonat}
          alt="Décoration néonat"
         className="absolute left-0 w-36 h-36 object-contain opacity-100 z-0 pointer-events-none 
            bottom-215 md:w-50 md:h-50 lg:bottom-0"
        />
        <img
          src={imgSrcGR}
          alt="Décoration GRS"
          className="absolute bottom-0 right-0 translate-x-6 w-48 h-48 md:w-60 md:h-60 md:translate-x-4 lg:top-0 xl:bottom-0 object-contain opacity-100 z-0 pointer-events-none"
        />

              {/* Titre */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-secondary)] mt-12 border-b-2 pb-2 border-[var(--color-tertiary)] inline-block ">
          À la croisée des chemins
        </h1>
        <h2 className="text-lg text-[var(--color-secondary)] mt-4">
          Un parcours de vie du soin à la tech
        </h2>
      </div>

      {/* Conteneur des bulles */}
      <div className="relative w-full max-w-6xl gap-16 lg:gap-0 md:gap-8 md:place-items-center lg:grid lg:grid-cols-[1fr_2fr_1fr] lg:grid-rows-1 xl:gap-x-10">

        {/* Bulle principale dorée */}
        <motion.div
          whileInView={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[var(--color-tertiary)] text-[var(--color-primary)] rounded-full p-6 w-64 h-64 flex items-center justify-center text-center shadow-lg hover:scale-105 transition-transform duration-300 z-20 col-span-1 md:col-start-1 justify-self-center lg:self-start"
        >
          <div className="bg-[var(--color-tertiary)] bg-opacity-70 text-[var(--color-primary)] p-4 rounded-full">
            <p className="text-sm">
              Je m'appelle <br /> <strong>Alexandra PASTOR</strong><br /> et mon parcours est une véritable illustration de <strong>l'importance de l'humain</strong> dans chaque projet, qu'il soit professionnel ou personnel.
            </p>
          </div>
        </motion.div>

        {/* Bulles secondaires */}
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 md:grid-cols-2 md:grid-rows-4 place-items-center my-16 lg:my-0 lg:grid-cols-4 lg:grid-rows-2 lg:gap-10">
          <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[var(--color-block)] text-[var(--color-secondary)] rounded-full p-6 w-52 h-52 flex items-center justify-center text-center shadow-md border border-[var(--color-tertiary)] hover:scale-105 transition-transform duration-300 col-start-1 row-start-1 lg:row-start-2 md:justify-self-end justify-self-start lg:justify-self-center"
          >
            <p className="text-xs">
            Auparavant infirmière <br/>en néonatalogie, dans un environnement où <strong>chaque geste compte</strong>, j’ai développé une <strong>profonde sensibilité</strong><br/> aux besoins des <br/>autres.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[var(--color-block)] text-[var(--color-secondary)] rounded-full p-6 w-52 h-52 flex items-center justify-center text-center shadow-md border border-[var(--color-tertiary)] hover:scale-105 transition-transform duration-300 col-start-1 row-start-3 justify-self-start md:justify-self-center md:col-start-2 md:row-start-2 lg:mb-0 lg:col-start-3 lg:row-start-2 lg:self-end"
          >
            <p className="text-xs">
            Coach <br/> de gymnastique <br/>rythmique, je transmets <strong>les valeurs du collectif et de <br/>l’entraide</strong> à de jeunes gymnastes.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[var(--color-block)] text-[var(--color-secondary)] rounded-full p-6 w-52 h-52 flex items-center justify-center text-center shadow-md border border-[var(--color-tertiary)] hover:scale-105 transition-transform duration-300 col-start-2 row-start-2 justify-self-end md:justify-self-end md:col-start-1 md:row-start-3  lg:col-start-2 lg:row-start-1 lg:justify-self-center lg:self-start"
          >
            <p className="text-xs">
              Maman de<br/> deux enfants, j'ai <br/>appris à être <strong>créative</strong> face aux défis quotidiens et à rester <strong>flexible</strong> dans un monde en constante évolution.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-[var(--color-block)] text-[var(--color-secondary)] rounded-full p-6 w-52 h-52 flex items-center justify-center text-center shadow-md border border-[var(--color-tertiary)] hover:scale-105 transition-transform duration-300 col-start-2 row-start-4 justify-self-end md:justify-self-end md:col-start-2 md:row-start-4 lg:col-start-4 lg:row-start-1 lg:justify-self-center"
          >
            <p className="text-xs">
              Ma devise : <br/><em><strong>Seul on va plus vite,<br/> mais ensemble on va plus loin</strong></em>, guide chaque projet comme une aventure d’équipe.
            </p>
          </motion.div>
        </div>

        {/* Bulle finale */}
        <motion.div
          whileInView={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ type: "spring", duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-0 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full p-8 w-64 h-64 flex items-center justify-center text-center shadow-lg hover:scale-105 transition-transform duration-300 mx-auto lg:grid lg:col-start-3 lg:self-end"
        >
          <p className="text-sm">
          Ce qui m’anime dans le <br/>développement web, c’est <br/> de pouvoir créer des <strong>solutions utiles</strong> en y apportant mes valeurs, avec <strong>l’humain au cœur</strong> de chaque projet.
          </p>
        </motion.div>
      </div>

      </section>

    </>
  );
}

export default History;