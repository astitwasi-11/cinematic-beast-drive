import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const evolutionData = [
  { year: 1982, event: "First Generation Pajero", description: "The legend begins. Mitsubishi introduces the Pajero, named after the Pampas cat." },
  { year: 1985, event: "First Dakar Victory", description: "Patrick Zaniroli claims Pajero's first Paris-Dakar Rally victory." },
  { year: 1991, event: "Second Generation", description: "Complete redesign with the revolutionary Super Select 4WD system." },
  { year: 1997, event: "Dakar Dominance", description: "Jutta Kleinschmidt becomes the first woman to win a Dakar stage in a Pajero." },
  { year: 2000, event: "Third Generation", description: "Modern era begins. Monocoque body meets legendary off-road capability." },
  { year: 2007, event: "Seventh Dakar Win", description: "Stéphane Peterhansel secures another victory. 12 total Dakar wins for Pajero." },
  { year: 2021, event: "Production Ends", description: "After 39 years, the legend goes into the history books. But the spirit lives on." },
];

export const LegacySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a ScrollTrigger for the entire section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);
          setActiveIndex(Math.min(Math.floor(progress * evolutionData.length), evolutionData.length - 1));
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="legacy"
      className="relative bg-foreground text-background"
      style={{ height: `${evolutionData.length * 100}vh` }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--background)) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Progress Bar - Hidden on mobile, shown on tablet+ */}
        <div className="hidden sm:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 h-48 md:h-64 w-0.5 bg-background/20">
          <div
            ref={progressRef}
            className="w-full bg-primary transition-all duration-300"
            style={{ height: `${scrollProgress * 100}%` }}
          />
          {evolutionData.map((_, index) => (
            <div
              key={index}
              className={`absolute w-2 md:w-3 h-2 md:h-3 -left-[3px] md:-left-[5px] rounded-full transition-all duration-300 ${
                index <= activeIndex ? "bg-primary" : "bg-background/30"
              }`}
              style={{ top: `${(index / (evolutionData.length - 1)) * 100}%` }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 sm:pl-12 md:pl-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left - Year Display */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="text-[6rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] font-bold leading-none text-primary/20 select-none">
                {evolutionData[activeIndex].year}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary">
                  {evolutionData[activeIndex].year}
                </span>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <div className="w-8 sm:w-16 h-0.5 bg-primary" />
                <span className="text-xs sm:text-sm font-mono text-primary tracking-widest">
                  THE EVOLUTION
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-background">
                {evolutionData[activeIndex].event}
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-background/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {evolutionData[activeIndex].description}
              </p>

              {/* Timeline dots */}
              <div className="flex justify-center lg:justify-start gap-1.5 sm:gap-2 pt-4 sm:pt-8">
                {evolutionData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-6 sm:w-8 md:w-12 h-1 transition-all duration-300 ${
                      index === activeIndex ? "bg-primary" : "bg-background/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Large background text */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-right hidden sm:block">
          <span className="text-[10px] sm:text-xs font-mono text-background/30 tracking-widest">
            12 DAKAR VICTORIES • 39 YEARS OF LEGACY • ENDLESS ADVENTURE
          </span>
        </div>
      </div>
    </section>
  );
};
