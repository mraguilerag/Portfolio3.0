import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a href="#top" className="group flex items-center">
          <span className="bg-gradient-to-r from-white via-white to-slate-200 bg-clip-text font-display text-2xl font-bold tracking-tight text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-transform duration-300 group-hover:scale-105">
            M/A
          </span>
        </a>

        <div className="hidden items-center gap-9 md:ml-auto md:mr-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-semibold uppercase tracking-wide text-ink transition-colors hover:text-violet-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-bg/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-semibold uppercase tracking-wide text-ink hover:bg-white/5 hover:text-violet-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
