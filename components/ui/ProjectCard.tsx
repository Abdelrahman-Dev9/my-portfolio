"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import { Project } from "@/data/projects";
import VideoModal from "./VideoModal";

const categoryGradient: Record<string, string> = {
  mobile: "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(91,33,182,0.10) 100%)",
  web: "linear-gradient(135deg, rgba(0,168,255,0.20) 0%, rgba(0,100,180,0.08) 100%)",
  backend: "linear-gradient(135deg, rgba(16,185,129,0.20) 0%, rgba(5,150,105,0.08) 100%)",
};

const categoryLabel: Record<string, string> = {
  mobile: "Mobile",
  web: "Web",
  backend: "Backend",
};

export default function ProjectCard({ project }: { project: Project }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="flex flex-col rounded-xl overflow-hidden"
        style={{ backgroundColor: COLORS.surface, border: `1px solid ${COLORS.border}` }}
        whileHover={{
          borderColor: COLORS.accent,
          boxShadow: `0 0 24px ${COLORS.accentGlow}, 0 8px 32px rgba(0,0,0,0.4)`,
          y: -5,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Thumbnail */}
        <div
          className="relative w-full cursor-pointer"
          style={{ aspectRatio: "16/9", background: categoryGradient[project.category] }}
          onClick={() => setModalOpen(true)}
        >
          {project.thumbnail && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.thumbnail}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="flex items-center justify-center w-14 h-14 rounded-full"
              style={{
                backgroundColor: COLORS.accentGlow,
                border: `1px solid ${COLORS.accent}55`,
                backdropFilter: "blur(4px)",
              }}
              whileHover={{ scale: 1.15, backgroundColor: COLORS.accentGlowStrong }}
              transition={{ duration: 0.15 }}
            >
              <svg className="w-6 h-6 ml-0.5" viewBox="0 0 24 24" fill="none" style={{ color: COLORS.accent }}>
                <path d="M5 3l14 9-14 9V3z" fill="currentColor" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Badge */}
          <span
            className="self-start text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              color: COLORS.accent,
              backgroundColor: COLORS.accentGlow,
              border: `1px solid ${COLORS.accent}30`,
            }}
          >
            {categoryLabel[project.category]}
          </span>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-white font-bold text-lg leading-tight">{project.name}</h3>
            <p className="text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
              {project.description}
            </p>
          </div>

          {/* Tech stack */}
          <div
            className="flex flex-wrap gap-1.5 pt-3 mt-auto"
            style={{ borderTop: `1px solid ${COLORS.border}` }}
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  backgroundColor: COLORS.surfaceHover,
                  color: COLORS.textMuted,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-1">
            {project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm transition-colors"
                style={{ color: COLORS.textSecondary }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.textSecondary)}
              >
                <GitHubIcon />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm transition-colors"
                style={{ color: COLORS.textSecondary }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.textSecondary)}
              >
                <ExternalLinkIcon />
                Live
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <VideoModal open={modalOpen} onClose={() => setModalOpen(false)} project={project} />
    </>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
