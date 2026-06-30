"use client";

import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";

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
        <motion.div className="flex items-center gap-4 mt-2" {...fadeUp(0.6)}>
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

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
