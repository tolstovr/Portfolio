import React, { useEffect } from "react"
import { useTheme } from "@/hooks/ThemeContext"
import { motion, useAnimation, backOut } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styles from "./Timeline.module.scss"

export interface TimelineItemProps {
  date: string
  description: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "fade-down" | "scale-in" | "scale-out"
  delay?: number
  className?: string
  children?: React.ReactNode
}

const variants = {
  "fade-up": {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
  },
  "fade-left": {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
  },
  "fade-right": {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
  },
  "fade-down": {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
  },
  "scale-in": {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 }
  },
  "scale-out": {
      hidden: { opacity: 0, scale: 1.5 },
      visible: { opacity: 1, scale: 1 }
  }
}

const TimelineItem = ({ date, description, animation, delay = 0.25, className, children }: TimelineItemProps) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const { theme } = useTheme()

  useEffect(() => {
      if (inView) {
      controls.start("visible")
      }
  }, [controls, inView])

  const animationProps = {
    ...(animation && {
       ref: ref,
      initial: "hidden",
      animate: controls,
      variants: variants[animation],
      transition: { delay, duration: 0.25, backOut }
    })
  }

  return (
    <motion.div className={`${styles["timeline-item"]} ${theme === "light" && styles.light}`} {...animationProps}>
      <div className={`${styles["timeline-dot"]} ${theme === "light" && styles.light}`}></div>
      <div className={`${styles["timeline-content"]} ${theme === "light" && styles.light}`}>
        <h4>{date}</h4>
        <p>{description}</p>
      </div>
    </motion.div>
  )
}

export default TimelineItem