import { motion } from "motion/react";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Basic Edit",
    price: "₹50",
    badge: null,
    badgeIcon: null,
    color: "#8890a8",
    glowColor: "rgba(136,144,168,0.2)",
    features: [
      "Simple cuts and trims",
      "Basic transitions",
      "24-hour delivery",
      "1 revision",
    ],
    cta: "Order Basic",
  },
  {
    name: "Medium Edit",
    price: "₹100",
    badge: "Most Popular",
    badgeIcon: Star,
    color: "#00aaff",
    glowColor: "rgba(0,170,255,0.25)",
    features: [
      "Advanced cuts",
      "Smooth transitions",
      "Text animations",
      "Background music",
      "24-hour delivery",
      "3 revisions",
    ],
    cta: "Order Medium",
  },
  {
    name: "Super Cool Edit",
    price: "₹150",
    badge: "Premium",
    badgeIcon: Crown,
    color: "#ffaa00",
    glowColor: "rgba(255,170,0,0.2)",
    features: [
      "Cinematic effects",
      "Motion graphics",
      "Color grading",
      "Sound design",
      "Viral social media style",
      "Priority delivery",
      "Unlimited revisions",
    ],
    cta: "Order Premium",
  },
];

export function PricingSection() {
  const scrollToOrder = () => {
    document.querySelector("#order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(0,170,255,0.06) 0%, transparent 60%)`
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,170,255,0.3)] bg-[rgba(0,170,255,0.06)] mb-5">
            <Zap className="w-4 h-4 text-[#00aaff]" />
            <span className="text-[#00aaff] text-sm tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Pricing Plans
            </span>
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700 }}>
            Choose Your Edit Package
          </h2>
          <p className="text-[#8890a8] max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Professional video editing at affordable prices. All packages include revision rounds and fast delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, i) => {
            const BadgeIcon = plan.badgeIcon;
            const isPopular = plan.badge === "Most Popular";
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative rounded-2xl p-px overflow-hidden cursor-pointer group"
                style={{
                  background: isPopular
                    ? `linear-gradient(135deg, ${plan.color}50, ${plan.color}20, transparent)`
                    : `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))`
                }}
              >
                {isPopular && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `0 0 60px ${plan.glowColor}` }} />
                )}
                <div className="relative rounded-2xl pt-8 sm:pt-8 px-6 sm:px-8 pb-6 sm:pb-8 h-full flex flex-col"
                  style={{
                    background: isPopular
                      ? "rgba(8, 16, 34, 0.75)"
                      : "rgba(12, 12, 22, 0.65)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    boxShadow: isPopular
                      ? `0 8px 48px rgba(0,170,255,0.12), inset 0 1px 0 rgba(0,170,255,0.12)`
                      : `0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)`,
                  }}>

                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                        style={{
                          background: plan.color,
                          color: "#050508",
                          fontFamily: "'JetBrains Mono', monospace",
                          boxShadow: `0 0 20px ${plan.glowColor}`
                        }}>
                        {BadgeIcon && <BadgeIcon className="w-3 h-3" />}
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-white mb-1" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.4rem", fontWeight: 700 }}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-3">
                      <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "3rem", fontWeight: 700, color: plan.color, lineHeight: 1 }}>
                        {plan.price}
                      </span>
                      <span className="text-[#8890a8] text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>/project</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}50` }}>
                          <Check className="w-3 h-3" style={{ color: plan.color }} />
                        </div>
                        <span className="text-[#8890a8] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToOrder}
                    className="w-full py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 hover:scale-105"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: "1rem",
                      letterSpacing: "0.08em",
                      background: isPopular ? plan.color : "transparent",
                      color: isPopular ? "#050508" : plan.color,
                      border: `1.5px solid ${plan.color}`,
                      boxShadow: isPopular ? `0 0 25px ${plan.glowColor}` : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isPopular) {
                        (e.target as HTMLButtonElement).style.background = `${plan.color}15`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isPopular) {
                        (e.target as HTMLButtonElement).style.background = "transparent";
                      }
                    }}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
