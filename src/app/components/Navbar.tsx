import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Film, Menu, X } from "lucide-react";

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

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav("#hero")}>
            <div className="w-9 h-9 rounded-lg bg-[#00aaff] flex items-center justify-center shadow-[0_0_18px_rgba(0,170,255,0.6)]">
              <Film className="w-5 h-5 text-[#050508]" />
            </div>
            <div>
              <span className="text-white font-bold tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.1rem" }}>
                Star edit<span className="text-[#00aaff]">Pro</span> Studio
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
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

          <button className="md:hidden text-[#8890a8] hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 p-6 flex flex-col gap-4 md:hidden"
            style={{
              background: "rgba(8, 8, 18, 0.85)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              borderBottom: "1px solid rgba(0,170,255,0.15)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
            }}
          >
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left text-[#e8eaf0] hover:text-[#00aaff] py-2 border-b border-[rgba(255,255,255,0.05)] transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#order")}
              className="mt-2 px-5 py-3 rounded-lg bg-[#00aaff] text-[#050508] font-semibold text-center"
            >
              Order Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
