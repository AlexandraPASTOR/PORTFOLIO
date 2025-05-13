function HeaderHome() {
  return (
    <>
    <header className="bg-[var(--color-primary)]">
      <section className="flex flex-col items-center w-full justify-center h-full p-3">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[var(--color-tertiary)]">Bienvenue dans ma bulle digitale </h1>
        <h2 className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-[var(--color-secondary)]"> où l'humain et le code s'accordent...</h2>
      </section>
    </header>
    <hr className="border-[var(--color-tertiary)]" /></>
  );
}

export default HeaderHome;