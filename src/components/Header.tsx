import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <header className="bg-[var(--color-primary)] text-[var(--color-secondary)]">
      <section className="flex items-center w-full justify-between h-16 pr-3 md:pr-4">

{/* Logo section */}
      <Link to="/">
      <img
        src="/public/logo1.png"
        alt="Logo"
        className="w-14 object-cover"
      /></Link>

{/* Navigation section */}     
        <nav>
          <ul className="flex space-x-4 font-bold items-center justify-center text-center h-full">
            <li><Link to="/histoire" className="hover:text-[var(--color-hover)] active:text-[var(--color-hover)] pl-2">Histoire</Link></li>
            <li><Link to="/compétences" className="hover:text-[var(--color-hover)] active:text-[var(--color-hover)]">Compétences</Link></li>
            <li><Link to="/projets" className="hover:text-[var(--color-hover)] active:text-[var(--color-hover)]">Projets</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--color-hover)] active:text-[var(--color-hover)]">Contact</Link></li>
          </ul>
        </nav>
      </section>
    </header>
    <hr className="border-[var(--color-tertiary)]" /></>
  );
}

export default Header;