import React from "react"
import { useTheme } from "@/hooks/ThemeContext"
import Button from "../Button/Button"
import styles from "./Modal.module.scss"

interface ModalProps {
  message: React.ReactNode
  acceptLabel: string
  onAccept: () => void
}

const Modal = ({ message, acceptLabel, onAccept }: ModalProps) => {
  const { theme } = useTheme()

  return (
    <div className={`${styles["modal"]} ${theme === "light" && styles.light}`}>
      <div className={styles.message}>{message}</div>
      <Button onClick={onAccept}>
        {acceptLabel}  
      </Button>  
    </div>
  )
}

export default Modal