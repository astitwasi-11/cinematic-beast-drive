import { useEffect, useRef } from "react";
import gsap from "gsap";
import pajeroHero from "@/assets/pajero-hero.png";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(carRef.current, { x: -100, opacity: 0 });
      gsap.set(panelRef.current, { x: 100, opacity: 0 });
      gsap.set(titleRef.current, { y: 50, opacity: 0 });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(carRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          panelRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          titleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );

      // Parallax on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;

        gsap.to(carRef.current, {
          x: xPercent * 20,
          y: yPercent * 10,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 100px),
                           repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 100px)`
        }} />
      </div>

      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
          {/* Left - Car Image */}
          <div ref={carRef} className="relative order-2 lg:order-1 -ml-16 lg:-ml-32">
            <div className="relative">
              {/* Glow effect behind car */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] scale-150" />
              
              <img
                src={pajeroHero}
                alt="Mitsubishi Pajero 4x4"
                className="relative z-10 w-[140%] max-w-none h-auto drop-shadow-2xl object-contain"
                style={{ 
                  filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))',
                }}
              />
            </div>

            {/* Floating specs */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-8 text-sm font-mono text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary animate-pulse" />
                4×4
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary animate-pulse" />
                3.2L DIESEL
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary animate-pulse" />
                200HP
              </span>
            </div>
          </div>

          {/* Right - Glass Panel Info */}
          <div ref={panelRef} className="order-1 lg:order-2 flex flex-col items-start lg:items-end">
            {/* Brand Name */}
            <p className="text-xs md:text-sm font-mono tracking-[0.3em] text-primary mb-2">
              THEDARKCARNIVORE
            </p>
            <h1
              ref={titleRef}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-foreground"
            >
              PAJERO
              <span className="block text-primary">4×4</span>
            </h1>

            {/* Glass Panel */}
            <div className="relative mt-8 w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-xl border border-border/50 shadow-2xl" />
              
              <div className="relative p-8 space-y-6">
                <div className="space-y-1">
                  <p className="text-xs font-mono text-muted-foreground tracking-widest">MODEL</p>
                  <p className="text-xl font-bold text-foreground">MITSUBISHI PAJERO V80</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground tracking-widest">YEAR</p>
                    <p className="text-lg font-bold text-foreground">2024</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground tracking-widest">ENGINE</p>
                    <p className="text-lg font-bold text-foreground">3.2L TURBO</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground tracking-widest">DRIVE</p>
                    <p className="text-lg font-bold text-foreground">SUPER SELECT 4WD</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground tracking-widest">TRANSMISSION</p>
                    <p className="text-lg font-bold text-foreground">5-SPEED AUTO</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Born from the Dakar Rally legacy. Built for the untamed wilderness. 
                    The Pajero isn't just an SUV—it's a declaration of freedom, a 
                    mechanical beast that transforms any terrain into an adventure.
                  </p>
                </div>

                {/* CTA Button */}
                <button className="group relative w-full py-4 bg-primary text-primary-foreground font-bold tracking-wider hover:bg-primary/90 transition-all overflow-hidden">
                  <span className="relative z-10">EXPLORE THE LEGEND</span>
                  <span className="absolute inset-0 bg-foreground translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="absolute inset-0 flex items-center justify-center text-background font-bold tracking-wider translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 delay-75">
                    EXPLORE THE LEGEND
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-mono text-muted-foreground tracking-widest">SCROLL</span>
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
