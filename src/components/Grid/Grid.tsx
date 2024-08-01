import React from "react"
import styles from "./Grid.module.scss"

interface GridProps {
  gap?: string

  rows: {
    1440: string | number
    1024: string | number
    512: string | number
  }

  columns: {
    1440: string | number
    1024: string | number
    512: string | number
  }

  areas: {
    1440: string[]
    1024: string[]
    512: string[]
  }

  children?: React.ReactNode
}

const Grid = ({ gap, rows, columns, areas, children }: GridProps) => {
  return (
    <div className={styles.grid} style={{
      gap: gap ?? "1rem",
      "--rows-1440": `repeat(${rows[1440]}, 1fr)`,
      "--rows-1024": `repeat(${rows[1024]}, 1fr)`,
      "--rows-512": `repeat(${rows[512]}, 1fr)`,
      "--columns-1440": `repeat(${columns[1440]}, 1fr)`,
      "--columns-1024": `repeat(${columns[1024]}, 1fr)`,
      "--columns-512": `repeat(${columns[512]}, 1fr)`,
      "--areas-1440": `${areas[1440].map(line => `"${line}"`).join(" ")}`,
      "--areas-1024": `${areas[1024].map(line => `"${line}"`).join(" ")}`,
      "--areas-512": `${areas[512].map(line => `"${line}"`).join(" ")}`} as React.CSSProperties}>
      {children}
    </div>
  )
}

export default Grid