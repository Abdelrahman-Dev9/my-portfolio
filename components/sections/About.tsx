"use client";

import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import SectionTitle from "@/components/ui/SectionTitle";

const stats = [
  { value: "15+", label: "Apps Shipped" },
  { value: "2+", label: "Years Building" },
  { value: "2", label: "Platforms (iOS & Android)" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6"
      style={{ backgroundColor: COLORS.bg }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="01" title="About Me" />

        <div className="flex flex-col lg:flex-row gap-16 mt-16 items-start">
          {/* Text */}
          <motion.div
            className="flex-1 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p
              className="text-lg leading-relaxed"
              style={{ color: COLORS.textSecondary }}
            >
              I&apos;m a React Native and Full-Stack Developer based in
              Mansoura, Egypt — a recent Computer Science graduate with a strong
              portfolio of 15+ cross-platform mobile and web applications.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: COLORS.textSecondary }}
            >
              I&apos;m proficient in TypeScript, React Native (Expo), Next.js,
              and NestJS, with hands-on experience integrating RESTful APIs,
              managing databases with Prisma ORM and PostgreSQL, and deploying
              production applications to Vercel.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: COLORS.textSecondary }}
            >
              I write clean, testable, and maintainable code with a consistent
              focus on performance, user experience, and cross-platform
              compatibility. Actively seeking a collaborative software
              development role to contribute to real-world products.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 px-6 py-4 rounded-xl"
                  style={{
                    backgroundColor: COLORS.surface,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <span
                    className="text-3xl font-black"
                    style={{ color: COLORS.accent }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm" style={{ color: COLORS.textMuted }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo placeholder */}
          <motion.div
            className="lg:w-72 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "3/4",
                border: `1px solid ${COLORS.border}`,
                boxShadow: `0 0 40px ${COLORS.accentGlow}`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.jpg"
                alt="Abdelrahman Mahmoud"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { default as SectionTitle } from "@/components/ui/SectionTitle";
