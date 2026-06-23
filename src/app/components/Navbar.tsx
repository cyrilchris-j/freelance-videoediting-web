import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Film, Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Order", href: "#order" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen ? "glass-nav" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => handleNav("#hero")}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#00aaff] flex items-center justify-center shadow-[0_0_18px_rgba(0,170,255,0.6)] flex-shrink-0">
              <Film className="w-4 h-4 sm:w-5 sm:h-5 text-[#050508]" />
            </div>
            <span
              className="text-white font-bold tracking-wide text-base sm:text-lg"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              Star edit<span className="text-[#00aaff]">Pro</span>
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-[#8890a8] hover:text-[#00aaff] transition-colors duration-200 text-sm tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#order")}
              className="px-5 py-2 rounded-lg bg-[#00aaff] text-[#050508] text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,170,255,0.5)] transition-all duration-300 hover:scale-105"
            >
              Order Now
            </button>
          </div>

          {/* Mobile hamburger — large tap target */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#8890a8] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{
              background: "rgba(5, 5, 10, 0.97)",
              backdropFilter: "blur(32px) saturate(180%)",
              WebkitBackdropFilter: "blur(32px) saturate(180%)",
              paddingTop: "64px", // height of navbar
            }}
          >
            {/* Nav links — large touch targets */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-1">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={() => handleNav(l.href)}
                  className="group flex items-center justify-between w-full py-4 border-b text-left transition-colors duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.05)" }}
                >
                  <span
                    className="text-[#c0c8d8] group-hover:text-[#00aaff] text-2xl font-bold transition-colors"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {l.label}
                  </span>
                  <span className="text-[#00aaff] opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                    →
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-8 pb-10 pt-6"
            >
              <button
                onClick={() => handleNav("#order")}
                className="w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #00aaff, #0066cc)",
                  color: "#050508",
                  fontFamily: "'Rajdhani', sans-serif",
                  letterSpacing: "0.06em",
                  boxShadow: "0 0 30px rgba(0,170,255,0.35)",
                }}
              >
                <Zap className="w-5 h-5" />
                Order Now
              </button>
              <p
                className="text-center text-[#8890a8] text-xs mt-3"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Response within 1 hour
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
