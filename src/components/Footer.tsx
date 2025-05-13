function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
    <>
    <hr className="border-[var(--color-tertiary)]" />
        <footer className="bg-[var(--color-primary)] text-[var(--color-secondary)] p-2 text-center italic text-sm">

            <p>© {currentYear} Alexandra Pastor.</p>
            <p>Tous droits réservés.</p>
        </footer></>
    );
}

export default Footer;