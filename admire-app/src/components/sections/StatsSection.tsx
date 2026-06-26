"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Rocket, MapPin, Briefcase, Calendar, TrendingUp } from "lucide-react";
import { useRef } from "react";

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const stats = [
  { icon: Clock, value: 5000, suffix: "+", label: "Training Hours" },
  { icon: Rocket, value: 250, suffix: "+", label: "Entrepreneurs Developed" },
  { icon: MapPin, value: 15, suffix: "+", label: "Cities" },
  { icon: Briefcase, value: 40, suffix: "+", label: "Corporate Clients" },
  { icon: Calendar, value: 6, suffix: "+", label: "Years of Experience" },
];

/* ─────────────────────────────────────────────────────────
   COUNTER COMPONENT
───────────────────────────────────────────────────────── */
function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────
   STAT CARD
───────────────────────────────────────────────────────── */
function StatCard({
  stat,
  index,
  inView
}: {
  stat: (typeof stats)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "36px 24px",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(0,0,0,0.06)"
          : "0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 0.35s ease, transform 0.35s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: "rgba(37,99,235,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <stat.icon size={28} style={{ color: "var(--color-accent)" }} />
      </div>

      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "2.25rem",
          fontWeight: 800,
          color: "#1d1d1f",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          marginBottom: 12,
        }}
      >
        <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
      </h3>

      <p
        style={{
          fontSize: "0.9375rem",
          color: "#6e6e73",
          fontWeight: 500,
          lineHeight: 1.4,
        }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────── */
export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="stats"
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
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
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <TrendingUp size={18} style={{ color: "#93c5fd" }} />
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#93c5fd",
                margin: 0,
              }}
            >
              Our Impact
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
            Numbers That Speak
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.14 }}
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              maxWidth: 520,
            }}
          >
            A proven track record of developing leaders, scaling teams, and building successful entrepreneurs across India.
          </motion.p>
        </div>

        {/* ── Stats Grid ─────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 24,
          }}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={isInView} />
          ))}
        </div>

        {/* ── Bottom accent line ──────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: 8,
            borderRadius: 999,
            background: "linear-gradient(90deg, #3b82f6, #93c5fd)",
            boxShadow: "0 0 40px rgba(37,99,235,0.8), 0 0 15px rgba(96,165,250,0.8)",
            marginTop: 70,
            transformOrigin: "left",
            maxWidth: 500,
          }}
        />
      </div>
    </section>
  );
}
