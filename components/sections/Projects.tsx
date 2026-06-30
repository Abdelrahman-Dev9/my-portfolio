"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "@/constants/colors";
import { projects, ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { SectionTitle } from "./About";

type Filter = "all" | ProjectCategory;

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Mobile", value: "mobile" },
  { label: "Web", value: "web" },
  { label: "Backend", value: "backend" },
];

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 px-6" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionTitle number="03" title="Projects" />
          <p className="font-mono text-sm" style={{ color: COLORS.textMuted }}>
            {projects.length} projects built
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mt-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                active === f.value
                  ? {
                      backgroundColor: COLORS.accent,
                      color: "#000",
                      border: `1px solid ${COLORS.accent}`,
                    }
                  : {
                      backgroundColor: "transparent",
                      color: COLORS.textSecondary,
                      border: `1px solid ${COLORS.border}`,
                    }
              }
              onMouseEnter={(e) => {
                if (active !== f.value) {
                  e.currentTarget.style.borderColor = COLORS.accent;
                  e.currentTarget.style.color = COLORS.accent;
                }
              }}
              onMouseLeave={(e) => {
                if (active !== f.value) {
                  e.currentTarget.style.borderColor = COLORS.border;
                  e.currentTarget.style.color = COLORS.textSecondary;
                }
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid — flexbox, no grid */}
        <motion.div layout className="flex flex-wrap gap-6 mt-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
