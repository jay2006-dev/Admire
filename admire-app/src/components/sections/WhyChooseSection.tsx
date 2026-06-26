"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Crown,
  Brain,
  BookOpen,
  TrendingUp,
  Handshake,
  Globe,
} from "lucide-react";

const reasons = [
  {
    icon: Crown,
    title: "Leadership Development",
    description:
      "Build the skills to lead teams, manage operations, and inspire others to achieve greatness.",
    gradient: "linear-gradient(135deg, #2563EB, #3B82F6)",
    color: "#2563EB",
    shade: "#eff6ff",
  },
  {
    icon: Brain,
    title: "Entrepreneurial Mindset",
    description:
      "Develop the thinking patterns and decision-making abilities of successful entrepreneurs.",
    gradient: "linear-gradient(135deg, #7C3AED, #A78BFA)",
    color: "#7C3AED",
    shade: "#f5f3ff",
  },
  {
    icon: BookOpen,
    title: "Practical Business Training",
    description:
      "Learn by doing — hands-on experience in real business environments with real challenges.",
    gradient: "linear-gradient(135deg, #059669, #10B981)",
    color: "#059669",
    shade: "#ecfdf5",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Accelerate your career trajectory with proven paths from trainee to entrepreneur.",
    gradient: "linear-gradient(135deg, #DC2626, #F87171)",
    color: "#DC2626",
    shade: "#fef2f2",
  },
  {
    icon: Handshake,
    title: "Mentorship",
    description:
      "Get guided by experienced leaders who have walked the path and achieved success.",
    gradient: "linear-gradient(135deg, #D97706, #FBBF24)",
    color: "#D97706",
    shade: "#fffbeb",
  },
  {
    icon: Globe,
    title: "Real-world Learning",
    description:
      "Gain experience across 15+ cities with diverse markets, clients, and business scenarios.",
    gradient: "linear-gradient(135deg, #0891B2, #22D3EE)",
    color: "#0891B2",
    shade: "#ecfeff",
  },
];

function ReasonCard({ reason, index }: { reason: (typeof reasons)[0]; index: number }) {
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
          background: reason.shade,
          borderRadius: 20,
          overflow: "hidden",
          padding: "28px 26px",
          display: "flex",
          flexDirection: "column",
          boxShadow: hovered
            ? "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(0,0,0,0.06)"
            : "0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition:
            "box-shadow 0.35s ease, transform 0.35s ease, background 0.35s ease",
          cursor: "default",
          height: "100%",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: reason.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
            boxShadow: "0 8px 20px -4px rgba(0,0,0,0.15)",
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <reason.icon size={26} color="white" strokeWidth={2} />
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.125rem",
            fontWeight: 800,
            color: "#1d1d1f",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: 10,
          }}
        >
          {reason.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.8625rem",
            color: "#6e6e73",
            lineHeight: 1.65,
          }}
        >
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Image Container with extra brightness */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3g_wL6xTfQDvyee4Z3qDQvXlU6K7pyejbx4_pC9Ygs3bX2ruy8_rk4pI&s=10') center/cover no-repeat",
          opacity: 0.15,
        }}
      />
      {/* Background accent */}
      <div
        className="absolute"
        style={{
          top: "20%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{
              background: "var(--color-accent-glow)",
              border: "1px solid rgba(37, 99, 235, 0.15)",
            }}
          >
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--color-accent)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Why Choose Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 900,
              color: "var(--color-primary)",
              marginBottom: "1rem",
              textAlign: "center",
              letterSpacing: "-0.03em",
              textShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            Why Choose Admire?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto"
            style={{
              fontSize: "1.175rem",
              color: "var(--color-text)",
              maxWidth: 1200,
              lineHeight: 1.7,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            We offer more than just training — we build the complete entrepreneur in you.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
            maxWidth: 1040,
            margin: "0 auto",
          }}
        >
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
