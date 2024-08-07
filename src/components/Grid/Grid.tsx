import React from "react"
import styles from "./Grid.module.scss"

interface GridProps {
  gap?: string

  rows: {
    1440: string | number
    1024: string | number
    768: string | number
  }

  columns: {
    1440: string | number
    1024: string | number
    768: string | number
  }

  areas: {
    1440: string[]
    1024: string[]
    768: string[]
  }

  className?: string
  children?: React.ReactNode
}

const Grid = ({ gap = "2rem", rows, columns, areas, className, children }: GridProps) => {
  const gridProps = {
    className: `${styles.grid} ${className}`,
    style: {
      gap: gap,
      "--rows-1440": `repeat(${rows[1440]}, 1fr)`,
      "--rows-1024": `repeat(${rows[1024]}, 1fr)`,
      "--rows-768": `repeat(${rows[768]}, 1fr)`,
      "--columns-1440": `repeat(${columns[1440]}, 1fr)`,
      "--columns-1024": `repeat(${columns[1024]}, 1fr)`,
      "--columns-768": `repeat(${columns[768]}, 1fr)`,
      "--areas-1440": `${areas[1440].map(line => `"${line}"`).join(" ")}`,
      "--areas-1024": `${areas[1024].map(line => `"${line}"`).join(" ")}`,
      "--areas-768": `${areas[768].map(line => `"${line}"`).join(" ")}`} as React.CSSProperties
  }

  return (
    <div {...gridProps}>
      {children}
    </div>
  )
}

export default Grid