"use client";

import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";

interface SectionTitleProps {
  number: string;
  title: string;
}

export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p
        className="font-mono text-sm tracking-[0.2em] uppercase"
        style={{ color: COLORS.accent }}
      >
        {number}
      </p>
      <h2 className="text-4xl font-black text-white">{title}</h2>
      <div
        className="w-12 h-0.5 rounded-full"
        style={{ backgroundColor: COLORS.accent }}
      />
    </motion.div>
  );
}
