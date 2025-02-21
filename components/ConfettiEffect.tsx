"use client";
import Confetti from "react-confetti";

export default function ConfettiEffect() {
  return (
    <div className="fixed inset-0 w-screen h-screen z-50 pointer-events-none">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
}
