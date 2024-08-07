import React, { useEffect } from "react"
import { useTheme } from "@/hooks/ThemeContext"
import TimelineItem, { TimelineItemProps } from "./TimelineItem"
import styles from "./Timeline.module.scss"

interface TimelineProps {
  events: TimelineItemProps[]
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

const Timeline = ({ events }: TimelineProps) => {
  const { theme } = useTheme()

  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <TimelineItem {...event} key={index} animation="fade-up" delay={0.5 + index * 0.25} />
      ))}
    </div>
  )
}

export default Timeline
