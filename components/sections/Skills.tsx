"use client";

import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import { skillCategories } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6" style={{ backgroundColor: COLORS.surface }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="02" title="Skills" />

        <div className="flex flex-col gap-10 mt-16">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.label}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{category.emoji}</span>
                <h3 className="font-semibold text-sm tracking-wide uppercase" style={{ color: COLORS.textSecondary }}>
                  {category.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-lg text-sm font-medium"
                    style={{
                      backgroundColor: COLORS.bg,
                      color: COLORS.textSecondary,
                      border: `1px solid ${COLORS.border}`,
                    }}
                    whileHover={{
                      borderColor: COLORS.accent,
                      color: COLORS.accent,
                      backgroundColor: COLORS.accentGlow,
                    }}
                    transition={{ duration: 0.15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
