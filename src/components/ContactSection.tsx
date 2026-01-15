import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { y: 60, opacity: 0 },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-16 sm:py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute left-0 bottom-0 w-2/3 sm:w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 sm:w-16 h-0.5 bg-primary" />
              <span className="text-xs sm:text-sm font-mono text-primary tracking-widest">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
              LET'S TALK
              <span className="block text-primary">ADVENTURE</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Whether you're a fellow off-road enthusiast, have a story to share, 
              or want to collaborate—I'd love to hear from you.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-8">
              <a 
                href="mailto:astitwasi@gmail.com"
                className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-sm font-mono text-muted-foreground">EMAIL</p>
                  <p className="text-sm sm:text-base text-foreground font-medium group-hover:text-primary transition-colors">astitwasi@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/thedarkcarnivore_?igsh=MWgydjlqeXlocnBvMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-sm font-mono text-muted-foreground">INSTAGRAM</p>
                  <p className="text-sm sm:text-base text-foreground font-medium group-hover:text-primary transition-colors">@thedarkcarnivore_</p>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-border flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-sm font-mono text-muted-foreground">LOCATION</p>
                  <p className="text-sm sm:text-base text-foreground font-medium">Wherever the trail leads</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-8">
              <a
                href="https://www.instagram.com/thedarkcarnivore_?igsh=MWgydjlqeXlocnBvMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-3 border border-border text-xs sm:text-sm font-mono text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                INSTAGRAM
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 bg-secondary/30 p-6 sm:p-8 md:p-12 border border-border"
          >
            <div>
              <label className="block text-[10px] sm:text-sm font-mono text-muted-foreground mb-2 sm:mb-3 tracking-widest">
                YOUR NAME
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-0 border-b-2 border-border text-foreground text-base sm:text-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="John Offroad"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-sm font-mono text-muted-foreground mb-2 sm:mb-3 tracking-widest">
                YOUR EMAIL
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-0 border-b-2 border-border text-foreground text-base sm:text-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="john@offroad.com"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-sm font-mono text-muted-foreground mb-2 sm:mb-3 tracking-widest">
                YOUR MESSAGE
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-0 py-3 sm:py-4 bg-transparent border-0 border-b-2 border-border text-foreground text-base sm:text-lg focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your adventure..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full py-4 sm:py-5 mt-4 sm:mt-8 bg-primary text-primary-foreground font-bold tracking-wider text-sm sm:text-base overflow-hidden transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
              <span className="absolute inset-0 bg-foreground -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-background font-bold tracking-wider -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-75">
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
