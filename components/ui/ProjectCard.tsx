"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import { Project } from "@/data/projects";
import VideoModal from "./VideoModal";
import { GitHubIcon, ExternalLinkIcon } from "./Icons";

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
                <GitHubIcon className="w-4 h-4" />
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
