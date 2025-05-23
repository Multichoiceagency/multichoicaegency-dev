"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.1,
          delay: stagger(0.1),
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {words.map((word, idx) => {
          return (
            <motion.span
              initial={{
                opacity: 0,
              }}
              key={`${word}-${idx}`}
              className={cn("text-white", word.className)}
            >
              {word.text.split("").map((char, charIdx) => (
                <span
                  key={charIdx}
                  className={cn(
                    "text-4xl font-bold md:text-5xl lg:text-6xl",
                    className
                  )}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="text-center">
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block h-12 w-[2px] translate-y-1 bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};