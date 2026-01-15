import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const StorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      textRefs.current.forEach((ref) => {
        if (ref) {
          gsap.fromTo(
            ref,
            {
              y: 60,
              opacity: 0,
            },
            {
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
      id="story"
      className="relative min-h-screen py-16 sm:py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-1/2 sm:w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <div
            ref={(el) => (textRefs.current[0] = el)}
            className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16"
          >
            <div className="w-8 sm:w-16 h-0.5 bg-primary" />
            <span className="text-xs sm:text-sm font-mono text-primary tracking-widest">THE STORY</span>
          </div>

          {/* Main Quote */}
          <div ref={(el) => (textRefs.current[1] = el)} className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-none mb-6 sm:mb-8">
              IT'S NOT ABOUT
              <span className="block text-primary">DESTINATION</span>
            </h2>
            <p className="text-lg sm:text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              It's about the mud on your tires, the dust on your windshield, and the 
              stories you collect along the way.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <div ref={(el) => (textRefs.current[2] = el)} className="space-y-4 sm:space-y-8">
              <div className="w-12 sm:w-20 h-1 bg-primary" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Why Off-Road?
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                There's something primal about taking a machine beyond the pavement. 
                Where the road ends, the adventure begins. Every rock, every river 
                crossing, every mountain trail—they're not obstacles, they're invitations.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                The Pajero taught me that cars aren't just transportation. They're 
                companions. They feel alive when you push them.
              </p>
            </div>

            <div ref={(el) => (textRefs.current[3] = el)} className="space-y-4 sm:space-y-8">
              <div className="w-12 sm:w-20 h-1 bg-foreground" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                The Pajero Spirit
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                12 Dakar Rally victories. Legendary Super Select 4WD. A chassis built 
                to survive the apocalypse. The Pajero isn't just an SUV—it's a statement.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                When you're behind the wheel, you understand why they called it 
                "Montero" in some markets—the mountain hunter.
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <div
            ref={(el) => (textRefs.current[4] = el)}
            className="mt-16 sm:mt-24 md:mt-32 relative"
          >
            <div className="absolute -left-4 sm:-left-8 top-0 text-6xl sm:text-9xl font-bold text-primary/10">"</div>
            <blockquote className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight pl-4 sm:pl-8 border-l-2 sm:border-l-4 border-primary">
              Freedom isn't given.<br />
              <span className="text-primary">It's driven.</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
