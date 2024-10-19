"use client";

import { motion } from "framer-motion";

export default function MiddleCircuit({ klasa }: { klasa: string }) {
  const viewport = { margin: "-150px 0px -150px 0px", once: true };
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
      let delay: number;
      if (i === -1) {
        delay = i * -0.2;
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
      className={klasa}
      width="507"
      height="507"
      viewBox="0 0 507 507"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={1}
        d="M70 27.2189H205.5L248.5 57.2189H386"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0}
        d="M14 342.219H135L178 372.219H270"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={2}
        d="M70 223.219H304.5L347.5 253.219H421.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={1}
        d="M453.5 455.219H219L176 485.219H102"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={3}
        d="M425 157.219H289.5L250.5 187.219H109"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0}
        d="M414.5 144.219L225.438 144.219L198.938 123.719L198.938 98.2188L177 79.7813L77.5 79.7813"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={1}
        d="M241.497 242.692L302.05 242.692L328.55 262.219L328.55 287.719L350.487 302.719H414.5"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0}
        d="M128 56.7189L193.5 56.7189L231 84.8066L290.5 84.8066"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0}
        cx="291"
        cy="85.2189"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={3}
        d="M58 365.937L123.5 365.937L220.5 436.218L306 436.219"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={2}
        d="M311.5 436.219C311.5 439.256 309.038 441.719 306 441.719C302.962 441.719 300.5 439.256 300.5 436.219C300.5 433.181 302.962 430.719 306 430.719C309.038 430.719 311.5 433.181 311.5 436.219Z"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={2}
        d="M298 267.938L232.5 267.938L195 296.025L135.5 296.025"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={3}
        cx="134"
        cy="296"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={3}
        d="M425 436.026L359.5 436.026L322 407.938L233 407.938"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={3}
        cx="233"
        cy="408.219"
        r="5.5"
        transform="rotate(180 233 408.219)"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0}
        d="M423 335.025L357.5 335.025L306 299.219L246.5 299.219"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0}
        cx="247"
        cy="299.219"
        r="5.5"
        transform="rotate(180 247 299.219)"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={1}
        d="M180 204.219H315.5L358.5 234.219H496"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-1}
        cx="180"
        cy="204.219"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={1}
        d="M183 350.219H318.5L361.5 380.219H499"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-1}
        cx="183"
        cy="350.219"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={3}
        d="M224 113.219H413"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={1}
        d="M297.5 327.219H76"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={1}
        d="M79 107.719L170 107.719"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={1}
        cx="168"
        cy="108.219"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={1}
        d="M76.5 447.719L180 447.719"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={1}
        cx="179"
        cy="448.219"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={2}
        d="M414 276.719L345 276.719"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={2}
        cx="344"
        cy="276.719"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.path
        variants={drawLine}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0}
        d="M420 177.719L290 177.719"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0}
        cx="290"
        cy="177.719"
        r="5.5"
        fill="#00001C"
        stroke="#6EB5A8"
        strokeWidth="3"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-1}
        cx="70.5"
        cy="27.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={1}
        cx="386.5"
        cy="56.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-1}
        cx="122.5"
        cy="56.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-2}
        cx="224.5"
        cy="113.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-2}
        cx="425.5"
        cy="156.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={3}
        cx="108.5"
        cy="187.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-3}
        cx="68.5"
        cy="223.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={2}
        cx="498.5"
        cy="233.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={2}
        cx="422.5"
        cy="252.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-1}
        cx="237.5"
        cy="242.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-1}
        cx="299.5"
        cy="268.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-1}
        cx="299.5"
        cy="326.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0}
        cx="271.5"
        cy="371.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-1}
        cx="8.5"
        cy="342.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-2}
        cx="58.5"
        cy="366.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={2}
        cx="99.5"
        cy="484.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-1}
        cx="425.5"
        cy="334.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={2}
        cx="498.5"
        cy="380.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-2}
        cx="429.5"
        cy="435.5"
        r="8.5"
        fill="#6EB5A8"
      />
      <motion.circle
        variants={drawCircle}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={-1}
        cx="453.5"
        cy="454.5"
        r="8.5"
        fill="#6EB5A8"
      />
    </svg>
  );
}
