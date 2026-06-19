import { motion } from "motion/react";
import { Zap, Award, DollarSign, RefreshCw } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Get your edited video back within 24 hours — no long wait times, no excuses.",
    color: "#00aaff",
    stat: "24hr",
    statLabel: "Avg Turnaround",
  },
  {
    icon: Award,
    title: "Professional Quality",
    desc: "Cinema-grade color grading, motion graphics, and sound design in every project.",
    color: "#ffaa00",
    stat: "4K",
    statLabel: "Max Resolution",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Premium results starting at just ₹50. Transparent pricing, no hidden fees.",
    color: "#00ffaa",
    stat: "₹50",
    statLabel: "Starting Price",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Revisions",
    desc: "Not satisfied? Keep requesting changes until your video is exactly what you envisioned.",
    color: "#aa66ff",
    stat: "∞",
    statLabel: "Revisions",
  },
];

export function WhySection() {
  return (
    <section id="why" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,170,255,0.3)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,170,255,0.3)] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,170,255,0.3)] bg-[rgba(0,170,255,0.06)] mb-5">
            <Award className="w-4 h-4 text-[#00aaff]" />
            <span className="text-[#00aaff] text-sm tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Why Choose Me</span>
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700 }}>
            The Star editPro Difference
          </h2>
          <p className="text-[#8890a8] max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            More than 100 clients have trusted us to bring their vision to life. Here's why.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl p-8 text-center overflow-hidden"
                style={{
                  background: "rgba(10, 10, 20, 0.60)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${r.color}10 0%, transparent 70%)` }} />

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${r.color}15`, border: `1px solid ${r.color}30` }}>
                    <Icon className="w-8 h-8" style={{ color: r.color }} />
                  </div>

                  <div className="mb-2" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "2rem", fontWeight: 700, color: r.color, lineHeight: 1 }}>
                    {r.stat}
                  </div>
                  <div className="text-[#8890a8] text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {r.statLabel}
                  </div>

                  <h3 className="text-white mb-3" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.2rem", fontWeight: 700 }}>
                    {r.title}
                  </h3>
                  <p className="text-[#8890a8] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
