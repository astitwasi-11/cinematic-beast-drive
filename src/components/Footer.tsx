export const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 items-start sm:items-center">
          {/* Logo */}
          <div className="text-center sm:text-left">
            <a href="#hero" className="text-2xl sm:text-3xl font-bold tracking-tighter">
              PAJERO<span className="text-primary">.</span>
            </a>
            <p className="mt-2 text-background/60 text-xs sm:text-sm">
              A love letter to off-road machines.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {["Home", "Story", "Machines", "Legacy", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs sm:text-sm text-background/60 hover:text-primary transition-colors"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Social & Copyright */}
          <div className="text-center sm:text-right space-y-2 sm:space-y-3 sm:col-span-2 md:col-span-1">
            <a
              href="https://www.instagram.com/thedarkcarnivore_?igsh=MWgydjlqeXlocnBvMg=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-background/60 hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @thedarkcarnivore_
            </a>
            <p className="text-xs sm:text-sm text-background/60">
              © 2024 Pajero Obsession.
            </p>
            <p className="text-[10px] sm:text-xs text-background/40">
              Built with passion for adventure.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-background/10">
          <p className="text-center text-[10px] sm:text-xs text-background/40 font-mono tracking-widest">
            FREEDOM ISN'T GIVEN • IT'S DRIVEN
          </p>
        </div>
      </div>
    </footer>
  );
};
