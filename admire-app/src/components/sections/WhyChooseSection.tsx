"use client";

import { useRef } from "react";
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
  },
  {
    icon: Brain,
    title: "Entrepreneurial Mindset",
    description:
      "Develop the thinking patterns and decision-making abilities of successful entrepreneurs.",
    gradient: "linear-gradient(135deg, #7C3AED, #A78BFA)",
  },
  {
    icon: BookOpen,
    title: "Practical Business Training",
    description:
      "Learn by doing — hands-on experience in real business environments with real challenges.",
    gradient: "linear-gradient(135deg, #059669, #10B981)",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Accelerate your career trajectory with proven paths from trainee to entrepreneur.",
    gradient: "linear-gradient(135deg, #DC2626, #F87171)",
  },
  {
    icon: Handshake,
    title: "Mentorship",
    description:
      "Get guided by experienced leaders who have walked the path and achieved success.",
    gradient: "linear-gradient(135deg, #D97706, #FBBF24)",
  },
  {
    icon: Globe,
    title: "Real-world Learning",
    description:
      "Gain experience across 15+ cities with diverse markets, clients, and business scenarios.",
    gradient: "linear-gradient(135deg, #0891B2, #22D3EE)",
  },
];

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
          opacity: 0.35,
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
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--color-primary)",
              marginBottom: "1rem",
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
              fontSize: "1.125rem",
              color: "var(--color-text-light)",
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            We offer more than just training — we build the complete entrepreneur in you.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card p-7 relative group cursor-default overflow-hidden"
            >
              {/* Hover gradient border effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: reason.gradient,
                  padding: "1px",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                }}
              />

              <div
                className="flex items-center justify-center rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  width: 56,
                  height: 56,
                  background: reason.gradient,
                  boxShadow: "0 8px 20px -4px rgba(0,0,0,0.15)",
                }}
              >
                <reason.icon size={26} color="white" strokeWidth={2} />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--color-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                {reason.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-light)",
                  lineHeight: 1.7,
                }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
