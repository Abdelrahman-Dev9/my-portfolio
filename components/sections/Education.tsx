"use client";

import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import { SectionTitle } from "./About";

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Systems",
  "Software Engineering",
  "Computer Networks",
];

export default function Education() {
  return (
    <section id="education" className="py-28 px-6" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="05" title="Education" />

        <motion.div
          className="mt-16 rounded-2xl p-8 flex flex-col lg:flex-row gap-8 lg:items-start"
          style={{
            backgroundColor: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: COLORS.accentGlow, border: `1px solid ${COLORS.accent}30` }}
              >
                🎓
              </div>
              <div>
                <p className="font-mono text-sm" style={{ color: COLORS.accent }}>
                  2021 – 2025
                </p>
              </div>
            </div>
            <h3 className="text-white font-bold text-2xl leading-snug">
              Bachelor of Science
              <br />
              <span style={{ color: COLORS.textSecondary }}>Computer Science & Informatics</span>
            </h3>
            <p className="mt-2 font-medium" style={{ color: COLORS.textMuted }}>
              Suez Canal University — Faculty of Computers and Informatics
            </p>
          </div>

          {/* Right — coursework */}
          <div className="lg:w-72">
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: COLORS.textMuted }}>
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="text-sm px-3 py-1.5 rounded-lg"
                  style={{
                    backgroundColor: COLORS.bg,
                    color: COLORS.textSecondary,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
