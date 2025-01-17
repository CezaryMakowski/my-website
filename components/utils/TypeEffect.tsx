"use client";

import { motion } from "framer-motion";

export default function TypeEffect({
  children,
}: {
  children: string | string[];
}) {
  return (
    <>
      {Array.from(children).map((letter, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.01, delay: 0.1 * i }}
          key={i}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
}
