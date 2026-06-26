"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = [
  "All",
  "Training",
  "Workshops",
  "Events",
  "Team",
  "Awards",
];

const galleryItems = [
  { id: 1, category: "Training", title: "Leadership Training Session", aspect: "tall", color: "#2563EB" },
  { id: 2, category: "Events", title: "Annual Conference 2024", aspect: "wide", color: "#7C3AED" },
  { id: 3, category: "Team", title: "Team Building Activity", aspect: "square", color: "#059669" },
  { id: 4, category: "Workshops", title: "Marketing Workshop", aspect: "square", color: "#D97706" },
  { id: 5, category: "Awards", title: "Excellence Awards Ceremony", aspect: "wide", color: "#DC2626" },
  { id: 6, category: "Training", title: "Sales Training Program", aspect: "tall", color: "#0891B2" },
  { id: 7, category: "Events", title: "Entrepreneur Meetup", aspect: "square", color: "#EC4899" },
  { id: 8, category: "Team", title: "Office Culture", aspect: "wide", color: "#2563EB" },
  { id: 9, category: "Workshops", title: "Management Workshop", aspect: "square", color: "#7C3AED" },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding relative"
      style={{ background: "var(--color-bg)" }}
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
              Our Moments
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
            Gallery
          </motion.h2>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-7 py-3 text-sm font-semibold transition-all duration-300"
              style={{
                fontFamily: "var(--font-heading)",
                borderRadius: "20px",
                margin: "10px",
                padding: "5px",
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))"
                    : "var(--color-card)",
                color: activeCategory === cat ? "white" : "var(--color-text-light)",
                border: `1px solid ${activeCategory === cat
                  ? "var(--color-accent)"
                  : "var(--color-border)"
                  }`,
                cursor: "pointer",
                boxShadow: activeCategory === cat ? "var(--shadow-accent)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl overflow-hidden cursor-pointer group relative ${item.aspect === "tall" ? "row-span-2" : ""
                  } ${item.aspect === "wide" ? "md:col-span-2" : ""}`}
                style={{
                  minHeight: item.aspect === "tall" ? 360 : 180,
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                  border: "1px solid var(--color-border-light)",
                }}
                onClick={() => setSelectedItem(item)}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{
                      width: 64,
                      height: 64,
                      background: `${item.color}30`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: item.color,
                      }}
                    >
                      📷
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end"
                  style={{
                    background: `linear-gradient(to top, ${item.color}E0, transparent)`,
                  }}
                >
                  <div className="p-4">
                    <span
                      className="inline-block px-2.5 py-1 rounded-full mb-2"
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        background: "rgba(255,255,255,0.2)",
                        color: "white",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {item.category}
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: "white",
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative rounded-3xl overflow-hidden"
              style={{
                maxWidth: 700,
                width: "100%",
                aspectRatio: "16/10",
                background: `linear-gradient(135deg, ${selectedItem.color}30, ${selectedItem.color}60)`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div
                  className="flex items-center justify-center rounded-2xl mb-4"
                  style={{
                    width: 80,
                    height: 80,
                    background: `${selectedItem.color}40`,
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>📷</span>
                </div>
                <span
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    background: `${selectedItem.color}20`,
                    color: selectedItem.color,
                    fontFamily: "var(--font-heading)",
                    border: `1px solid ${selectedItem.color}30`,
                  }}
                >
                  {selectedItem.category}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--color-primary)",
                  }}
                >
                  {selectedItem.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 flex items-center justify-center rounded-full"
                style={{
                  width: 40,
                  height: 40,
                  background: "rgba(255,255,255,0.9)",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-text)",
                }}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
