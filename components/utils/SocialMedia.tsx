"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SocialMedia({ ...props }: HTMLMotionProps<"div">) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <motion.div
        {...props}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <Link href="https://github.com/CezaryMakowski" target="_blank">
          <Image
            src={"/icons/github.svg"}
            alt="github-profile"
            width={50}
            height={50}
          />
        </Link>
      </motion.div>
    )
  );
}
