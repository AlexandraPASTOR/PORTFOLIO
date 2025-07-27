import { useEffect, useState } from "react";

interface ZoomImageProps {
  src: string;
  alt: string;
  className?: string;
}

function ZoomImage({ src, alt, className = "" }: ZoomImageProps) {
  const [zoomed, setZoomed] = useState(false);

  const toggleZoom = () => setZoomed((prev) => !prev);

  useEffect(() => {
    // Bloque le scroll quand zoom actif
    if (zoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [zoomed]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={toggleZoom}
        className={`rounded-2xl object-cover cursor-pointer transition-transform duration-300 ease-in-out ${className}`}
      />

      {zoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={toggleZoom}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain cursor-zoom-out"
          />
        </div>
      )}
    </>
  );
}

export default ZoomImage;
