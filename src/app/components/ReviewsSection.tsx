import { motion } from "motion/react";
import { Star, Quote, MessageSquare } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    role: "YouTube Creator",
    avatar: "https://images.unsplash.com/photo-1762274673430-f6ca404104d1?w=80&h=80&fit=crop&auto=format",
    alt: "Priya Sharma profile",
    rating: 5,
    text: "Absolutely blown away by the quality! My travel vlog went from 5K views to 280K after the edit. The color grading is insane — feels like a Netflix documentary. Fast delivery, zero hassle.",
    project: "Travel Vlog Edit",
    color: "#00aaff",
  },
  {
    name: "Arjun Mehta",
    role: "Brand Manager",
    avatar: "https://images.unsplash.com/photo-1759853900057-bd622dd45028?w=80&h=80&fit=crop&auto=format",
    alt: "Arjun Mehta profile",
    rating: 5,
    text: "We needed a product reveal video in under 24 hours. Not only did Star editPro deliver on time — the motion graphics exceeded every expectation. Our client loved it. Will definitely order again.",
    project: "Product Launch Video",
    color: "#ffaa00",
  },
  {
    name: "Sneha Patel",
    role: "Wedding Couple",
    avatar: "https://images.unsplash.com/photo-1774689046306-f08a00221b6b?w=80&h=80&fit=crop&auto=format",
    alt: "Sneha Patel profile",
    rating: 5,
    text: "Our wedding highlight film made everyone cry — in the best way. The music sync was perfect and they captured every emotional moment. Worth every rupee. Truly premium quality.",
    project: "Wedding Film",
    color: "#aa66ff",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#08080f]" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 50% 100%, rgba(0,170,255,0.05) 0%, transparent 60%)`
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,170,255,0.3)] bg-[rgba(0,170,255,0.06)] mb-5">
            <MessageSquare className="w-4 h-4 text-[#00aaff]" />
            <span className="text-[#00aaff] text-sm tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Client Reviews</span>
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700 }}>
            What Clients Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#ffaa00] text-[#ffaa00]" />)}
          </div>
          <p className="text-[#8890a8]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem" }}>
            4.9/5 average rating · 100+ happy clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative rounded-2xl p-8 group"
              style={{
                background: "rgba(10, 10, 20, 0.60)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: `1px solid ${r.color}25`,
                boxShadow: `0 4px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)`,
              }}
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10" style={{ color: r.color }} />
              </div>

              <div className="flex items-center gap-1 mb-5">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="w-4 h-4 fill-[#ffaa00] text-[#ffaa00]" />
                ))}
              </div>

              <p className="text-[#c0c8d8] mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem" }}>
                "{r.text}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.alt}
                  className="w-11 h-11 rounded-full object-cover"
                  style={{ border: `2px solid ${r.color}40` }}
                />
                <div>
                  <div className="text-white font-semibold text-sm" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1rem" }}>{r.name}</div>
                  <div className="text-[#8890a8] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{r.role}</div>
                </div>
                <div className="ml-auto">
                  <span className="px-2.5 py-1 rounded-md text-xs" style={{ background: `${r.color}15`, color: r.color, fontFamily: "'JetBrains Mono', monospace" }}>
                    {r.project}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
