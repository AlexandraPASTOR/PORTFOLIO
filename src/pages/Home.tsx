import HeaderHome from "../components/HeaderHome";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BackgroundTrail from "../components/BackgroundTrail";


function HomePage() {
  return (
    <>
    <section className="flex flex-col w-full min-h-screen overflow-hidden"><HeaderHome />
    <BackgroundTrail />

         {/* Conteneur du logo et de la navigation */}
         <div className="flex flex-col items-center justify-center flex-grow relative">
          
          {/* Navigation autour du logo */}
          <div className="flex space-x-12 font-semibold items-center justify-center h-full text-[var(--color-secondary)] lg:text-xl">
            <Link to="/histoire" className="hover:text-[var(--color-tertiary)] active:text-[var(--color-tertiary)] -translate-y-10 -translate-x-2 bg-[var(--color-block)] rounded-lg p-2">
              Histoire
            </Link>
            <Link to="/compétences" className="hover:text-[var(--color-tertiary)] active:text-[var(--color-tertiary)] translate-x-16 translate-y-4 md:translate-x-50 md:translate-y-10 lg:translate-x-60 xl:translate-x-70 bg-[var(--color-block)] rounded-lg p-2">Compétences</Link>
          </div>

          {/* Logo */}
          <div className="mx-auto">
            <img
              src="./public/logo.png"
              alt="Logo"
              className="w-40 h-30 md:w-60 md:h-50 object-cover"
            />
          </div>

          <div className="flex space-x-12 font-semibold items-center h-full text-[var(--color-secondary)] mt-6 lg:text-xl">
          <Link to="/projets" className="hover:text-[var(--color-tertiary)] active:text-[var(--color-tertiary)] -translate-x-16 -translate-y-4 md:-translate-x-50 md:-translate-y-10 lg:-translate-x-60 xl:-translate-x-70 bg-[var(--color-block)] rounded-lg p-2">Projets</Link>
          <Link to="/contact" className="hover:text-[var(--color-tertiary)] active:text-[var(--color-tertiary)] translate-y-10 translate-x-2 bg-[var(--color-block)] rounded-lg p-2">Contact</Link>
          </div>

        </div>
  

<Footer/> 

    </section>
    </>
  );
}

export default HomePage;