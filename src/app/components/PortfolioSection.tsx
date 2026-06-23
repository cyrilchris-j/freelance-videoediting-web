import { motion } from "motion/react";
import { Play, Eye, Clapperboard } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Brand Launch Film",
    category: "Commercial",
    views: "2.4M",
    thumb: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?w=600&h=400&fit=crop&auto=format",
    alt: "Video editing workstation",
    tag: "Cinematic",
  },
  {
    title: "Wedding Highlight",
    category: "Wedding Film",
    views: "180K",
    thumb: "https://images.unsplash.com/photo-1490810194309-344b3661ba39?w=600&h=400&fit=crop&auto=format",
    alt: "Post production edit suite",
    tag: "Emotional",
  },
  {
    title: "Vlog Series",
    category: "YouTube",
    views: "520K",
    thumb: "https://images.unsplash.com/photo-1614963326505-843868e1d83a?w=600&h=400&fit=crop&auto=format",
    alt: "Music production studio",
    tag: "Viral",
  },
  {
    title: "Product Reveal",
    category: "Advertisement",
    views: "1.1M",
    thumb: "https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?w=600&h=400&fit=crop&auto=format",
    alt: "Video editor at workstation",
    tag: "Dynamic",
  },
  {
    title: "Short Film",
    category: "Narrative",
    views: "89K",
    thumb: "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?w=600&h=400&fit=crop&auto=format",
    alt: "Laptop editing workspace",
    tag: "Cinematic",
  },
  {
    title: "Travel Reel",
    category: "Social Media",
    views: "3.2M",
    thumb: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?w=600&h=400&fit=crop&auto=format",
    alt: "Film production monitor",
    tag: "Trending",
  },
];

const tagColors: Record<string, string> = {
  Cinematic: "#00aaff",
  Emotional: "#ff6699",
  Viral: "#00ffaa",
  Dynamic: "#ffaa00",
  Trending: "#aa66ff",
};

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#08080f]" />
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(0,170,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,170,255,0.025) 1px, transparent 1px)`,
        backgroundSize: "80px 80px"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,170,255,0.3)] bg-[rgba(0,170,255,0.06)] mb-5">
            <Clapperboard className="w-4 h-4 text-[#00aaff]" />
            <span className="text-[#00aaff] text-sm tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Portfolio</span>
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700 }}>
            Recent Work
          </h2>
          <p className="text-[#8890a8] max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            A selection of projects that showcase cinematic quality, creativity, and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const tagColor = tagColors[p.tag] || "#00aaff";
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ border: "1px solid rgba(0,170,255,0.1)" }}
              >
                <div className="relative overflow-hidden h-56 bg-[#111120]">
                  <ImageWithFallback
                    src={p.thumb}
                    alt={p.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
                  {/* Hover overlay — glassmorphism */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
                    style={{
                      background: "rgba(0,170,255,0.08)",
                      backdropFilter: "blur(4px)",
                      WebkitBackdropFilter: "blur(4px)",
                    }}>
                    <div className="w-16 h-16 rounded-full bg-[#00aaff] flex items-center justify-center shadow-[0_0_30px_rgba(0,170,255,0.6)] scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-7 h-7 text-[#050508] ml-1" />
                    </div>
                  </div>
                  {/* Tag — glass pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                      style={{
                        background: `rgba(0,0,0,0.35)`,
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        color: tagColor,
                        border: `1px solid ${tagColor}50`,
                        fontFamily: "'JetBrains Mono', monospace"
                      }}>
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5"
                  style={{
                    background: "rgba(8, 8, 18, 0.72)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    borderTop: "1px solid rgba(0,170,255,0.08)",
                  }}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white mb-1" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.15rem", fontWeight: 700 }}>{p.title}</h3>
                      <span className="text-[#8890a8] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{p.category}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#8890a8]">
                      <Eye className="w-4 h-4" />
                      <span className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{p.views}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
