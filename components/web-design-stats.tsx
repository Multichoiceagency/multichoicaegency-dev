'use client'

import React from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function WebDesignStats() {
  return (
    <section className="py-12 lg:py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <StatItem number={8} text="Jaar ervaring" />
          <StatItem number={500} text="Projecten afgerond" />
          <StatItem number={2} text="1 uur  " />
          <StatItem number={100} text="Klanttevredenheid" />
        </div>
      </div>
    </section>
  )
}

interface StatItemProps {
  number: number
  text: string
}

function StatItem({ number, text }: StatItemProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 md:mb-0"
    >
      <div className="justify-center text-center">
        <motion.h5
          className="text-2xl xs:text-3xl md:text-xllg:text-4xl xl:text-5xl font-bold hover:text-green-700 hover:animate-in-out-10s mb-4"
          aria-label={`${number}+ ${text}`}
          variants={variants}
        >
          <CountUp number={number} />
        </motion.h5>
        <motion.span
          className="text-base lg:text-xl text-gray-700 dark:text-white  hover:animate-in-out-10s"
          variants={variants}
        >
          {text}
        </motion.span>
      </div>
    </motion.div>
  )
}

function CountUp({ number }: { number: number }) {
  const { number: displayNumber } = useCounter(number)
  return <>{displayNumber}+</>
}

function useCounter(end: number) {
  const [number, setNumber] = React.useState(0)

  React.useEffect(() => {
    let startTime: number
    let animationFrame: number

    const updateNumber = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / 2000, 1)
      setNumber(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateNumber)
      }
    }

    animationFrame = requestAnimationFrame(updateNumber)

    return () => cancelAnimationFrame(animationFrame)
  }, [end])

  return { number }
}

