// Footer uses standard HTML elements

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 lg:py-24 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <h2 className="text-display-sm text-text-primary mb-4">VAYRO</h2>
            <p className="text-text-secondary text-sm">Digital Studio</p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-text-primary text-sm tracking-wider uppercase opacity-70 hover:opacity-100 transition-opacity duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social / Contact */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/vayro.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary text-sm tracking-wider uppercase opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                Instagram
              </a>
              <a
                href="mailto:hello@vayro.studio"
                className="text-text-primary text-sm tracking-wider uppercase opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 lg:mt-24 pt-8 border-t border-border-subtle flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs">
            © {new Date().getFullYear()} VAYRO Studio
          </p>
          <p className="text-text-secondary text-xs">
            Digital Experiences & Web Design
          </p>
        </div>
      </div>
    </footer>
  );
}
