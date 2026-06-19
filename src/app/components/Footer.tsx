import { Film, MessageCircle, Instagram, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#050508] border-t border-[rgba(0,170,255,0.1)]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#00aaff] flex items-center justify-center shadow-[0_0_16px_rgba(0,170,255,0.5)]">
                <Film className="w-5 h-5 text-[#050508]" />
              </div>
              <span className="text-white font-bold" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.1rem" }}>
                Star edit<span className="text-[#00aaff]">Pro</span> Studio
              </span>
            </div>
            <p className="text-[#8890a8] text-sm leading-relaxed max-w-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              Professional video editing services that transform raw footage into cinematic masterpieces. Fast, affordable, premium.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 tracking-widest uppercase text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Quick Links</h4>
            <ul className="space-y-2">
              {[["Pricing", "#pricing"], ["Portfolio", "#portfolio"], ["Why Us", "#why"], ["Reviews", "#reviews"], ["Order", "#order"]].map(([label, href]) => (
                <li key={href}>
                  <button
                    onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-[#8890a8] hover:text-[#00aaff] text-sm transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white mb-4 tracking-widest uppercase text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Connect</h4>
            <div className="flex gap-3 mb-5">
              {[
                { icon: MessageCircle, href: "https://wa.me/919999999999", color: "#25D366" },
                { icon: Instagram, href: "https://instagram.com", color: "#E1306C" },
                { icon: Mail, href: "mailto:stareditz@gmail.com", color: "#00aaff" },
              ].map(({ icon: Icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 16px ${color}50`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </a>
              ))}
            </div>
            <p className="text-[#8890a8] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Response within 1 hour
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8890a8] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            © 2024 Star editPro Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button className="text-[#8890a8] hover:text-[#00aaff] text-xs transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Privacy Policy
            </button>
            <span className="text-[rgba(255,255,255,0.1)]">·</span>
            <button className="text-[#8890a8] hover:text-[#00aaff] text-xs transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Terms of Service
            </button>
          </div>
          <p className="text-[#8890a8] text-xs flex items-center gap-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Made with <Heart className="w-3 h-3 fill-[#ff3366] text-[#ff3366]" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
