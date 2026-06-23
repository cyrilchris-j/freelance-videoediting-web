import { motion } from "motion/react";
import { MessageCircle, Instagram, Mail, PhoneCall } from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    sub: "Chat directly",
    color: "#25D366",
    glowColor: "rgba(37,211,102,0.3)",
    href: "https://wa.me/919999999999",
    bg: "rgba(37,211,102,0.1)",
    border: "rgba(37,211,102,0.25)",
  },
  {
    icon: Instagram,
    label: "Instagram",
    sub: "@stareditzpro",
    color: "#E1306C",
    glowColor: "rgba(225,48,108,0.3)",
    href: "https://instagram.com",
    bg: "rgba(225,48,108,0.1)",
    border: "rgba(225,48,108,0.25)",
  },
  {
    icon: Mail,
    label: "Email Us",
    sub: "stareditz@gmail.com",
    color: "#00aaff",
    glowColor: "rgba(0,170,255,0.3)",
    href: "mailto:stareditz@gmail.com",
    bg: "rgba(0,170,255,0.1)",
    border: "rgba(0,170,255,0.25)",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#08080f]" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,170,255,0.04) 0%, transparent 70%)`
      }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,170,255,0.3)] bg-[rgba(0,170,255,0.06)] mb-5">
            <PhoneCall className="w-4 h-4 text-[#00aaff]" />
            <span className="text-[#00aaff] text-sm tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Get In Touch</span>
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700 }}>
            Let's Talk About Your Project
          </h2>
          <p className="text-[#8890a8] max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Have a question before ordering? Reach out directly — we respond within 1 hour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="flex flex-col items-center gap-4 p-8 rounded-2xl text-center group cursor-pointer no-underline"
                style={{
                  background: "rgba(10, 10, 20, 0.58)",
                  backdropFilter: "blur(22px) saturate(180%)",
                  WebkitBackdropFilter: "blur(22px) saturate(180%)",
                  border: `1px solid ${c.border}`,
                  boxShadow: "0 4px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
                  textDecoration: "none",
                }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    background: c.bg,
                    border: `1.5px solid ${c.border}`,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 25px ${c.glowColor}`)}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  <Icon className="w-8 h-8" style={{ color: c.color }} />
                </div>
                <div>
                  <div className="text-white font-bold mb-1" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.2rem" }}>{c.label}</div>
                  <div className="text-[#8890a8] text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{c.sub}</div>
                </div>
                <div className="mt-1 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                  style={{
                    background: c.bg,
                    color: c.color,
                    border: `1px solid ${c.border}`,
                    fontFamily: "'Rajdhani', sans-serif",
                    letterSpacing: "0.05em",
                  }}>
                  Connect →
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
