"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Quote, TrendingUp } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const stories = [
  {
    name: "Rahul Kumar",
    from: "College Graduate",
    to: "Branch Manager",
    duration: "18 months",
    testimonial: "Admire didn't just give me a job — it gave me a career path I never imagined possible. The training transformed my confidence and skills.",
    initials: "RK",
    blobs: ["#93c5fd", "#c4b5fd", "#a78bfa"], // sky · violet · purple
  },
  {
    name: "Priya Sharma",
    from: "Fresher",
    to: "Regional Lead",
    duration: "2 years",
    testimonial: "From having zero business experience to leading a team of 30 — Admire's structured approach made all the difference.",
    initials: "PS",
    blobs: ["#f9a8d4", "#fde68a", "#fca5a5"], // pink · amber · rose
  },
  {
    name: "Vikram Singh",
    from: "Sales Executive",
    to: "Entrepreneur",
    duration: "3 years",
    testimonial: "The entrepreneurial mindset I developed at Admire helped me launch my own successful business. Forever grateful.",
    initials: "VS",
    blobs: ["#6ee7b7", "#93c5fd", "#a7f3d0"], // emerald · sky · mint
  },
];

/* ─────────────────────────────────────────────────────────
   BLOB AVATAR (inline SVG mesh — same language as Leadership)
───────────────────────────────────────────────────────── */
function BlobAvatar({
  blobs,
  initials,
  hovered,
}: {
  blobs: string[];
  initials: string;
  hovered: boolean;
}) {
  const id = `story-${initials}`;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 200,
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
          <filter id={`av-blur-${id}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <rect width="100" height="100" fill={blobs[0]} opacity="0.35" />
        <g filter={`url(#av-blur-${id})`}>
          <circle cx="20" cy="25" r="48" fill={blobs[0]} opacity="0.9" />
          <circle cx="80" cy="20" r="40" fill={blobs[1]} opacity="0.85" />
          <circle cx="55" cy="80" r="45" fill={blobs[2]} opacity="0.8" />
          <circle cx="10" cy="80" r="36" fill={blobs[1]} opacity="0.6" />
          <circle cx="90" cy="75" r="38" fill={blobs[0]} opacity="0.65" />
        </g>
      </svg>

      {/* Frosted initials circle */}
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
            width: 78,
            height: 78,
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
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.65rem",
              fontWeight: 800,
              color: "#1d1d1f",
              letterSpacing: "-0.03em",
            }}
          >
            {initials}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   STORY CARD
───────────────────────────────────────────────────────── */
function StoryCard({
  story,
  index,
}: {
  story: (typeof stories)[0];
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
        {/* Quote icon on top right of the avatar zone */}
        <div
          className="absolute top-4 right-4 z-10"
          style={{
            color: "rgba(255, 255, 255, 0.45)",
            pointerEvents: "none",
          }}
        >
          <Quote size={28} />
        </div>

        {/* Blob avatar zone */}
        <BlobAvatar blobs={story.blobs} initials={story.initials} hovered={hovered} />

        {/* Text body */}
        <div
          style={{
            padding: "24px 26px 28px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Journey pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "var(--color-bg, #f8fafc)",
              border: "1px solid var(--color-border-light, #f1f5f9)",
              padding: "6px 12px",
              borderRadius: 12,
              marginBottom: 14,
              alignSelf: "flex-start",
            }}
          >
            <span
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-text-light)",
                fontWeight: 500,
              }}
            >
              {story.from}
            </span>
            <ArrowRight size={13} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
            <span
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-accent)",
                fontWeight: 700,
                fontFamily: "var(--font-heading)",
              }}
            >
              {story.to}
            </span>
          </div>

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
            {story.name}
          </h3>

          {/* Duration badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
            <TrendingUp size={14} style={{ color: "var(--color-success)" }} />
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--color-success)",
                fontFamily: "var(--font-heading)",
              }}
            >
              In {story.duration}
            </span>
          </div>

          <p
            style={{
              fontSize: "0.9125rem",
              color: "#4e4e52",
              lineHeight: 1.65,
              fontStyle: "italic",
              flex: 1,
            }}
          >
            &ldquo;{story.testimonial}&rdquo;
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────── */
export default function SuccessStories() {
  return (
    <section
      id="stories"
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)",
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
              color: "#c4b5fd",
              marginBottom: 14,
            }}
          >
            Real Results
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
              color: "#ffffff",
              letterSpacing: "-0.035em",
              lineHeight: 1.07,
              marginBottom: 18,
              maxWidth: 560,
            }}
          >
            Success Stories
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
              maxWidth: 520,
            }}
          >
            Real transformations from real people who chose Admire.
          </motion.p>
        </div>

        {/* ── Cards grid ─────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {stories.map((story, i) => (
            <StoryCard key={story.name} story={story} index={i} />
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
            background: "linear-gradient(90deg, #7c3aed, #a78bfa)",
            boxShadow: "0 0 40px rgba(124,58,237,0.8), 0 0 15px rgba(167,139,250,0.8)",
            marginTop: 56,
            transformOrigin: "left",
            maxWidth: 500,
          }}
        />
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 500px) {
          #stories [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
