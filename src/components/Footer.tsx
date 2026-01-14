export const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <a href="#hero" className="text-3xl font-bold tracking-tighter">
              PAJERO<span className="text-primary">.</span>
            </a>
            <p className="mt-2 text-background/60 text-sm">
              A love letter to off-road machines.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {["Home", "Story", "Machines", "Legacy", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-background/60 hover:text-primary transition-colors"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-sm text-background/60">
              © 2024 Pajero Obsession.
            </p>
            <p className="text-xs text-background/40 mt-1">
              Built with passion for adventure.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-xs text-background/40 font-mono tracking-widest">
            FREEDOM ISN'T GIVEN • IT'S DRIVEN
          </p>
        </div>
      </div>
    </footer>
  );
};
