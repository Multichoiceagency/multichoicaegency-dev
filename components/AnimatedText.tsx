export default function AnimatedText() {
    return (
      <div className="relative w-screen overflow-hidden bg-transparent flex items-center whitespace-nowrap">
        <div className="animate-marquee flex space-x-8">
          <span className="text-[15vw] font-extrabold uppercase text-transparent stroke-text">
            FULL SERVICE DIGITAL AGENCY
          </span>
          <span className="text-[15vw] font-extrabold uppercase text-transparent stroke-text">
            MULTICHOICEAGENCY
          </span>
        </div>
      </div>
    );
  }