"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Users,
  Rocket,
  GraduationCap,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Encouraging creative thinking and fresh approaches to business challenges.",
    blobs: ["#f9a8d4", "#fde68a", "#fca5a5"], // pink · amber · rose
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through honest, ethical, and transparent practices.",
    blobs: ["#93c5fd", "#c4b5fd", "#a78bfa"], // sky · violet · purple
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Fostering collaboration and collective growth toward shared goals.",
    blobs: ["#6ee7b7", "#93c5fd", "#a7f3d0"], // emerald · sky · mint
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "Striving for the highest standards in everything we do.",
    blobs: ["#fde68a", "#fca5a5", "#f9a8d4"], 
  },
  {
    icon: GraduationCap,
    title: "Growth",
    description: "Continuously learning and evolving to reach our full potential.",
    blobs: ["#c4b5fd", "#a78bfa", "#93c5fd"],
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "Understanding and supporting each individual's unique journey.",
    blobs: ["#a7f3d0", "#6ee7b7", "#93c5fd"],
  },
];

/* ─────────────────────────────────────────────────────────
   BLOB ICON (Replaces BlobAvatar from SuccessStories)
───────────────────────────────────────────────────────── */
function BlobIcon({
  blobs,
  icon: Icon,
  hovered,
  id,
  height = 140,
}: {
  blobs: string[];
  icon: any;
  hovered: boolean;
  id: string;
  height?: number;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: height,
        overflow: "hidden",
        borderRadius: "20px 20px 0 0",
        flexShrink: 0,
      }}
    >
      {/* Blob mesh background */}
      <svg
        aria-hidden={true}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id={`blob-blur-${id}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <rect width="100" height="100" fill={blobs[0]} opacity="0.35" />
        <g filter={`url(#blob-blur-${id})`}>
          <circle cx="20" cy="25" r="48" fill={blobs[0]} opacity="0.9" />
          <circle cx="80" cy="20" r="40" fill={blobs[1]} opacity="0.85" />
          <circle cx="55" cy="80" r="45" fill={blobs[2]} opacity="0.8" />
          <circle cx="10" cy="80" r="36" fill={blobs[1]} opacity="0.6" />
          <circle cx="90" cy="75" r="38" fill={blobs[0]} opacity="0.65" />
        </g>
      </svg>

      {/* Frosted icon circle */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.52)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1.5px solid rgba(255,255,255,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
            transform: hovered ? "scale(1.12)" : "scale(1)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          }}
        >
          <Icon size={28} color="#1d1d1f" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   VALUE CARD
───────────────────────────────────────────────────────── */
function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ borderRadius: 20 }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#fff",
          borderRadius: 20,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: hovered
            ? "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(0,0,0,0.06)"
            : "0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "box-shadow 0.35s ease, transform 0.35s ease",
          cursor: "default",
          height: "100%",
          position: "relative",
        }}
      >
        <BlobIcon blobs={value.blobs} icon={value.icon} hovered={hovered} id={value.title} height={120} />

        <div
          style={{
            padding: "20px 24px 24px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.125rem",
              fontWeight: 800,
              color: "#1d1d1f",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            {value.title}
          </h3>

          <p
            style={{
              fontSize: "0.9125rem",
              color: "#4e4e52",
              lineHeight: 1.65,
              flex: 1,
            }}
          >
            {value.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   MISSION & VISION CARDS
───────────────────────────────────────────────────────── */
function BigCard({
  title,
  description,
  icon,
  blobs,
  index,
}: {
  title: string;
  description: string;
  icon: any;
  blobs: string[];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ borderRadius: 20 }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#fff",
          borderRadius: 20,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: hovered
            ? "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(0,0,0,0.06)"
            : "0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "box-shadow 0.35s ease, transform 0.35s ease",
          cursor: "default",
          height: "100%",
          position: "relative",
        }}
      >
        <BlobIcon blobs={blobs} icon={icon} hovered={hovered} id={title.replace(/\s+/g, '-')} height={160} />

        <div
          style={{
            padding: "24px 26px 28px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.375rem",
              fontWeight: 800,
              color: "#1d1d1f",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontSize: "1rem",
              color: "#4e4e52",
              lineHeight: 1.7,
              flex: 1,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────── */
export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "var(--color-bg)",
        padding: "100px 24px 110px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>

        {/* ── Header ─────────────────────────────────────── */}
        <div style={{ marginBottom: 56, textAlign: "left" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: 14,
            }}
          >
            About Admire
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.07 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 800,
              color: "#1d1d1f",
              letterSpacing: "-0.035em",
              lineHeight: 1.07,
              marginBottom: 18,
              maxWidth: 560,
            }}
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.14 }}
            style={{
              fontSize: "1.0625rem",
              color: "#6e6e73",
              lineHeight: 1.7,
              maxWidth: 720,
            }}
          >
            Admire Global Organisation is one of the best and leading face-to-face
            marketing companies in India, enhancing the skill sets of youngsters
            towards entrepreneurship through comprehensive management training.
          </motion.p>
        </div>

        {/* ── Mission & Vision ──────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            marginBottom: 56,
          }}
        >
          <BigCard
            title="Our Mission"
            description="To develop future entrepreneurs and business leaders by providing world-class training in management, sales, marketing, and leadership skills. We empower individuals to unlock their full potential and build successful careers."
            icon={Target}
            blobs={["#93c5fd", "#c4b5fd", "#a78bfa"]}
            index={0}
          />
          <BigCard
            title="Our Vision"
            description="To become India's most trusted entrepreneurship development organization, creating a network of empowered leaders across every city who drive innovation, growth, and positive change in the business landscape."
            icon={Eye}
            blobs={["#f9a8d4", "#fde68a", "#fca5a5"]}
            index={1}
          />
        </div>

        {/* ── Values Subheading ─────────────────────────── */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "#1d1d1f",
            letterSpacing: "-0.02em",
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          Our Core Values
        </motion.h3>

        {/* ── Values Grid ───────────────────────────────── */}
        <div
          id="values-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {values.map((value, i) => (
            <ValueCard key={value.title} value={value} index={i} />
          ))}
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
            background:
              "linear-gradient(90deg,#93c5fd,#c4b5fd,#f9a8d4,#fde68a,#6ee7b7)",
            boxShadow: "0 0 40px rgba(249,168,212,0.8), 0 0 15px rgba(196,181,253,0.8)",
            marginTop: 56,
            transformOrigin: "left",
            maxWidth: 500,
          }}
        />
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 500px) {
          #about [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
