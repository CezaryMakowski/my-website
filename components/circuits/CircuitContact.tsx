"use client";

import { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";

export default function CircuitContact({
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
      width="363"
      height="549"
      viewBox="0 0 363 549"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="25"
        height="21"
        transform="translate(338 17)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 50)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 83)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 116)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 149)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 182)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 215)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 248)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 281)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 314)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 347)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 380)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 413)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 446)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 479)"
        fill="#B3E0C7"
      />
      <rect
        width="25"
        height="21"
        transform="translate(338 512)"
        fill="#B3E0C7"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M315.5 27.5H262.5L240 5H36.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M315.5 61H260.5L245.5 76H172"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M315.5 93.5H218.5L196 116H92L65 89"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M315.5 127H80L63 109.5H7"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M315.5 159H275L260.5 174H198.5L165.5 141.5H112"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M315.5 192H281L265 208.5H192L148.5 165H60.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M316 225H80.5L63 242.5H7"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M315.5 258.5H218L195.5 236H92L64.5 263.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M316 291.5H217.5L195.5 314H92L64.5 287.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M315.5 325.5H81L62.5 307H7.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M315.5 358H281.5L264.5 341.5H192L148.5 385.5H61.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M316 391.5H275.5L260 375.5H199L166.5 408.5H112.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M315.5 423H80.5L62.5 441H7.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M316 456.5H218L195.5 434H92.5L65.5 461"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M316 489H260.5L246 474H172"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin, once: true }}
        d="M315.5 522.5H262.5L240.5 544.5H37"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
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
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
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
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
        cy="93.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
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
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
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
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
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
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
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
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
        cy="258.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
        cy="291.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
        cy="325.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
        cy="357.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
        cy="391.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
        cy="422.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
        cy="456.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
        cy="488.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ margin, once: true }}
        cx="323.5"
        cy="522.5"
        r="9"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="34.5"
        cy="4.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="170.5"
        cy="75.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="5.5"
        cy="109.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="109.5"
        cy="141.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="58.5"
        cy="165.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="4.5"
        cy="242.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="63.5"
        cy="264.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="63.5"
        cy="286.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="4.5"
        cy="306.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="59.5"
        cy="385.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="110.5"
        cy="408.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="6.5"
        cy="440.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="64.5"
        cy="462.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="168.5"
        cy="473.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="34.5"
        cy="544.5"
        r="4.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ margin, once: true }}
        cx="63.5"
        cy="87.5"
        r="4.5"
        fill="#6EB5A8"
      />
    </svg>
  );
}
