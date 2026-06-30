"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import { Project, DEFAULT_DEMO_VIDEO } from "@/data/projects";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  project: Project;
}

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
  );
  if (!match) return null;
  return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
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

  const videoUrl = project.demoVideo ?? DEFAULT_DEMO_VIDEO;
  const embedUrl = getYouTubeEmbedUrl(videoUrl);
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
                  {isDefault && (
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

            {/* Video area */}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
