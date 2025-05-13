import { useState, useEffect } from 'react';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
};

const BackgroundTrail = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Détection du thème actuel
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(matchMedia.matches);

    // Écoute les changements de thème
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    return () => matchMedia.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 5 + 2, // Taille entre 2 et 7
        duration: Math.random() * 8 + 5, // Durée entre 5 et 13 secondes
      };

      setParticles(prev => {
        const updated = [...prev, newParticle];
        return updated.length > 40 ? updated.slice(1) : updated;
      });
    }, 300); // Une particule toutes les 300ms

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      width="100%"
      height="100%"
      style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, zIndex: 0 }}
    >
      <defs>
        {/* Dégradé pour dark mode */}
        <radialGradient id="goldGradientDark" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fffacd" />
          <stop offset="100%" stopColor="#ffd700" />
        </radialGradient>

        {/* Dégradé pour light mode */}
        <radialGradient id="goldGradientLight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e6ac00" />
          <stop offset="100%" stopColor="#a67c00" />
        </radialGradient>
      </defs>

      {particles.map(particle => (
        <circle
          key={particle.id}
          cx={particle.x}
          cy={particle.y}
          r={particle.size}
          fill={isDarkMode ? 'url(#goldGradientDark)' : 'url(#goldGradientLight)'}
          opacity="0.9"
          style={{
            animation: `fadeOut ${particle.duration}s ease-out forwards`,
            filter: 'blur(1.2px)',
          }}
        />
      ))}

      <style>
        {`
          @keyframes fadeOut {
            0% {
              opacity: 0.9;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(0.5);
            }
          }
        `}
      </style>
    </svg>
  );
};

export default BackgroundTrail;
