"use client";

import { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";

export default function CircuitCezary({
  ...props
}: ComponentPropsWithoutRef<"svg">) {
  const margin = "-50px 0px -50px 0px";
  const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 2, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    },
  };

  const drawCircle = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => {
      let delay;
      if (i === 0) delay = 0;
      if (i === 1) delay = 1;
      return {
        scale: 1,
        opacity: 1,
        transition: {
          scale: { delay, type: "spring", duration: 0.5 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <svg
      {...props}
      width="331"
      height="285"
      viewBox="0 0 331 285"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M312 126.5H76.5L59.5 109H4"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M312 160H278.5L261.5 143H188.5L145 187H57"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M312 193H272.5L256.5 177H195.5L162.5 210H108.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M312 225.5H274L251 249H137L118.5 230H70"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M312 258.5H259L237 281H33.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M312 93H215L191.5 116H89L61.5 88.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M312 60.5H257.5L242.5 75.5H168.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M312.5 27.5H260L237 5H33"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="32.5"
        cy="4.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="168.5"
        cy="75.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="61.5"
        cy="88.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="4.5"
        cy="108.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="56.5"
        cy="186.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="108.5"
        cy="209.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="68.5"
        cy="230.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="33.5"
        cy="280.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        cx="320.5"
        cy="27.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        cx="320.5"
        cy="60.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        cx="320.5"
        cy="92.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        cx="320.5"
        cy="126.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        cx="320.5"
        cy="159.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        cx="320.5"
        cy="192.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        cx="320.5"
        cy="225.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        cx="320.5"
        cy="258.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
    </svg>
  );
}
