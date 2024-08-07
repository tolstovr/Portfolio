import React from "react"
import { useTheme } from "@/hooks/ThemeContext"
import styles from "./Button.module.scss"

interface ButtonProps {
  variant?: "fill" | "outline"
  size?: "small" | "medium" | "large"
  color?: "default" | "primary" | "secondary" | "error" | "success" | "warning"
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean
  fullwidth?: boolean
  round?: boolean
  children?: React.ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => {
  const { theme } = useTheme()

  const buttonProps = {
    className: `${styles.button} ${props.variant ? styles[props.variant] : styles.fill}
                ${props.size ? styles[props.size] : styles.medium} ${props.fullwidth && styles.fullwidth }
                ${props.round && styles.round} ${props.color ? styles[props.color] : styles.default}
                ${theme === "light" && styles.light}`,
    disabled: props.disabled,
    onClick: props.onClick
  }

  return (
    <button {...buttonProps}>
      {props.icon && <span className={styles.icon}>{props.icon}</span>}
      {children}
    </button>
  )
}

export default Button