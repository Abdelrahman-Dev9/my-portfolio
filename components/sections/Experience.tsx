"use client";

import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import { experiences } from "@/data/experience";
import { SectionTitle } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6" style={{ backgroundColor: COLORS.surface }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="04" title="Experience" />

        <div className="flex flex-col gap-8 mt-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="flex flex-col lg:flex-row gap-6 lg:gap-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Period column */}
              <div className="lg:w-48 flex-shrink-0">
                <span
                  className="font-mono text-sm font-semibold"
                  style={{ color: COLORS.accent }}
                >
                  {exp.period}
                </span>
                <p className="text-sm mt-1" style={{ color: COLORS.textMuted }}>
                  {exp.type}
                </p>
              </div>

              {/* Content column */}
              <div
                className="flex-1 rounded-xl p-6"
                style={{
                  backgroundColor: COLORS.bg,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <h3 className="text-white font-bold text-xl">{exp.role}</h3>
                <p className="mt-0.5 font-medium" style={{ color: COLORS.accent }}>
                  {exp.company}
                </p>
                <ul className="flex flex-col gap-3 mt-5">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.accent }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
