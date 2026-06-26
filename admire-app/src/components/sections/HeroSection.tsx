"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Play, TrendingUp, MapPin, Users, Award, X } from "lucide-react";



export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isVideoModalOpen]);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Animate headline words
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".hero-word");
        tl.from(words, {
          y: 80,
          opacity: 0,
          rotationX: -40,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // Animate subtext
      if (subtextRef.current) {
        tl.from(
          subtextRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      // Animate floating orbs
      gsap.to(".hero-orb-1", {
        y: -30,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb-2", {
        y: 25,
        x: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb-3", {
        y: -20,
        x: -25,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: heroRef }
  );

  const headlineText = "Get An Opportunity To Become An";

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden flex items-center"
      style={{
        minHeight: "100vh",
      }}
    >
      {/* Background Image Container */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "url('https://res.cloudinary.com/dofiwpenw/image/upload/f_auto,q_auto/Gemini_Generated_Image_sd6avnsd6avnsd6a_atm6az') center/cover no-repeat",
        }}
      />
      {/* Background Orbs */}
      <div
        className="hero-orb-1 absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "-10%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="hero-orb-2 absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: "10%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="hero-orb-3 absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          top: "40%",
          right: "20%",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="section-container relative z-10 w-full flex justify-start" style={{ paddingTop: "7.5rem", paddingBottom: "7.5rem" }}>
        <div className="max-w-3xl text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "var(--color-accent-glow)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
            }}
          >
            <span
              className="inline-block rounded-full"
              style={{
                width: 6,
                height: 6,
                background: "var(--color-accent)",
                animation: "pulse-glow 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--color-accent)",
                fontFamily: "var(--font-heading)",
              }}
            >
              India&apos;s Leading Entrepreneurship Academy
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "var(--color-primary)",
              marginBottom: "0.5rem",
              perspective: "600px",
            }}
          >
            {headlineText.split(" ").map((word, i) => (
              <span
                key={i}
                className="hero-word inline-block"
                style={{ marginRight: "0.3em" }}
              >
                {word}
              </span>
            ))}
            <br />
            <span
              className="hero-word inline-block gradient-text"
              style={{
                fontSize: "clamp(2.75rem, 7vw, 5rem)",
                marginTop: "0.1em",
              }}
            >
              Entrepreneur
            </span>
          </h1>

          {/* Subtext */}
          <p
            ref={subtextRef}
            className="mr-auto ml-0"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--color-text-light)",
              maxWidth: 640,
              lineHeight: 1.7,
              marginTop: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            Admire Global Organisation develops future business leaders through
            hands-on training in management, sales, marketing, and entrepreneurship
            across 15+ cities in India.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-24"
          >
            <button
              className="btn-primary"
              style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="flex items-center gap-2">
                Join Our Team
                <ArrowRight size={18} />
              </span>
            </button>
            <button
              className="btn-secondary flex items-center gap-2"
              style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}
              onClick={() => setIsVideoModalOpen(true)}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 32,
                  height: 32,
                  background: "var(--color-accent-glow)",
                }}
              >
                <Play size={14} fill="var(--color-accent)" color="var(--color-accent)" />
              </div>
              Watch Success Stories
            </button>
          </motion.div>

          {/* Stats Bar */}

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: 120,
          background:
            "linear-gradient(to top, var(--color-bg), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              backdropFilter: "blur(12px)",
            }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                onClick={() => setIsVideoModalOpen(false)}
                aria-label="Close Video"
              >
                <X size={20} />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ptD0T-ZcF2M?si=RYImvvLY5o0zN6Vd&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
