import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 bg-background overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-0.5 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-widest">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
              LET'S TALK
              <span className="block text-primary">ADVENTURE</span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Whether you're a fellow off-road enthusiast, have a story to share, 
              or want to collaborate—I'd love to hear from you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground">EMAIL</p>
                  <p className="text-foreground font-medium">hello@pajero-obsession.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground">LOCATION</p>
                  <p className="text-foreground font-medium">Wherever the trail leads</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              {["Instagram", "YouTube", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-6 py-3 border border-border text-sm font-mono text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {social.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-secondary/30 p-8 md:p-12 border border-border"
          >
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-3 tracking-widest">
                YOUR NAME
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border text-foreground text-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="John Offroad"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-3 tracking-widest">
                YOUR EMAIL
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border text-foreground text-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="john@offroad.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-3 tracking-widest">
                YOUR MESSAGE
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border text-foreground text-lg focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your adventure..."
                required
              />
            </div>

            <button
              type="submit"
              className="group relative w-full py-5 mt-8 bg-primary text-primary-foreground font-bold tracking-wider overflow-hidden transition-all"
            >
              <span className="relative z-10">SEND MESSAGE</span>
              <span className="absolute inset-0 bg-foreground -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-background font-bold tracking-wider -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-75">
                SEND MESSAGE
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
