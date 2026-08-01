import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-5 pt-5 sm:px-8">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          mx-auto flex max-w-7xl items-center justify-between
          rounded-2xl border px-6 py-4
          transition-all duration-300
          lg:px-7 lg:py-4
          ${
            scrolled
              ? "border-white/10 bg-black/80 shadow-2xl shadow-black/30 backdrop-blur-xl"
              : "border-white/[0.08] bg-white/[0.04] backdrop-blur-md"
          }
        `}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="relative z-50 flex items-center text-xl font-bold tracking-tight text-white"
        >
          ALBIN
          <span className="text-violet-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                relative text-base font-medium text-zinc-400
                transition-colors duration-300

                after:absolute after:-bottom-2 after:left-0
                after:h-px after:w-0 after:bg-white
                after:transition-all after:duration-300

                hover:text-white hover:after:w-full
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="
            hidden items-center justify-center
            rounded-xl bg-white
            px-6 py-3
            text-base font-semibold text-black
            transition-all duration-300

            hover:-translate-y-0.5
            hover:bg-zinc-200

            md:inline-flex
          "
        >
          <span style={{ color: "#000000" }}>Contact me</span>
        </a>

        {/* Mobile Menu */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="
            relative z-50 flex h-11 w-11
            items-center justify-center
            rounded-xl border border-white/10
            bg-white/5 text-white
            md:hidden
          "
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="
              mx-auto mt-3 max-w-7xl overflow-hidden
              rounded-2xl border border-white/10
              bg-[#0a0a0a]/95 p-6
              shadow-2xl backdrop-blur-xl
              md:hidden
            "
          >
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="
                    border-b border-white/[0.06]
                    py-4 text-lg font-medium
                    text-zinc-300 transition-colors
                    last:border-none hover:text-white
                  "
                >
                  {link.name}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  mt-5 flex items-center justify-center
                  rounded-xl bg-white px-5 py-3.5
                  text-base font-semibold text-black
                "
              >
                <span style={{ color: "#000000" }}>Contact me</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
