"use client";

import { motion } from "framer-motion";

export default function TypeEffect({ children }: { children: string }) {
  const words = children.split(" ");
  const spacedWords = words.map((word, i) => {
    if (i !== words.length - 1) return word + " ";
    return word;
  });

  return (
    <>
      {spacedWords.map((word) =>
        Array.from(word).map((letter, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.01, delay: 0.1 * i }}
            key={i}
          >
            {letter}
          </motion.span>
        ))
      )}
    </>
  );
}
