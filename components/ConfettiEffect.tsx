"use client";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function ConfettiEffect() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Deze code wordt alleen in de browser uitgevoerd
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    // Eventueel kun je ook een resize‑listener toevoegen:
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);

    // Opruimen om geheugenlekken te voorkomen
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen z-50 pointer-events-none">
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}
