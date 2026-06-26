"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Send,
  Heart,
  Globe,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Programs", href: "#programs" },
    { label: "Training Journey", href: "#journey" },
    { label: "Leadership Team", href: "#leadership" },
    { label: "Gallery", href: "#gallery" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQ", href: "#faq" },
    { label: "Career Opportunities", href: "#programs" },
    { label: "Success Stories", href: "#stories" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Globe, label: "Website", href: "#" },
  { icon: ExternalLink, label: "LinkedIn", href: "#" },
  { icon: Send, label: "Telegram", href: "#" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%)",
        color: "var(--color-text-on-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(52, 90, 170, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Footer Content */}
      <div className="section-container" style={{ paddingTop: "3.5rem", paddingBottom: "2rem" }}>
        <div className="flex flex-col gap-10">
          {/* Links Columns - responsive grid */}
          <div
            className="grid gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            }}
          >
            {/* Company Links */}
            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "white",
                }}
              >
                Company
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm transition-colors"
                      style={{
                        color: "var(--color-text-lighter)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "var(--font-body)",
                        padding: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--color-accent-light)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--color-text-lighter)";
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "white",
                }}
              >
                Support
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm transition-colors"
                      style={{
                        color: "var(--color-text-lighter)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "var(--font-body)",
                        padding: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--color-accent-light)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--color-text-lighter)";
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "white",
                }}
              >
                Legal
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: "var(--color-text-lighter)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--color-accent-light)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--color-text-lighter)";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "white",
                }}
              >
                Newsletter
              </h4>
              <p
                className="mb-4"
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-lighter)",
                  lineHeight: 1.6,
                }}
              >
                Subscribe for updates on training programs and opportunities.
              </p>
              <form
                className="flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm"
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "white",
                    outline: "none",
                    fontFamily: "var(--font-body)",
                    minWidth: 0,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: 44,
                    height: 44,
                    background:
                      "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </motion.button>
              </form>
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

          {/* Brand Column (Now at the bottom) */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex flex-col max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: 44,
                    height: 44,
                    background:
                      "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)",
                  }}
                >
                  <Sparkles size={22} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <span
                    className="font-bold text-xl"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "white",
                    }}
                  >
                    Admire
                  </span>
                  <span
                    className="block text-xs uppercase tracking-wider"
                    style={{
                      color: "var(--color-text-lighter)",
                      fontFamily: "var(--font-heading)",
                      marginTop: -3,
                    }}
                  >
                    Global Organisation
                  </span>
                </div>
              </div>
              <p
                className="mb-0"
                style={{
                  color: "var(--color-text-lighter)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                }}
              >
                One of India&apos;s leading face-to-face marketing companies,
                developing future entrepreneurs and business leaders through
                world-class training programs.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Contact Info */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3" style={{ color: "var(--color-text-lighter)" }}>
                  <MapPin size={16} style={{ color: "var(--color-accent-light)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.875rem" }}>Hyderabad, Telangana, India</span>
                </div>
                <div className="flex items-center gap-3" style={{ color: "var(--color-text-lighter)" }}>
                  <Phone size={16} style={{ color: "var(--color-accent-light)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.875rem" }}>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center gap-3" style={{ color: "var(--color-text-lighter)" }}>
                  <Mail size={16} style={{ color: "var(--color-accent-light)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.875rem" }}>info@admireorg.in</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center rounded-xl transition-all"
                    style={{
                      width: 40,
                      height: 40,
                      background: "rgba(255, 255, 255, 0.06)",
                      color: "var(--color-text-lighter)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--color-accent)";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.borderColor = "var(--color-accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                      e.currentTarget.style.color = "var(--color-text-lighter)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          className="section-container flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-text-lighter)",
            }}
          >
            © {new Date().getFullYear()} Admire Global Organisation. All rights
            reserved.
          </p>
          <p
            className="flex items-center gap-1"
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-text-lighter)",
            }}
          >
            Made with{" "}
            <Heart
              size={14}
              fill="var(--color-error)"
              color="var(--color-error)"
            />{" "}
            in India
          </p>
        </div>
      </div>
    </footer>
  );
}
