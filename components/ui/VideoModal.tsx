"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import { Project, DEFAULT_DEMO_VIDEO } from "@/data/projects";
import { getYouTubeEmbedUrl, getGoogleDriveEmbedUrl } from "@/lib/videoUtils";
import { GitHubIcon } from "@/components/ui/Icons";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  project: Project;
}

export default function VideoModal({ open, onClose, project }: VideoModalProps) {
  const [key, setKey] = useState(0);

  // Reset iframe on each open so autoplay fires fresh
  useEffect(() => {
    if (open) setKey((k) => k + 1);
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const isBackend = project.category === 'backend';
  const videoUrl = project.demoVideo ?? DEFAULT_DEMO_VIDEO;
  const embedUrl = getYouTubeEmbedUrl(videoUrl) ?? getGoogleDriveEmbedUrl(videoUrl);
  const isDefault = !project.demoVideo;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{ backgroundColor: "rgba(0,0,0,0.88)", backdropFilter: "blur(6px)" }}
        >
          <motion.div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: `1px solid ${COLORS.border}` }}
            >
              <div className="flex flex-col gap-0.5">
                <h3 className="text-white font-bold text-lg">{project.name}</h3>
                <p className="text-sm flex items-center gap-2" style={{ color: COLORS.textSecondary }}>
                  {project.tagline}
                  {!isBackend && isDefault && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor: COLORS.accentGlow,
                        color: COLORS.accent,
                        border: `1px solid ${COLORS.accent}30`,
                      }}
                    >
                      Default demo
                    </span>
                  )}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 rounded-full transition-colors flex-shrink-0"
                style={{ color: COLORS.textSecondary }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.surfaceHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video area / No-demo state */}
            {isBackend ? (
              <div
                className="flex flex-col items-center justify-center gap-5 px-8 py-16"
                style={{ backgroundColor: COLORS.surfaceHover }}
              >
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full"
                  style={{ backgroundColor: COLORS.accentGlow, border: `1px solid ${COLORS.accent}30` }}
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: COLORS.accent }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <div className="text-center flex flex-col gap-1.5">
                  <p className="text-white font-semibold text-lg">No demo available</p>
                  <p className="text-sm" style={{ color: COLORS.textSecondary }}>
                    This is a backend API — explore the source code instead.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
                    style={{ backgroundColor: COLORS.accent, color: "#fff" }}
                  >
                    <GitHubIcon className="w-4 h-4" />
                    View Repository
                  </a>
                  <a
                    href="https://github.com/Abdelrahman-Dev9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
                    style={{ backgroundColor: COLORS.surfaceHover, color: COLORS.textSecondary, border: `1px solid ${COLORS.border}` }}
                  >
                    All Repositories
                  </a>
                </div>
              </div>
            ) : (
              <div className="relative w-full" style={{ aspectRatio: "16/9", backgroundColor: "#000" }}>
                {embedUrl ? (
                  <iframe
                    key={key}
                    src={embedUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${project.name} demo`}
                  />
                ) : (
                  <video
                    key={key}
                    src={videoUrl}
                    controls
                    autoPlay
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
