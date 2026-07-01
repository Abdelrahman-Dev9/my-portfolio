"use client";

import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import { GitHubIcon, LinkedInIcon, EmailIcon, DownloadIcon } from "@/components/ui/Icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${COLORS.accentGlow} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">
        <motion.p
          className="font-mono text-sm tracking-[0.25em] uppercase"
          style={{ color: COLORS.accent }}
          {...fadeUp(0.1)}
        >
          React Native & Full-Stack Developer
        </motion.p>

        <motion.h1
          className="font-black leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)", color: COLORS.textPrimary }}
          {...fadeUp(0.2)}
        >
          ABDELRAHMAN
          <br />
          <span style={{ color: COLORS.accent }}>MAHMOUD</span>
          <span style={{ color: COLORS.textMuted }}>.</span>
        </motion.h1>

        <motion.p
          className="text-lg max-w-xl leading-relaxed"
          style={{ color: COLORS.textSecondary }}
          {...fadeUp(0.35)}
        >
          Building cross-platform mobile and web experiences — 15+ apps shipped across
          healthcare, e-commerce, fitness, and productivity.
        </motion.p>

        {/* Social links */}
        <motion.div className="flex items-center gap-4 mt-2" {...fadeUp(0.5)}>
          <SocialButton href="https://github.com/Abdelrahman-Dev9" label="GitHub">
            <GitHubIcon />
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/in/abdelrahman-elnagar-ab602b291" label="LinkedIn">
            <LinkedInIcon />
          </SocialButton>
          <SocialButton href="mailto:abdoelnagar198@gmail.com" label="Email">
            <EmailIcon />
          </SocialButton>
        </motion.div>

        {/* CTA */}
        <motion.div className="flex items-center gap-4 mt-2 flex-wrap justify-center" {...fadeUp(0.6)}>
          <a
            href="#projects"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ backgroundColor: COLORS.accent, color: "#000" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.accentHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            style={{
              color: COLORS.textPrimary,
              border: `1px solid ${COLORS.border}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = COLORS.accent;
              e.currentTarget.style.color = COLORS.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = COLORS.border;
              e.currentTarget.style.color = COLORS.textPrimary;
            }}
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            style={{
              color: COLORS.textSecondary,
              border: `1px solid ${COLORS.border}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = COLORS.accent;
              e.currentTarget.style.color = COLORS.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = COLORS.border;
              e.currentTarget.style.color = COLORS.textSecondary;
            }}
          >
            <DownloadIcon />
            Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        {...fadeUp(0.9)}
      >
        <span className="text-xs tracking-widest uppercase font-mono" style={{ color: COLORS.textMuted }}>
          Scroll
        </span>
        <motion.div
          className="w-0.5 h-8 rounded-full"
          style={{ backgroundColor: COLORS.accent }}
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-11 h-11 rounded-full transition-colors"
      style={{
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
      {children}
    </motion.a>
  );
}
