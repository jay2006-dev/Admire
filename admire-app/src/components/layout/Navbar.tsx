"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#journey", label: "Journey" },
  { href: "#leadership", label: "Leadership" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleSectionObserver = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      );

      sections.forEach((section) => {
        if (section) observer.observe(section);
      });

      return () => observer.disconnect();
    };

    window.addEventListener("scroll", handleScroll);
    const cleanup = handleSectionObserver();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanup?.();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className={`fixed left-1/2 z-50 transition-all duration-300 w-[94%] max-w-7xl rounded-full backdrop-blur-[24px] ${isScrolled
          ? "bg-white/10 border border-white/20 shadow-lg"
          : "bg-white/5 border border-white/10 shadow-sm"
          }`}
        style={{
          top: isScrolled ? "12px" : "20px",
        }}
      >
        <nav className="px-6 lg:px-8 xl:px-12">
          <div
            className="flex items-center justify-between"
            style={{ height: isScrolled ? "64px" : "76px", transition: "height 0.3s ease" }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group pl-4 xl:pl-6">
              <img
                src="https://admireorg.in/wp-content/uploads/2023/04/cropped-cropped-IMG-20220321-WA0013.jpg"
                alt="Admire Global Organisation Logo"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "var(--shadow-accent)",
                }}
              />
              <div className="flex flex-col py-4">
                <span
                  className="font-bold text-base lg:text-lg tracking-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-primary)",
                  }}
                >
                  Admire
                </span>
                <span
                  className="hidden sm:block lg:hidden xl:block text-[10px] xl:text-xs tracking-wider uppercase"
                  style={{
                    color: "var(--color-text-light)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 500,
                    marginTop: -4,
                    letterSpacing: "0.1em",
                  }}
                >
                  Global Organisation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-2.5 xl:px-4 py-2 text-xs xl:text-sm font-medium transition-colors rounded-lg"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color:
                      activeSection === link.href.slice(1)
                        ? "var(--color-accent)"
                        : "var(--color-text-light)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-accent)";
                    e.currentTarget.style.background = "var(--color-accent-glow)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      activeSection === link.href.slice(1)
                        ? "var(--color-accent)"
                        : "var(--color-text-light)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                      style={{
                        width: "60%",
                        background:
                          "linear-gradient(90deg, var(--color-accent), var(--color-accent-light))",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <button
                className="btn-primary px-3.5 py-2 text-xs xl:px-5 xl:py-2.5 xl:text-sm"
                onClick={() => handleNavClick("#contact")}
              >
                <span className="flex items-center gap-2">
                  Join Our Team
                  <ChevronRight size={16} />
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden flex items-center justify-center rounded-xl transition-all"
              style={{
                width: 44,
                height: 44,
                background: isMobileOpen
                  ? "var(--color-accent)"
                  : "var(--color-accent-glow)",
                color: isMobileOpen ? "white" : "var(--color-accent)",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(4px)" }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] flex flex-col"
              style={{
                background: "var(--color-card)",
                boxShadow: "var(--shadow-2xl)",
              }}
            >
              {/* Drawer Header */}
              <div
                className="flex items-center justify-between px-6"
                style={{
                  height: 72,
                  borderBottom: "1px solid var(--color-border-light)",
                }}
              >
                <span
                  className="font-bold text-lg"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-primary)",
                  }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: 40,
                    height: 40,
                    background: "var(--color-bg)",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--color-text)",
                  }}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavClick(link.href)}
                      className="flex items-center justify-between px-4 py-3.5 rounded-xl text-left transition-all"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color:
                          activeSection === link.href.slice(1)
                            ? "var(--color-accent)"
                            : "var(--color-text)",
                        background:
                          activeSection === link.href.slice(1)
                            ? "var(--color-accent-glow)"
                            : "transparent",
                        border: "none",
                        cursor: "pointer",
                        width: "100%",
                      }}
                    >
                      {link.label}
                      <ChevronRight
                        size={16}
                        style={{ color: "var(--color-text-lighter)" }}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Drawer CTA */}
              <div
                className="px-6 py-6"
                style={{
                  borderTop: "1px solid var(--color-border-light)",
                }}
              >
                <button
                  className="btn-primary w-full justify-center"
                  onClick={() => handleNavClick("#contact")}
                >
                  <span className="flex items-center gap-2">
                    Join Our Team
                    <ChevronRight size={16} />
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
