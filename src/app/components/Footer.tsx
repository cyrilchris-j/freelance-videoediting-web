import { Film, MessageCircle, Instagram, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#050508] border-t border-[rgba(0,170,255,0.1)]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 lg:pr-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00aaff] to-[#0066ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,170,255,0.4)]">
                <Film className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.4rem" }}>
                Star edit<span className="text-[#00aaff]">Pro</span> Studio
              </span>
            </div>
            <p className="text-[#8890a8] text-sm leading-relaxed max-w-sm mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Elevating brands through premium cinematic video editing. We transform raw footage into highly engaging masterpieces designed to captivate your audience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6 font-bold tracking-widest uppercase text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Navigation</h4>
            <ul className="space-y-3">
              {[["Pricing Packages", "#pricing"], ["Our Portfolio", "#portfolio"], ["Why Choose Us", "#why"], ["Client Reviews", "#reviews"]].map(([label, href]) => (
                <li key={href}>
                  <button
                    onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-[#8890a8] hover:text-white text-sm transition-all duration-300 hover:translate-x-1 flex items-center gap-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00aaff] opacity-0 transition-opacity" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white mb-6 font-bold tracking-widest uppercase text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Get in Touch</h4>
            <div className="flex gap-4 mb-6">
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
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`,
                    border: `1px solid rgba(255,255,255,0.1)`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 4px 20px ${color}30`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[rgba(0,170,255,0.08)] border border-[rgba(0,170,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00aaff] animate-pulse" />
              <p className="text-[#00aaff] text-xs font-semibold tracking-wide" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Available for projects
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[#8890a8] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            © 2026 Star editPro Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <button className="text-[#8890a8] hover:text-white text-xs transition-colors duration-300" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Privacy Policy
            </button>
            <button className="text-[#8890a8] hover:text-white text-xs transition-colors duration-300" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
