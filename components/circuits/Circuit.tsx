"use client";

import { ComponentPropsWithoutRef } from "react";
import styles from "./Circuit.module.css";
import { motion } from "framer-motion";

interface circuitProps extends ComponentPropsWithoutRef<"svg"> {
  side: string;
}

export default function Circuit({ side, ...props }: circuitProps) {
  const margin = "-150px 0px -150px 0px";
  const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = i * 0.2;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const drawCircle = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => {
      let delay;
      if (i === -1) {
        delay = i * -0.2 - 0.2;
      } else {
        delay = 1 + i * 0.2;
      }
      return {
        scale: 1,
        opacity: 1,
        transition: {
          scale: { delay },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <svg
      {...props}
      className={`${styles.circuit} ${styles[side]} ${props.className}`}
      width="507"
      height="480"
      viewBox="0 0 507 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.line
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        y1="-1.5"
        x2="82"
        y2="-1.5"
        transform="matrix(-1 0 0 1 155 98.9684)"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={2}
        d="M291.091 71.8628L232.485 71.8628L195.485 43.8515L124.985 43.8515"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.line
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        y1="-1.5"
        x2="129"
        y2="-1.5"
        transform="matrix(-1 8.74228e-08 8.74228e-08 1 420 165.968)"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={3}
        d="M499.722 220.567L363.169 220.567L319.67 190.064L181.17 190.064"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.line
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        y1="-1.5"
        x2="57"
        y2="-1.5"
        transform="matrix(-1 0 0 1 410 264.968)"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        d="M298.995 254.468L230.5 254.468L193.5 282.468L135 282.468"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        d="M424.654 320.909L358.5 320.909L307.5 285.385L247 285.385"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        d="M498.313 366.464L362.296 366.464L319.296 336.464L182.796 336.464"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={3}
        d="M428.646 422.799L360 422.799L323 394.777L233 394.777"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={2}
        d="M306.5 422.968H222.5L125.5 351.968L60 351.968"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.line
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        y1="-1.5"
        x2="106"
        y2="-1.5"
        transform="matrix(-1 0 0 1 179 435.968)"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={-1}
        cx="291"
        cy="71.6796"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={-1}
        cx="311.5"
        cy="422.68"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="137"
        cy="282"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={2}
        cx="233"
        cy="394.68"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="247"
        cy="285.68"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={2}
        cx="180"
        cy="189.968"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="183"
        cy="336.68"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={-1}
        cx="155"
        cy="97.9684"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={-1}
        cx="179"
        cy="434.68"
        r="5.5"
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
        cx="353"
        cy="263"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="291"
        cy="164"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={3}
        cx="70.5"
        cy="13.4684"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={2}
        cx="122.5"
        cy="44.4684"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        cx="223.5"
        cy="99.4683"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={2}
        cx="108.5"
        cy="173.468"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={2}
        cx="68.5"
        cy="209.961"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={2}
        cx="237.5"
        cy="228.961"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={-1}
        cx="299.5"
        cy="254.961"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={-1}
        cx="299.5"
        cy="312.961"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={-1}
        cx="271.5"
        cy="357.961"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        cx="59.5"
        cy="352.468"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={2}
        cx="99.5"
        cy="470.961"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={3}
        d="M453 441.468L217.5 441.468L175 470.968L102.5 470.968"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={2}
        d="M270.606 358.784L180 358.784L138 329.272L12 329.272"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.line
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        y1="-1.5"
        x2="200"
        y2="-1.5"
        transform="matrix(-1 0 0 1 298 314.968)"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        d="M413.722 288.685L351.638 288.685L333.138 276.178L333.138 251.678L302.638 229.178L237.638 229.178"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={2}
        d="M422.101 238.852L350 238.852L307 208.842L69 209.842"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={2}
        d="M425.5 143.347L286.01 143.347L247.51 173.347L110.51 173.347"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={1}
        d="M408.525 128.962L223.025 128.962L201.525 111.962L201.525 86.9617L173.525 63.9617L72.5246 63.9617"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.line
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={0}
        y1="-1.5"
        x2="186"
        y2="-1.5"
        transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 411 100.968)"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        custom={3}
        d="M385.309 43.733L247.5 43.733L206.76 13.2306L71.26 13.2306"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
    </svg>
  );
}
