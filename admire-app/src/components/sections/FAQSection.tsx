"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const faqData = [
  {
    category: "Eligibility",
    questions: [
      {
        q: "Who can apply to Admire's training programs?",
        a: "Anyone with a passion for entrepreneurship and business can apply. We welcome fresh graduates, career changers, and aspiring entrepreneurs from all backgrounds. A positive attitude and willingness to learn are the most important criteria.",
      },
      {
        q: "Is there any age or education requirement?",
        a: "We accept candidates aged 18 and above. While a graduate degree is preferred, we evaluate each applicant based on their drive, communication skills, and entrepreneurial potential rather than just academic qualifications.",
      },
    ],
  },
  {
    category: "Training",
    questions: [
      {
        q: "How long is the training program?",
        a: "Our comprehensive training program spans 6-12 months depending on the track. During this period, you'll receive intensive hands-on training in sales, marketing, leadership, and business management with regular assessments and mentoring sessions.",
      },
      {
        q: "What kind of training will I receive?",
        a: "You'll receive practical, hands-on training in face-to-face marketing, sales strategy, team management, client acquisition, leadership development, and entrepreneurial skills. The training combines classroom learning with real-world field experience.",
      },
    ],
  },
  {
    category: "Career",
    questions: [
      {
        q: "What career opportunities are available after training?",
        a: "After completing training, you can progress to roles like Team Leader, Assistant Manager, Branch Manager, and eventually launch your own venture as an entrepreneur with Admire's support and proven business model.",
      },
      {
        q: "Is there a fixed salary during training?",
        a: "Yes, trainees receive compensation during the training period along with performance-based incentives. As you progress and take on more responsibilities, your earning potential increases significantly.",
      },
    ],
  },
  {
    category: "Application",
    questions: [
      {
        q: "How do I apply for Admire's programs?",
        a: "You can apply through our website's contact form, or reach out to us via WhatsApp or email. Our team will schedule an initial interview to understand your goals and assess if Admire is the right fit for your career aspirations.",
      },
      {
        q: "What happens after I apply?",
        a: "After applying, you'll be contacted within 48 hours for an initial screening call. If selected, you'll be invited for a face-to-face interview at one of our offices, followed by the onboarding process and training commencement.",
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   FAQ ITEM BOX
───────────────────────────────────────────────────────── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: hovered || isOpen
          ? "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(0,0,0,0.06)"
          : "0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
        transform: hovered && !isOpen ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.35s ease",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 26px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.125rem",
            fontWeight: 800,
            color: isOpen ? "var(--color-accent)" : "#1d1d1f",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
            paddingRight: "1rem",
            transition: "color 0.3s ease",
          }}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: isOpen ? "var(--color-accent)" : "rgba(0,0,0,0.03)",
            color: isOpen ? "#fff" : "#1d1d1f",
            transition: "background 0.3s ease, color 0.3s ease",
          }}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 26px 28px",
              }}
            >
              <div
                style={{
                  height: 1,
                  background: "rgba(0,0,0,0.06)",
                  marginBottom: 20,
                }}
              />
              <p
                style={{
                  fontSize: "1rem",
                  color: "#4e4e52",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────── */
export default function FAQSection() {
  return (
    <section
      id="faq"
      style={{
        background: "linear-gradient(135deg, #451a03 0%, #b45309 100%)",
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
            <MessageCircleQuestion size={18} style={{ color: "#fde68a" }} />
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fde68a",
                margin: 0,
              }}
            >
              Got Questions?
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
            Frequently Asked Questions
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
            Everything you need to know about joining Admire, our training programs, and career opportunities.
          </motion.p>
        </div>

        {/* ── FAQ Grid ─────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 40,
          }}
        >
          {faqData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 * catIndex }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.125rem",
                  fontWeight: 800,
                  color: "#fde68a",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 24,
                  borderBottom: "2px solid rgba(253,230,138,0.2)",
                  paddingBottom: 12,
                  display: "inline-block",
                }}
              >
                {category.category}
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {category.questions.map((faq) => (
                  <FAQItem
                    key={faq.q}
                    question={faq.q}
                    answer={faq.a}
                  />
                ))}
              </div>
            </motion.div>
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
            background: "linear-gradient(90deg, #d97706, #fbbf24)",
            boxShadow: "0 0 40px rgba(217,119,6,0.8), 0 0 15px rgba(251,191,36,0.8)",
            marginTop: 70,
            transformOrigin: "left",
            maxWidth: 500,
          }}
        />
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 500px) {
          #faq [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
