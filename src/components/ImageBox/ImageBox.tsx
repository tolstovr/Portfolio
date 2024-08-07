"use client"
import React, { useEffect } from "react"
import { useTheme } from "@/hooks/ThemeContext"
import { motion, useAnimation, backOut } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styles from "./ImageBox.module.scss"
import Image from "next/image"

interface BoxProps {
  src: string
  alt?: string
  width?: number
  height?: number
  gridArea: string
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

const Box = ({ src, alt = "", width, height, gridArea, animation, delay = 0, className, children }: BoxProps) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const imageBoxProps = {
    className: `${styles["image-box"]} ${className ?? ""}`,
    style: {
      gridArea: gridArea,
      position: "relative",
    } as React.CSSProperties,
    ...(animation && {
      ref: ref,
      initial: "hidden",
      animate: controls,
      variants: variants[animation],
      transition: { delay, duration: 0.25, backOut }
    })
  }

  return (
    animation ? <motion.div {...imageBoxProps}>
      <img src={src} alt={alt} />
    </motion.div> : <div {...imageBoxProps}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Box