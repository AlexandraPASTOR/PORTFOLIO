const NaviLogo = () => {
    return (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Centre lumineux doré */}
        <circle cx="50" cy="50" r="10" fill="url(#goldGradient)" />
        <circle cx="50" cy="50" r="18" fill="url(#goldGradient)" opacity="0.2" />
  
        {/* Ailes fines et allongées */}
        <polygon points="35,10 40,25 50,50 30,35" fill="#fff8dc" opacity="0.3" />
        <polygon points="65,10 60,25 50,50 70,35" fill="#fff8dc" opacity="0.3" />
        <polygon points="35,90 40,75 50,50 30,65" fill="#fff8dc" opacity="0.3" />
        <polygon points="65,90 60,75 50,50 70,65" fill="#fff8dc" opacity="0.3" />
  
        {/* Dégradé doré */}
        <defs>
          <radialGradient id="goldGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#c39f2d" />
          </radialGradient>
        </defs>
      </svg>
    );
  };
  
  export default NaviLogo;