"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Hyderabad, Telangana", "India"],
    color: "#2563EB",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 XXXXX XXXXX", "+91 XXXXX XXXXX"],
    color: "#059669",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@admireorg.in", "careers@admireorg.in"],
    color: "#7C3AED",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sun: Closed"],
    color: "#D97706",
  },
];

/* ─────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────── */
export default function ContactSection() {
  const [formHovered, setFormHovered] = useState(false);
  const imageUrl =
    "https://i.guim.co.uk/img/media/b701b40253e58cfcd5da79b2dfb4357c3c909a54/0_244_7300_4383/master/7300.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=86797ba748651d2b01f7d1a203e885c3";

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, #022c22 0%, #68caaeff 100%)",
        padding: "100px 24px 110px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        {/* ── Header ─────────────────────────────────────── */}
        <div style={{ marginBottom: 56, textAlign: "left" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <MapPin size={18} style={{ color: "#6ee7b7" }} />
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6ee7b7",
                margin: 0,
              }}
            >
              Get In Touch
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.07 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.035em",
              lineHeight: 1.07,
              marginBottom: 18,
              maxWidth: 640,
            }}
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.14 }}
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              maxWidth: 560,
            }}
          >
            Ready to start your entrepreneurial journey? We&apos;d love to hear
            from you. Drop us a message or visit our office.
          </motion.p>
        </div>

        {/* ── Contact Info Cards ─────────────────────────── */}
        <div
          id="contact-info-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            marginBottom: 40,
          }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `${info.color}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <info.icon size={20} style={{ color: info.color }} />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "#1d1d1f",
                    marginBottom: 4,
                  }}
                >
                  {info.title}
                </h4>
                {info.details.map((detail, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontSize: "0.875rem",
                      color: "#6e6e73",
                      lineHeight: 1.5,
                    }}
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Image & Form Split ─────────────────────────── */}
        <div
          id="contact-split-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            alignItems: "stretch",
          }}
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              width: "100%",
              minHeight: 400,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)",
              position: "relative",
            }}
          >
            <img
              src={imageUrl}
              alt="Office or team collaboration"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                inset: 0,
              }}
            />
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onMouseEnter={() => setFormHovered(true)}
            onMouseLeave={() => setFormHovered(false)}
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "40px",
              boxShadow: formHovered
                ? "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(0,0,0,0.06)"
                : "0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
              transform: formHovered ? "translateY(-4px)" : "translateY(0)",
              transition: "box-shadow 0.35s ease, transform 0.35s ease",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.375rem",
                fontWeight: 800,
                color: "#1d1d1f",
                marginBottom: 24,
                letterSpacing: "-0.01em",
              }}
            >
              Send us a message
            </h3>

            <form
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                }}
                id="form-row-mobile"
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1d1d1f" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 12,
                      background: "var(--color-bg)",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#1d1d1f",
                      fontSize: "0.9375rem",
                      outline: "none",
                      transition: "all 0.2s",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-accent)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.15)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1d1d1f" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 12,
                      background: "var(--color-bg)",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#1d1d1f",
                      fontSize: "0.9375rem",
                      outline: "none",
                      transition: "all 0.2s",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-accent)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.15)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1d1d1f" }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: "var(--color-bg)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    color: "#1d1d1f",
                    fontSize: "0.9375rem",
                    outline: "none",
                    transition: "all 0.2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.15)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1d1d1f" }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your interest in joining Admire..."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: "var(--color-bg)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    color: "#1d1d1f",
                    fontSize: "0.9375rem",
                    outline: "none",
                    resize: "none",
                    transition: "all 0.2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.15)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  marginTop: 10,
                }}
                id="form-buttons-mobile"
              >
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: "var(--color-accent)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 12,
                    padding: "14px 20px",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Send Message
                  <Send size={16} />
                </button>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: "#25D366",
                    color: "#fff",
                    border: "none",
                    borderRadius: 12,
                    padding: "14px 20px",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(37,211,102,0.3)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </div>

        {/* ── Bottom accent line ──────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: 8,
            borderRadius: 999,
            background: "linear-gradient(90deg, #059669, #34d399)",
            boxShadow: "0 0 40px rgba(5,150,105,0.8), 0 0 15px rgba(52,211,153,0.8)",
            marginTop: 70,
            transformOrigin: "left",
            maxWidth: 500,
          }}
        />
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#25D366",
          color: "white",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </motion.a>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          #contact-split-grid {
            grid-template-columns: 1fr !important;
          }
          #form-row-mobile {
            grid-template-columns: 1fr !important;
          }
          #form-buttons-mobile {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
