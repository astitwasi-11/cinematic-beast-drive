import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import defenderImg from "@/assets/vintage-defender.png";
import landcruiserImg from "@/assets/vintage-landcruiser.png";
import jeepImg from "@/assets/vintage-jeep.png";

gsap.registerPlugin(ScrollTrigger);

const machines = [
  {
    id: 1,
    name: "Land Rover Defender",
    year: "1948 - Present",
    image: defenderImg,
    description:
      "The British icon that defined off-road royalty. From African safaris to Antarctic expeditions, the Defender has proven that elegance and brutality can coexist.",
    specs: ["2.0L TURBO", "AWD", "TERRAIN RESPONSE"],
  },
  {
    id: 2,
    name: "Toyota Land Cruiser FJ40",
    year: "1960 - 1984",
    image: landcruiserImg,
    description:
      "Japan's answer to global adventure. The FJ40 built Toyota's reputation on reliability that borders on immortality. Still conquering trails 60 years later.",
    specs: ["4.2L INLINE-6", "4WD", "LEGENDARY RELIABILITY"],
  },
  {
    id: 3,
    name: "Jeep Wrangler",
    year: "1986 - Present",
    image: jeepImg,
    description:
      "Born from war, refined for adventure. The Wrangler carries the Willys DNA—the vehicle that helped win World War II.",
    specs: ["3.6L PENTASTAR", "4WD", "ROCK-TRAC"],
  },
];

export const MachinesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            {
              x: window.innerWidth >= 768 ? (index % 2 === 0 ? -60 : 60) : 0,
              y: window.innerWidth < 768 ? 40 : 0,
              opacity: 0,
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 85%",
                end: "top 50%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="machines"
      className="relative py-16 sm:py-24 md:py-32 bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-8 sm:w-16 h-0.5 bg-primary" />
            <span className="text-xs sm:text-sm font-mono text-primary tracking-widest">
              OFF-ROAD LEGENDS
            </span>
            <div className="w-8 sm:w-16 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
            VINTAGE<span className="text-primary"> MACHINES</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A tribute to the legends that paved the way. The machines that defined 
            what it means to go beyond.
          </p>
        </div>

        {/* Machine Cards */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {machines.map((machine, index) => (
            <div
              key={machine.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div className="relative overflow-hidden group">
                  {/* Accent frame */}
                  <div className="absolute -inset-2 sm:-inset-4 border border-primary/20 group-hover:border-primary/50 transition-colors duration-500" />
                  
                  <div className="relative overflow-hidden">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  </div>
                </div>

                {/* Year badge */}
                <div className="absolute -bottom-3 sm:-bottom-6 right-0 sm:-right-6 bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 font-mono text-xs sm:text-sm font-bold">
                  {machine.year}
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <span className="text-5xl sm:text-7xl font-bold text-primary/10">
                  0{machine.id}
                </span>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight -mt-4 sm:-mt-8">
                  {machine.name}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {machine.description}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4">
                  {machine.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 border border-border text-xs sm:text-sm font-mono text-muted-foreground"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Learn more link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm sm:text-base group/link mt-2 sm:mt-4"
                >
                  <span className="relative">
                    EXPLORE HISTORY
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/link:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
