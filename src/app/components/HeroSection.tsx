import { motion } from "motion/react";
import { Play, ChevronDown, Zap, Award } from "lucide-react";

export function HeroSection() {
  const scrollToOrder = () => {
    document.querySelector("#order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#050508]">
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,170,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,170,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,170,255,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Floating orbs — hidden on mobile to reduce visual noise */}
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-8 w-48 h-48 md:w-72 md:h-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,170,255,0.12) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ y: [0, 25, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-4 w-56 h-56 md:w-96 md:h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,170,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Timeline decoration — bottom equaliser bars */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden opacity-25">
        <div className="flex items-end gap-0.5 px-2 pb-2 h-full">
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 3 }}
              animate={{ height: [3, Math.random() * 30 + 3, 3] }}
              transition={{
                duration: 1.5 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.05,
              }}
              className="flex-1 rounded-sm bg-[#00aaff]"
            />
          ))}
        </div>
      </div>

      {/* Main content — pt-20 clears the fixed navbar on all screen sizes */}
      <div className="relative z-10 w-full text-center px-5 sm:px-8 max-w-5xl mx-auto pt-20 pb-24">
        {/* Badge pill — compact on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8"
          style={{
            background: "rgba(0,170,255,0.08)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            border: "1px solid rgba(0,170,255,0.32)",
            boxShadow:
              "0 0 24px rgba(0,170,255,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <Zap className="w-3.5 h-3.5 text-[#00aaff] flex-shrink-0" />
          <span
            className="text-[#00aaff] text-xs sm:text-sm font-semibold tracking-wider uppercase whitespace-nowrap"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Pro Video Editor
          </span>
        </motion.div>

        {/* H1 — responsive font sizes */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white mb-5 leading-tight"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "clamp(2rem, 8vw, 5.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textShadow: "0 0 60px rgba(0,170,255,0.2)",
          }}
        >
          Professional{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00aaff 0%, #0066cc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Video Editing
          </span>
          <br />
          Services
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#8890a8] mb-8 sm:mb-10 max-w-xl mx-auto px-2"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.95rem, 3vw, 1.15rem)",
            lineHeight: 1.7,
          }}
        >
          Transform your raw footage into cinematic, viral-ready content.
          Color grading, motion graphics &amp; fast delivery.
        </motion.p>

        {/* CTA Buttons — full width on mobile, auto on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
        >
          <button
            onClick={scrollToOrder}
            className="group w-full sm:w-auto px-7 py-4 rounded-xl bg-[#00aaff] text-[#050508] font-bold text-base sm:text-lg hover:shadow-[0_0_40px_rgba(0,170,255,0.5)] active:scale-95 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em" }}
          >
            Order Now
            <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() =>
              document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group w-full sm:w-auto px-7 py-4 rounded-xl text-[#00aaff] font-semibold text-base sm:text-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
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

        {/* Stats bar — glassmorphism, stacks 1-col on xs, 3-col on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-3 mt-10 sm:mt-14 rounded-2xl overflow-hidden mx-auto"
          style={{
            maxWidth: "420px",
            background: "rgba(10, 12, 28, 0.55)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(0,170,255,0.15)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {[
            { icon: Award, label: "100+", sub: "Projects" },
            { icon: Zap, label: "24hr", sub: "Delivery" },
            { icon: Play, label: "4.9/5", sub: "Rating" },
          ].map(({ icon: Icon, label, sub }, idx) => (
            <div
              key={label}
              className="text-center py-4 px-2 sm:py-5 sm:px-4"
              style={{
                borderRight:
                  idx < 2 ? "1px solid rgba(0,170,255,0.1)" : "none",
              }}
            >
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <Icon className="w-3.5 h-3.5 text-[#00aaff]" />
                <span
                  className="text-white font-bold"
                  style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(0.9rem,3vw,1.2rem)" }}
                >
                  {label}
                </span>
              </div>
              <span
                className="text-[#8890a8] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.05em" }}
              >
                {sub}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — sits above the equaliser bars */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[#8890a8] cursor-pointer z-10"
        onClick={() =>
          document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
