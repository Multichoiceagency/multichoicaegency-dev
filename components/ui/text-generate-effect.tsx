"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComplete(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const renderWords = () => {
    return words.split(" ").map((word, idx) => {
      return (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={complete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: 0.4,
            delay: complete ? idx * 0.1 : 0,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block"
        >
          {word}{" "}
        </motion.span>
      );
    });
  };

  return (
    <div className={cn("font-light text-white/75", className)}>
      {renderWords()}
    </div>
  );
};