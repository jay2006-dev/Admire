"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  BarChart3,
  Crown,
  Settings,
  Users,
  Rocket,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    icon: Briefcase,
    title: "Business Development",
    description: "Learn the art of building strategic partnerships, acquiring clients, and driving revenue growth.",
    color: "#2563EB",
  },
  {
    icon: BarChart3,
    title: "Sales & Marketing",
    description: "Master face-to-face sales, digital marketing strategies, and customer relationship building.",
    color: "#7C3AED",
  },
  {
    icon: Crown,
    title: "Leadership Training",
    description: "Develop the leadership qualities needed to inspire teams and drive organizational success.",
    color: "#D97706",
  },
  {
    icon: Settings,
    title: "Management",
    description: "Learn operational management, resource allocation, and efficient business process optimization.",
    color: "#059669",
  },
  {
    icon: Users,
    title: "HR Development",
    description: "Understand talent acquisition, team building, performance management, and people leadership.",
    color: "#DC2626",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship",
    description: "Build the mindset, skills, and network needed to launch and scale your own business venture.",
    color: "#0891B2",
  },
];

function ProgramCard({ program, index }: { program: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group cursor-pointer relative"
      style={{ perspective: "1000px", minHeight: "320px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="w-full h-full transition-transform duration-700 relative"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 w-full h-full bg-white rounded-3xl border border-gray-100 p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center text-center transition-shadow duration-300 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Hover Glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl pointer-events-none"
            style={{
              background: `radial-gradient(circle at top right, ${program.color}15, transparent 65%)`,
            }}
          />

          {/* Top Accent */}
          <div
            className="absolute top-0 left-0 h-1 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
            style={{ background: program.color }}
          />

          {/* Background Number */}
          <div 
            className="absolute top-5 right-6 text-6xl font-black select-none transition-all duration-500 group-hover:scale-110"
            style={{ color: program.color, opacity: 0.15 }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Icon */}
          <div
            className="relative flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110"
            style={{
              background: `${program.color}15`,
              border: `1px solid ${program.color}30`,
              boxShadow: `0 10px 30px ${program.color}20`,
            }}
          >
            <program.icon size={28} style={{ color: program.color }} />
          </div>

          {/* Title */}
          <h3
            className="transition-colors duration-300 group-hover:text-black"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#1d1d1f",
              marginTop: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            {program.title}
          </h3>

          <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300" style={{ color: program.color }}>
            Learn More <ArrowRight size={15} />
          </div>

          {/* Border Glow */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              border: `1px solid ${program.color}40`,
            }}
          />
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 w-full h-full bg-white rounded-3xl border border-gray-100 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex flex-col justify-center items-center text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Top Accent */}
          <div
            className="absolute top-0 left-0 h-1 w-full rounded-t-3xl"
            style={{ background: program.color }}
          />
          
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full mb-4"
            style={{ background: `${program.color}15` }}
          >
            <program.icon size={20} style={{ color: program.color }} />
          </div>

          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#1d1d1f",
              marginBottom: "1rem",
            }}
          >
            {program.title}
          </h3>

          <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.8 }}>
            {program.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Image Container */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "url('https://miro.medium.com/v2/resize:fit:1400/1*-MYncbRfq36eVYA3AbhiJw.jpeg') center/cover no-repeat",
        }}
      />
      <div className="section-container relative z-10">
        {/* Section Header */}
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
            What We Offer
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
            Programs & Opportunities
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
            Explore our comprehensive training programs designed to build every
            aspect of your entrepreneurial journey.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
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
    </section>
  );
}
