"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aditya Mehta",
    role: "Former Trainee, Now Business Owner",
    text: "Joining Admire was the turning point of my life. The leadership training gave me the confidence to start my own business. I went from an unsure graduate to a confident entrepreneur in just two years.",
    rating: 5,
    initials: "AM",
    gradient: "linear-gradient(135deg, #2563EB, #7C3AED)",
  },
  {
    name: "Sneha Reddy",
    role: "Regional Manager",
    text: "What I love about Admire is the genuine care for each individual's growth. The mentors don't just teach business — they help you discover your potential. The practical training is unmatched.",
    rating: 5,
    initials: "SR",
    gradient: "linear-gradient(135deg, #EC4899, #F97316)",
  },
  {
    name: "Arjun Patel",
    role: "Corporate Partner",
    text: "As a corporate partner, working with Admire's trained professionals has been exceptional. Their team brings energy, professionalism, and genuine skill to every project we collaborate on.",
    rating: 5,
    initials: "AP",
    gradient: "linear-gradient(135deg, #059669, #0891B2)",
  },
  {
    name: "Kavya Nair",
    role: "Branch Manager",
    text: "Admire gave me a platform where my ideas were heard and my growth was prioritized. From a shy fresher to managing a team of 25 — this journey has been transformative.",
    rating: 5,
    initials: "KN",
    gradient: "linear-gradient(135deg, #D97706, #DC2626)",
  },
  {
    name: "Rohit Sharma",
    role: "Team Leader",
    text: "The training methodology at Admire is unlike anything I've experienced. It's hands-on, practical, and pushes you beyond your comfort zone. That's where real growth happens.",
    rating: 5,
    initials: "RS",
    gradient: "linear-gradient(135deg, #7C3AED, #EC4899)",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #4c0519 0%, #be185d 100%)",
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{
              background: "rgba(244, 114, 182, 0.15)",
              border: "1px solid rgba(244, 114, 182, 0.25)",
            }}
          >
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#fbcfe8",
                fontFamily: "var(--font-heading)",
              }}
            >
              What They Say
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
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Testimonials
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden" style={{ minHeight: 360 }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="card p-8 md:p-10 text-center relative"
              >
                {/* Quote */}
                <div
                  className="absolute top-6 left-8"
                  style={{ color: "var(--color-accent-glow)" }}
                >
                  <Quote size={48} fill="currentColor" />
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="#FBBF24"
                        color="#FBBF24"
                      />
                    )
                  )}
                </div>

                {/* Testimonial Text */}
                <p
                  className="relative z-10 mb-8"
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--color-text)",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    maxWidth: 760,
                    margin: "0 auto",
                  }}
                >
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 48,
                      height: 48,
                      background: testimonials[current].gradient,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 800,
                        color: "white",
                        fontSize: "0.875rem",
                      }}
                    >
                      {testimonials[current].initials}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--color-primary)",
                      }}
                    >
                      {testimonials[current].name}
                    </h4>
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-text-light)",
                      }}
                    >
                      {testimonials[current].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="flex items-center justify-center rounded-full"
              style={{
                width: 44,
                height: 44,
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                cursor: "pointer",
                color: "var(--color-text)",
                boxShadow: "var(--shadow-sm)",
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: current === index ? 28 : 8,
                    height: 8,
                    background:
                      current === index
                        ? "var(--color-accent)"
                        : "var(--color-border)",
                    border: "none",
                    cursor: "pointer",
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="flex items-center justify-center rounded-full"
              style={{
                width: 44,
                height: 44,
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                cursor: "pointer",
                color: "var(--color-text)",
                boxShadow: "var(--shadow-sm)",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
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
            background: "linear-gradient(90deg, #ec4899, #f472b6)",
            boxShadow: "0 0 40px rgba(236,72,153,0.8), 0 0 15px rgba(244,114,182,0.8)",
            marginTop: 70,
            transformOrigin: "center",
            maxWidth: 500,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
    </section>
  );
}
