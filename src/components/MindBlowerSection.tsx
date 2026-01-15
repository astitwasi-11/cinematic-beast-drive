import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MindBlowerSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax lines
      linesRef.current.forEach((line, index) => {
        if (line) {
          gsap.to(line, {
            x: index % 2 === 0 ? "10%" : "-10%",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });

      // Main text reveal
      if (textRef.current) {
        const chars = textRef.current.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { opacity: 0, y: 50, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block" style={{ perspective: "1000px" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-16 sm:py-24 md:py-32"
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className="absolute h-px bg-foreground"
            style={{
              top: `${(i + 1) * 12}%`,
              left: "-20%",
              right: "-20%",
              transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)`,
            }}
          />
        ))}
      </div>

      {/* Red accent */}
      <div className="absolute top-0 right-0 w-1/3 sm:w-1/4 h-full bg-gradient-to-l from-primary/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div ref={textRef} className="space-y-4 sm:space-y-8">
          {/* Quote marks */}
          <div className="text-6xl sm:text-8xl md:text-9xl font-bold text-primary/20 leading-none">"</div>

          {/* Main quote */}
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight -mt-8 sm:-mt-12 md:-mt-16">
            <span className="block">{splitText("MACHINES DON'T")}</span>
            <span className="block">{splitText("HAVE SOULS")}</span>
            <span className="block mt-2 sm:mt-4 text-primary">{splitText("UNTIL YOU DRIVE THEM")}</span>
          </h2>

          {/* Closing quote */}
          <div className="text-6xl sm:text-8xl md:text-9xl font-bold text-primary/20 leading-none rotate-180">"</div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 md:mt-24 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-primary">12</div>
            <div className="text-[10px] sm:text-xs md:text-sm font-mono text-muted-foreground tracking-widest mt-1 sm:mt-2">
              DAKAR WINS
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-foreground">39</div>
            <div className="text-[10px] sm:text-xs md:text-sm font-mono text-muted-foreground tracking-widest mt-1 sm:mt-2">
              YEARS OF GLORY
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-primary">∞</div>
            <div className="text-[10px] sm:text-xs md:text-sm font-mono text-muted-foreground tracking-widest mt-1 sm:mt-2">
              ADVENTURES AHEAD
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 md:mt-24">
          <button className="group relative px-8 sm:px-12 py-4 sm:py-6 border-2 border-foreground text-foreground font-bold tracking-wider text-sm sm:text-base overflow-hidden transition-colors hover:text-background">
            <span className="relative z-10">BEGIN YOUR ADVENTURE</span>
            <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
};
