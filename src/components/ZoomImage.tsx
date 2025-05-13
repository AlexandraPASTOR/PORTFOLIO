import { useState } from "react";

interface ZoomImageProps {
  src: string;
  alt: string;
  className?: string;
}

function ZoomImage({ src, alt, className = "" }: ZoomImageProps) {
  const [zoomed, setZoomed] = useState(false);

  const toggleZoom = () => setZoomed((prev) => !prev); 

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
          className="fixed inset-0 z-50 bg-[black]/70 flex items-center justify-center transition-opacity duration-300"
          onClick={toggleZoom}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[90%] max-h-[90%] rounded-2xl shadow-lg transition-transform duration-300 scale-100"
          />
        </div>
      )}
    </>
  );
}

export default ZoomImage;
