import React from "react"
import { useTheme } from "@/hooks/ThemeContext"
import { useLang } from "@/hooks/LocaleContext"
import { getLang } from "@/utils/locales"
import { MdBrightness2, MdBrightness7 } from "react-icons/md"
import { IoLanguage } from "react-icons/io5"
import Box from "@/components/Box/Box"
import Button from "@/components/Button/Button"
import styles from "./HeroSection.module.scss"

const SettingsBox = () => {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()

  return (
    <Box gridArea="settings" className={`${styles["stretch-box"]} ${styles.nowrap}`} animation="fade-up" delay={0.25}>
      <Button onClick={toggleTheme} size="large">
          {theme === "dark" ? <MdBrightness2 /> : <MdBrightness7 />}
      </Button>
      <Button onClick={toggleLang} size="large" icon={<IoLanguage />}>
          {getLang(lang).hero.lang}
      </Button>
    </Box>
  )
}

export default SettingsBox