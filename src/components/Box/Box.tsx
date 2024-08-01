import React from "react"
import styles from "./Box.module.scss"

interface BoxProps {
  backgroundURL?: string
  backgroundColor?: string
  gridArea: string
  className?: string
  children?: React.ReactNode
}

const Box = ({ backgroundURL, backgroundColor, gridArea, className, children }: BoxProps) => {
  return (
    <div className={`${styles.box} ${className ?? ""}`} style={{
        ...(backgroundURL ? {background: backgroundURL} : backgroundColor ? {background: backgroundColor} : {}),
        gridArea: gridArea }}>
        {children}
    </div>
  )
}

export default Box