import { useState, useEffect } from 'react';

const MouseTrail = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [lastMouseMoveTime, setLastMouseMoveTime] = useState(0);

  const ESPACEMENT = 80; // Espacement des particules

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      // Ajoute une nouvelle particule si le temps écoulé depuis le dernier mouvement de souris est supérieur à ESPACEMENT
      if (currentTime - lastMouseMoveTime > ESPACEMENT) {
        const newTrail = [
          ...trail,
          {
            x: e.pageX, // Utilisation de pageX qui prend en compte le défilement
            y: e.pageY, // Utilisation de pageY qui prend en compte le défilement
            id: Date.now(),
            opacity: 1, // Opacité initiale pleine
          },
        ];

        // Limite à 6 particules maximum
        if (newTrail.length > 6) {
          newTrail.shift();
        }

        setTrail(newTrail);
        setLastMouseMoveTime(currentTime);
      }
    };

    // Evénement de mouvement de la souris
    window.addEventListener('mousemove', handleMouseMove);

    // Nettoyage de l'événement lors du démontage du composant
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [trail, lastMouseMoveTime]);

  return (
    <svg
      width="100%"
      height="100%"
      style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0 }}
    >
      <defs>
        <radialGradient id="goldGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#c39f2d" />
        </radialGradient>
      </defs>

      {trail.map((point, index) => (
        <circle
          key={point.id}
          cx={point.x} // Position ajustée avec e.pageX et e.pageY
          cy={point.y} // Position ajustée avec e.pageX et e.pageY
          r="2" // Taille des particules
          fill="url(#goldGradient)"
          opacity="0.7" // Opacité subtile
          style={{
            animation: `moveAndFade 20s ease-out forwards`, // Animation douce
            animationDelay: `${index * 0.1}s`, // Décalage entre les particules
          }}
        />
      ))}

      <style>
        {`
          @keyframes moveAndFade {
            0% {
              opacity: 0.7;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(0.5); // Légère réduction de taille
            }
          }
        `}
      </style>
    </svg>
  );
};

export default MouseTrail;
