import { motion } from "motion/react";
import { Play, ChevronDown, Zap, Award } from "lucide-react";

export function HeroSection() {
  const scrollToOrder = () => {
    document.querySelector("#order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#050508]">
        {/* Grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,170,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,170,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }} />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(0,170,255,0.12) 0%, transparent 70%)" }} />
        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-16 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,170,255,0.15) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ y: [0, 25, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-16 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,170,255,0.1) 0%, transparent 70%)" }}
        />
      </div>

      {/* Timeline decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-30">
        <div className="flex items-end gap-1 px-4 pb-4 h-full">
          {Array.from({ length: 80 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 4 }}
              animate={{ height: [4, Math.random() * 40 + 4, 4] }}
              transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, delay: i * 0.05 }}
              className="flex-1 rounded-sm bg-[#00aaff]"
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge pill — glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(0,170,255,0.08)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            border: "1px solid rgba(0,170,255,0.32)",
            boxShadow: "0 0 24px rgba(0,170,255,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <Zap className="w-4 h-4 text-[#00aaff]" />
          <span className="text-[#00aaff] text-sm tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Professional Video Editor
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white mb-6 leading-tight"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textShadow: "0 0 60px rgba(0,170,255,0.2)"
          }}
        >
          Professional{" "}
          <span style={{
            background: "linear-gradient(135deg, #00aaff 0%, #0066cc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Video Editing
          </span>
          <br />Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#8890a8] mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.15rem", lineHeight: 1.7 }}
        >
          Transform your raw footage into engaging, high-quality content.
          Cinematic color grading, motion graphics &amp; viral-ready edits — delivered fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToOrder}
            className="group px-8 py-4 rounded-xl bg-[#00aaff] text-[#050508] font-bold text-lg hover:shadow-[0_0_40px_rgba(0,170,255,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
            style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em" }}
          >
            Order Now
            <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-8 py-4 rounded-xl text-[#00aaff] font-semibold text-lg transition-all duration-300 flex items-center gap-2"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              letterSpacing: "0.05em",
              background: "rgba(0,170,255,0.06)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(0,170,255,0.28)",
            }}
          >
            <Play className="w-5 h-5" />
            View Portfolio
          </button>
        </motion.div>

        {/* Hero stats — glassmorphism card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-0 mt-16 rounded-2xl overflow-hidden mx-auto"
          style={{
            maxWidth: "460px",
            background: "rgba(10, 12, 28, 0.55)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(0,170,255,0.15)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {[
            { icon: Award, label: "100+ Projects", sub: "Completed" },
            { icon: Zap, label: "24hr", sub: "Fast Delivery" },
            { icon: Play, label: "4.9/5", sub: "Client Rating" },
          ].map(({ icon: Icon, label, sub }, idx) => (
            <div key={label} className="text-center flex-1 py-5 px-4" style={{
              borderRight: idx < 2 ? "1px solid rgba(0,170,255,0.1)" : "none",
            }}>
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Icon className="w-4 h-4 text-[#00aaff]" />
                <span className="text-white font-bold" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.2rem" }}>{label}</span>
              </div>
              <span className="text-[#8890a8] text-xs tracking-wide uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{sub}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 text-[#8890a8] cursor-pointer z-10"
        onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
