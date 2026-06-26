"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";

// Custom LinkedIn SVG Icon since Lucide deprecated brand icons
function Linkedin(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const { size = 15, ...rest } = props;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      {...rest}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const leaders = [
  {
    name: "Tony Fernandez",
    role: "Country Head",
    bio: "Visionary leader with extensive experience building high-performing teams and driving business growth across India.",
    initials: "TF",
    image: "https://admireorg.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-29-at-17.06.31-1.jpeg",
    blobs: ["#a78bfa", "#f9a8d4", "#93c5fd"],
    linkedin: "#",
    website: "#",
    email: "tony@admire.in",
    color: "#7c3aed",
    shade: "#f5f3ff",
  },
  {
    name: "Kishore Tarachandani",
    role: "Country Head",
    bio: "Strategic thinker specializing in market expansion and organizational development with a passion for mentoring.",
    initials: "KT",
    image: "https://admireorg.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-29-at-17.06.31.jpeg",
    blobs: ["#c4b5fd", "#fde68a", "#f9a8d4"],
    linkedin: "#",
    website: "#",
    email: "kishore@admire.in",
    color: "#d97706",
    shade: "#fffbeb",
  },
  {
    name: "Gopi Akula",
    role: "Country Head",
    bio: "Dynamic leader focused on operational excellence and creating clear pathways for aspiring entrepreneurs.",
    initials: "GA",
    image: "https://admireorg.in/wp-content/uploads/2023/06/4vb6litf.png",
    blobs: ["#6ee7b7", "#93c5fd", "#fde68a"],
    linkedin: "#",
    website: "#",
    email: "gopi@admire.in",
    color: "#059669",
    shade: "#ecfdf5",
  },
  {
    name: "Mr. Pavan",
    role: "Organisation Head",
    bio: "Founding leader driving Admire's vision of developing entrepreneurs and transforming careers across the nation.",
    initials: "MP",
    image: "https://admireorg.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-29-at-17.14.14.jpeg",
    blobs: ["#fca5a5", "#fde68a", "#c4b5fd"],
    linkedin: "#",
    website: "#",
    email: "pavan@admire.in",
    color: "#e11d48",
    shade: "#fff1f2",
  },
];

/* ─────────────────────────────────────────────────────────
   LEADER PHOTO AVATAR
───────────────────────────────────────────────────────── */
function LeaderAvatar({
  image,
  name,
  hovered,
}: {
  image: string;
  name: string;
  hovered: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 220,
        overflow: "hidden",
        borderRadius: "20px 20px 0 0",
        flexShrink: 0,
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}
      />
      {/* Bottom gradient overlay for text readability */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          background: "linear-gradient(to top, rgba(0,0,0,0.15), transparent)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   LEADER CARD
───────────────────────────────────────────────────────── */
function LeaderCard({
  leader,
  index,
}: {
  leader: (typeof leaders)[0];
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
      {/* CSS-only hover wrapper keeps transform separate from framer-motion */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: leader.shade,
          borderRadius: 20,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: hovered
            ? "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(0,0,0,0.06)"
            : "0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "box-shadow 0.35s ease, transform 0.35s ease, background 0.35s ease",
          cursor: "default",
          height: "100%",
        }}
      >
        {/* Photo avatar zone */}
        <LeaderAvatar image={leader.image} name={leader.name} hovered={hovered} />

        {/* Text body */}
        <div
          style={{
            padding: "24px 26px 0",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Role pill */}
          <span
            style={{
              display: "inline-block",
              padding: "3px 10px",
              borderRadius: 980,
              background: `${leader.color}15`, // 15% opacity hex
              border: `1px solid ${leader.color}25`,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: leader.color,
              alignSelf: "flex-start",
              marginBottom: 10,
            }}
          >
            {leader.role}
          </span>

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
            {leader.name}
          </h3>

          <p
            style={{
              fontSize: "0.8625rem",
              color: "#6e6e73",
              lineHeight: 1.65,
              flex: 1,
            }}
          >
            {leader.bio}
          </p>
        </div>

        {/* Social links — slide up on hover */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: hovered ? 64 : 0,
            opacity: hovered ? 1 : 0,
            transition: "max-height 0.38s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
          }}
        >
          <div
            style={{
              padding: "16px 26px 20px",
              borderTop: "1px solid rgba(0,0,0,0.06)",
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            {[
              { icon: Linkedin, label: "LinkedIn", href: leader.linkedin },
              { icon: Globe, label: "Website", href: leader.website },
              { icon: Mail, label: "Email", href: `mailto:${leader.email}` },
            ].map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={`${leader.name} — ${label}`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6e6e73",
                  textDecoration: "none",
                  transition: "background 0.2s, color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = leader.color;
                  el.style.color = "#fff";
                  el.style.borderColor = leader.color;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(0,0,0,0.04)";
                  el.style.color = "#6e6e73";
                  el.style.borderColor = "rgba(0,0,0,0.07)";
                }}
              >
                <Icon size={15} strokeWidth={1.75} />
              </motion.a>
            ))}

            <span
              style={{
                marginLeft: "auto",
                fontSize: "0.75rem",
                color: "#aeaeb2",
                fontWeight: 500,
              }}
            >
              Connect →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────── */
export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      style={{
        background: "#f5f5f7",
        padding: "100px 24px 110px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>

        {/* ── Header ─────────────────────────────────────── */}
        <div style={{ marginBottom: 56 }}>
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
            Our Leaders
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
            The people
            <br />
            behind the mission.
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
              maxWidth: 520,
            }}
          >
            Meet the visionaries who built Admire from the ground up — and who
            still show up every day to make it better.
          </motion.p>
        </div>

        {/* ── Cards grid ─────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(228px, 1fr))",
            gap: 20,
          }}
        >
          {leaders.map((leader, i) => (
            <LeaderCard key={leader.name} leader={leader} index={i} />
          ))}
        </div>

        {/* ── Bottom accent line ──────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: 3,
            borderRadius: 999,
            background:
              "linear-gradient(90deg,#a78bfa,#f9a8d4,#fde68a,#6ee7b7,#93c5fd)",
            marginTop: 56,
            transformOrigin: "left",
            maxWidth: 320,
          }}
        />
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 500px) {
          #leadership [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
