"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MessageSquare,
  GraduationCap,
  Crown,
  Building2,
  Rocket,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const steps = [
  {
    icon: Send,
    title: "Apply",
    description: "Submit your application and take the first step toward your entrepreneurial journey.",
    color: "#2563EB",
    date: "Phase 1",
    tag: "Registration",
  },
  {
    icon: MessageSquare,
    title: "Interview",
    description: "Meet our team, share your aspirations, and discover if Admire is the right fit for you.",
    color: "#7C3AED",
    date: "Phase 2",
    tag: "Selection",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Undergo comprehensive training in sales, marketing, communication, and business skills.",
    color: "#059669",
    date: "Phase 3",
    tag: "Core Training",
  },
  {
    icon: Crown,
    title: "Leadership Development",
    description: "Step into leadership roles, manage teams, and develop your management capabilities.",
    color: "#D97706",
    date: "Phase 4",
    tag: "Mentoring",
  },
  {
    icon: Building2,
    title: "Branch Management",
    description: "Take charge of a branch, drive operations, and prove your ability to run a business unit.",
    color: "#DC2626",
    date: "Phase 5",
    tag: "Operations",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship",
    description: "Launch your own venture with Admire's backing, network, and proven business model.",
    color: "#0891B2",
    date: "Phase 6",
    tag: "Launch",
  },
];

/* ─────────────────────────────────────────────────────────
   TIMELINE ROW (Spacious book layout with snap-scroll align)
───────────────────────────────────────────────────────── */
function TimelineRow({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger at 20% visibility
      }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const delayStyle = {
    transitionDelay: `${(index % 3) * 0.1}s`,
  };

  return (
    <div
      ref={rowRef}
      className="timeline-row"
    >
      {/* Spine Connector Dot (sits directly on top of the book spine crease) */}
      <div
        className={`timeline-dot ${isRevealed ? "revealed" : ""}`}
        style={{
          borderColor: step.color,
          boxShadow: `0 0 20px ${step.color}44`,
          ...delayStyle,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: step.color,
          }}
        />
      </div>

      {/* Book Card Component */}
      <div
        className={`timeline-card-wrapper ${isRevealed ? "revealed" : ""}`}
        style={{ width: "100%", maxWidth: 800, zIndex: 5, ...delayStyle }}
      >
        <div className="book-card">
          {/* Stacked book pages effect underneath */}
          <div className="book-page-under-1" />
          <div className="book-page-under-2" />

          <div className="book-inner">
            {/* Left Page (Chapter Title & Icon) */}
            <div className="book-page-left">
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8125rem",
                  fontWeight: 800,
                  color: step.color,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                {step.date}
              </div>
              
              <div
                className="flex items-center justify-center rounded-xl mb-4"
                style={{
                  width: 44,
                  height: 44,
                  background: `${step.color}12`,
                }}
              >
                <step.icon size={22} style={{ color: step.color }} />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, 3rem)", // Extra large book heading
                  fontWeight: 800,
                  color: "var(--color-primary)",
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </h3>
            </div>

            {/* Spine crease down the middle */}
            <div className="book-spine" />

            {/* Right Page (Description & Action Tag) */}
            <div className="book-page-right">
              <p
                style={{
                  fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
                  color: "var(--color-text-light)",
                  lineHeight: 1.75,
                  marginBottom: 20,
                }}
              >
                {step.description}
              </p>

              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  background: "var(--color-accent-glow)",
                  border: "1px solid rgba(37, 99, 235, 0.15)",
                  padding: "4px 12px",
                  borderRadius: 20,
                }}
              >
                {step.tag}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   TIMELINE SECTION
───────────────────────────────────────────────────────── */
export default function TrainingJourney() {
  return (
    <section
      id="journey"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #4363aeff 50%, #FFFFFF 100%)",
      }}
    >
      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
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
              Your Path
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.75rem, 6vw, 4.5rem)", // Super large section heading
              fontWeight: 800,
              color: "var(--color-primary)",
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            Training Journey
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-light)",
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            From application to entrepreneurship — your transformation starts here.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="timeline-container">
          {/* Spine line runs full height down the center */}
          <div className="timeline-line" />

          {/* Snapping cards list */}
          <div style={{ position: "relative" }}>
            {steps.map((step, index) => (
              <TimelineRow key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Styles for scroll snap, open book layout, and reveal states */}
      <style>{`
        /* Snap scrolling container setup */
        html {
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
        }

        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px 0;
        }

        /* Central binder/spine timeline line */
        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          top: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(37, 99, 235, 0.2) 0%,
            rgba(124, 58, 237, 0.5) 50%,
            rgba(37, 99, 235, 0.2) 100%
          );
          z-index: 1;
        }

        /* Center-aligned rows occupying viewport height for snap-focus */
        .timeline-row {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
          scroll-snap-align: center;
          scroll-snap-stop: always;
        }

        .timeline-card-wrapper {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .timeline-card-wrapper.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Binder ring/spine connector dots */
        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3.5px solid;
          background: #ffffff;
          display: flex;
          align-items: center;
          justifyContent: center;
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          z-index: 10;
          transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .timeline-dot.revealed {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        /* 3D Book Layout */
        .book-card {
          position: relative;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 
            0 1px 3px rgba(0, 0, 0, 0.04),
            0 12px 30px rgba(0, 0, 0, 0.02),
            0 24px 50px rgba(0, 0, 0, 0.03);
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .book-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 2px 5px rgba(0, 0, 0, 0.04),
            0 20px 40px rgba(0, 0, 0, 0.05),
            0 40px 80px rgba(0, 0, 0, 0.08);
        }

        /* Stacking visual page edges beneath card */
        .book-page-under-1,
        .book-page-under-2 {
          position: absolute;
          inset: 0;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 24px;
          z-index: -1;
          pointer-events: none;
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .book-page-under-1 {
          transform: rotate(-1.5deg) scale(0.99);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.01);
        }

        .book-page-under-2 {
          transform: rotate(1.2deg) scale(0.995);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.01);
        }

        .book-card:hover .book-page-under-1 {
          transform: rotate(-2.5deg) scale(0.985);
        }

        .book-card:hover .book-page-under-2 {
          transform: rotate(2deg) scale(0.99);
        }

        .book-inner {
          display: grid;
          grid-template-columns: 1fr 2px 1fr;
          min-height: 260px;
        }

        .book-page-left {
          padding: 44px 38px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          text-align: left;
        }

        .book-page-right {
          padding: 44px 38px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          text-align: left;
        }

        .book-spine {
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.03) 0%,
            rgba(0, 0, 0, 0.08) 50%,
            rgba(0, 0, 0, 0.03) 100%
          );
          height: 82%;
          align-self: center;
        }

        /* Mobile-First Adaptation */
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
            transform: none;
          }

          .timeline-row {
            min-height: auto;
            padding-left: 48px;
            margin-bottom: 36px;
            justify-content: flex-start;
            scroll-snap-align: start;
          }

          /* Left-align binder dot on mobile line */
          .timeline-dot {
            left: 20px;
            top: 24px;
            transform: translate(-50%, 0) scale(0);
          }

          .timeline-dot.revealed {
            transform: translate(-50%, 0) scale(1);
          }

          .book-inner {
            grid-template-columns: 1fr !important;
          }

          .book-spine {
            display: none;
          }

          .book-page-left {
            padding: 30px 24px 15px;
          }

          .book-page-right {
            padding: 15px 24px 30px;
            border-top: 1px dashed rgba(0, 0, 0, 0.08);
          }
          
          .book-page-under-1,
          .book-page-under-2 {
            display: none;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .timeline-card-wrapper {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .timeline-dot {
            transition: none !important;
            opacity: 1 !important;
            transform: translate(-50%, -50%) scale(1) !important;
          }

          @media (max-width: 768px) {
            .timeline-dot {
              transform: translate(-50%, 0) scale(1) !important;
            }
          }
        }
      `}</style>
    </section>
  );
}
