"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import SectionTitle from "@/components/ui/SectionTitle";
import { GitHubIcon, LinkedInIcon, CopyIcon, CheckIcon } from "@/components/ui/Icons";

const EMAIL = "abdoelnagar198@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6" style={{ backgroundColor: COLORS.surface }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="06" title="Let's Work Together" />

        <div className="mt-16 flex flex-col items-start gap-8 max-w-xl">
          <motion.p
            className="text-lg leading-relaxed"
            style={{ color: COLORS.textSecondary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I&apos;m open to freelance projects and full-time opportunities. If you have a project
            that needs a dedicated developer or a team you&apos;d like me to join — reach out.
          </motion.p>

          {/* Email */}
          <motion.div
            className="flex items-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="font-mono text-lg font-semibold text-white">{EMAIL}</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: copied ? COLORS.accentGlow : COLORS.bg,
                color: copied ? COLORS.accent : COLORS.textSecondary,
                border: `1px solid ${copied ? COLORS.accent : COLORS.border}`,
              }}
            >
              {copied ? (
                <>
                  <CheckIcon />
                  Copied!
                </>
              ) : (
                <>
                  <CopyIcon />
                  Copy
                </>
              )}
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactLink href="https://github.com/Abdelrahman-Dev9" label="GitHub">
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </ContactLink>
            <ContactLink href="https://www.linkedin.com/in/abdelrahman-elnagar-ab602b291" label="LinkedIn">
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </ContactLink>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8" style={{ borderTop: `1px solid ${COLORS.border}` }}>
        <p className="text-sm" style={{ color: COLORS.textMuted }}>
          © 2025 Abdelrahman Mahmoud Elnagar. Built with Next.js & Framer Motion.
        </p>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
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
      {children}
    </a>
  );
}
