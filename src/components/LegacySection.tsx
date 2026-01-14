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

        {/* Progress Bar */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-0.5 bg-background/20">
          <div
            ref={progressRef}
            className="w-full bg-primary transition-all duration-300"
            style={{ height: `${scrollProgress * 100}%` }}
          />
          {evolutionData.map((_, index) => (
            <div
              key={index}
              className={`absolute w-3 h-3 -left-[5px] rounded-full transition-all duration-300 ${
                index <= activeIndex ? "bg-primary" : "bg-background/30"
              }`}
              style={{ top: `${(index / (evolutionData.length - 1)) * 100}%` }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 pl-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Year Display */}
            <div className="relative">
              <div className="text-[15rem] md:text-[20rem] font-bold leading-none text-primary/20 select-none">
                {evolutionData[activeIndex].year}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="text-8xl md:text-9xl font-bold text-primary">
                  {evolutionData[activeIndex].year}
                </span>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-0.5 bg-primary" />
                <span className="text-sm font-mono text-primary tracking-widest">
                  THE EVOLUTION
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-background">
                {evolutionData[activeIndex].event}
              </h2>

              <p className="text-xl text-background/70 leading-relaxed max-w-lg">
                {evolutionData[activeIndex].description}
              </p>

              {/* Timeline dots */}
              <div className="flex gap-2 pt-8">
                {evolutionData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-12 h-1 transition-all duration-300 ${
                      index === activeIndex ? "bg-primary" : "bg-background/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Large background text */}
        <div className="absolute bottom-8 right-8 text-right">
          <span className="text-sm font-mono text-background/30 tracking-widest">
            12 DAKAR VICTORIES • 39 YEARS OF LEGACY • ENDLESS ADVENTURE
          </span>
        </div>
      </div>
    </section>
  );
};
