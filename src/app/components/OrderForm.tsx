import { useState } from "react";
import { motion } from "motion/react";
import { Send, Upload, CheckCircle, ShoppingCart } from "lucide-react";

const packageOptions = ["Basic Edit — ₹50", "Medium Edit — ₹100", "Super Cool Edit — ₹150"];
const videoTypes = ["YouTube Vlog", "Wedding/Events", "Product/Commercial", "Travel Reel", "Short Film", "Social Media Reel", "Other"];

export function OrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", email: "", videoType: "", pkg: "", notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFileName(e.target.files[0].name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputBase = {
    background: "rgba(8, 8, 20, 0.65)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(0,170,255,0.15)",
    borderRadius: "0.75rem",
    color: "#e8eaf0",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    padding: "0.875rem 1rem",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section id="order" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,170,255,0.06) 0%, transparent 60%)`
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,170,255,0.3)] to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,170,255,0.3)] bg-[rgba(0,170,255,0.06)] mb-5">
            <ShoppingCart className="w-4 h-4 text-[#00aaff]" />
            <span className="text-[#00aaff] text-sm tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Place Your Order</span>
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700 }}>
            Start Your Project
          </h2>
          <p className="text-[#8890a8]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Fill in the details and we'll get back to you within 2 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-5 sm:p-8"
          style={{
            background: "rgba(10, 10, 24, 0.70)",
            backdropFilter: "blur(28px) saturate(200%)",
            WebkitBackdropFilter: "blur(28px) saturate(200%)",
            border: "1px solid rgba(0,170,255,0.18)",
            boxShadow: "0 8px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(0,170,255,0.08), 0 0 60px rgba(0,170,255,0.04)"
          }}
        >
          {submitted ? (
            <div className="text-center py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-full bg-[rgba(0,170,255,0.15)] flex items-center justify-center mx-auto mb-6"
                style={{ border: "2px solid #00aaff", boxShadow: "0 0 30px rgba(0,170,255,0.3)" }}
              >
                <CheckCircle className="w-10 h-10 text-[#00aaff]" />
              </motion.div>
              <h3 className="text-white mb-3" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.8rem", fontWeight: 700 }}>
                Order Received!
              </h3>
              <p className="text-[#8890a8]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Thank you! We'll confirm your order and start editing within 2 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-3 rounded-xl border border-[rgba(0,170,255,0.3)] text-[#00aaff] text-sm hover:bg-[rgba(0,170,255,0.08)] transition-colors"
              >
                Place Another Order
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#8890a8] text-sm mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Your Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Priya Sharma"
                    required
                    style={inputBase}
                    onFocus={e => { e.target.style.borderColor = "#00aaff"; e.target.style.boxShadow = "0 0 15px rgba(0,170,255,0.15)"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(0,170,255,0.15)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label className="block text-[#8890a8] text-sm mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    style={inputBase}
                    onFocus={e => { e.target.style.borderColor = "#00aaff"; e.target.style.boxShadow = "0 0 15px rgba(0,170,255,0.15)"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(0,170,255,0.15)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#8890a8] text-sm mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Video Type *
                </label>
                <select
                  name="videoType"
                  value={form.videoType}
                  onChange={handleChange}
                  required
                  style={{ ...inputBase, cursor: "pointer" }}
                  onFocus={e => { e.target.style.borderColor = "#00aaff"; e.target.style.boxShadow = "0 0 15px rgba(0,170,255,0.15)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(0,170,255,0.15)"; e.target.style.boxShadow = "none"; }}
                >
                  <option value="" style={{ background: "#111120" }}>Select video type…</option>
                  {videoTypes.map(v => <option key={v} value={v} style={{ background: "#111120" }}>{v}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[#8890a8] text-sm mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Select Package *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  {packageOptions.map((p) => (
                    <label key={p} className="cursor-pointer">
                      <input
                        type="radio"
                        name="pkg"
                        value={p}
                        checked={form.pkg === p}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="px-3 py-3 rounded-xl text-center text-sm transition-all duration-200"
                        style={{
                          background: form.pkg === p ? "rgba(0,170,255,0.15)" : "#111120",
                          border: form.pkg === p ? "1.5px solid #00aaff" : "1px solid rgba(0,170,255,0.15)",
                          color: form.pkg === p ? "#00aaff" : "#8890a8",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.75rem",
                          boxShadow: form.pkg === p ? "0 0 15px rgba(0,170,255,0.2)" : "none",
                        }}>
                        {p}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#8890a8] text-sm mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Upload File / Link
                </label>
                <label className="cursor-pointer block">
                  <div className="flex items-center gap-3 px-4 py-4 rounded-xl"
                    style={{
                      background: "#111120",
                      border: "1px dashed rgba(0,170,255,0.25)",
                      transition: "border-color 0.2s"
                    }}>
                    <Upload className="w-5 h-5 text-[#00aaff] flex-shrink-0" />
                    <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: fileName ? "#e8eaf0" : "#8890a8" }}>
                      {fileName || "Drop your file here or click to browse"}
                    </span>
                  </div>
                  <input type="file" className="hidden" onChange={handleFile} accept="video/*,image/*,.zip,.rar" />
                </label>
              </div>

              <div>
                <label className="block text-[#8890a8] text-sm mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Describe your vision, music preferences, style references, etc."
                  rows={4}
                  style={{ ...inputBase, resize: "vertical" }}
                  onFocus={e => { e.target.style.borderColor = "#00aaff"; e.target.style.boxShadow = "0 0 15px rgba(0,170,255,0.15)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(0,170,255,0.15)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,170,255,0.4)]"
                style={{
                  background: "linear-gradient(135deg, #00aaff, #0066cc)",
                  color: "#050508",
                  fontFamily: "'Rajdhani', sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                <Send className="w-5 h-5" />
                Submit Order
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
