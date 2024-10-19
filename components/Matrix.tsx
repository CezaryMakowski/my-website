"use client";

import styles from "./Matrix.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Matrix() {
  const ref = useRef(null);
  const margin = "0px 0px -200px 0px";
  const fall = {
    initial: { y: "-100%" },
    falling: (i: number) => {
      const duration = 3.5 + i * 0.4;
      return {
        y: 0,
        transition: {
          y: { duration },
        },
      };
    },
  };

  return (
    <motion.div ref={ref} className={styles.matrix}>
      <motion.div
        variants={fall}
        custom={0}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-1.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={4}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-2.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={2}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-3.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={3}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-4.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={1}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-5.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={0}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-6.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={3}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-7.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={2}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-8.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={3}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-9.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={2}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-10.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={0}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-11.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={0}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-12.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={1}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-13.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={4}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-14.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <motion.div
        variants={fall}
        custom={0}
        initial="initial"
        whileInView="falling"
        viewport={{ once: true, margin }}
      >
        <Image
          src={"/matrix/matrix-3.png"}
          alt="matrix-web-design"
          width={100}
          height={1000}
        />
      </motion.div>
      <div className={styles.gradient}></div>
    </motion.div>
  );
}
