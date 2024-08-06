import React from "react"
import { useTheme } from "@/hooks/ThemeContext"
import { curLang } from "@/utils/locales"
import Box from "@/components/Box/Box"
import styles from "./HeroSection.module.scss"

const InfoBoxes = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
    <Box gridArea="avatar" backgroundURL="/avatar.webp" className={styles["avatar-box"]} animation="fade-left" />
    <Box gridArea="info" className={styles["info-box"]} animation="fade-right" delay={0.5}>
      <h1>&#128075;&nbsp;{curLang().hero.title}</h1>
      <p className={`${theme === "light" && styles.light}`}>{curLang().hero.info}</p>
    </Box>
    </>
  )
}

export default InfoBoxes