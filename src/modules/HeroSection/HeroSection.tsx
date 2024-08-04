import React, { useState } from "react"
import { useTheme } from "@/hooks/ThemeContext"
import { useLang } from "@/hooks/LocaleContext"
import Grid from "@/components/Grid/Grid"
import Box from "@/components/Box/Box"
import Button from "@/components/Button/Button"
import { getRows, getColumns } from "@/utils/getRowsColumns"
import { MdBrightness2, MdBrightness7, MdPictureAsPdf } from "react-icons/md"
import { IoLanguage } from "react-icons/io5"
import { FaTelegram, FaGithub, FaBehance, FaGooglePlusG } from "react-icons/fa6"
import { SiVk, SiLichess  } from "react-icons/si"
import styles from "./HeroSection.module.scss"
import { ru, en } from "@/assets/locales"

const HeroSection = () => {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()

  const handleThemeChange = () => {
    toggleTheme()
  }

  const handleLangChange = () => {
    toggleLang()
  }

  const areas1440 = [
    "avatar avatar avatar avatar cv-tg cv-tg cv-tg cv-tg cv-tg settings settings settings settings",
    "avatar avatar avatar avatar info info info info info info socials socials socials",
    "avatar avatar avatar avatar info info info info info info socials socials socials"
  ]

  const areas1024 = [
    "avatar avatar settings settings",
    "avatar avatar socials socials",
    "avatar avatar socials socials",
    "info info info info",
    "info info info info",
    "cv-tg cv-tg cv-tg .",
  ]

  const areas768 = [
    "settings",
    "settings",
    "avatar",
    "avatar",
    "avatar",
    "avatar",
    "info",
    "info",
    "info",
    "info",
    "socials",
    "socials",
    "socials",
    "socials",
    "cv-tg",
    "cv-tg",
    "cv-tg",
  ]

  return (
    <Grid areas={{
      1440: areas1440,
      1024: areas1024,
      768: areas768
    }} rows={{
      1440: getRows(areas1440),
      1024: getRows(areas1024),
      768: getRows(areas768)
    }} columns={{
      1440: getColumns(areas1440),
      1024: getColumns(areas1024),
      768: getColumns(areas768)
    }}>

      <Box gridArea="cv-tg" className={styles["stretch-box"]} animation="fade-up">
        <a href="https://t.me/robertproducts" target="_blank" rel="noreferrer me">
          <Button fullwidth size="large" color="primary" icon={<FaTelegram />}>
            {lang === "ru" ? ru.hero.tgchannel : en.hero.tgchannel }
          </Button>
        </a>
        <a href="/avatar.webp" download>
          <Button fullwidth size="large" icon={<MdPictureAsPdf />}>
            {lang === "ru" ? ru.hero.cv : en.hero.cv }
          </Button>
        </a>
      </Box>

      <Box gridArea="settings" className={`${styles["stretch-box"]} ${styles.nowrap}`} animation="fade-up" delay={0.25}>
        <Button onClick={handleThemeChange} size="large">
          {theme === "dark" ? <MdBrightness2 /> : <MdBrightness7 />}
        </Button>
        <Button onClick={handleLangChange} size="large" icon={<IoLanguage />}>
          {lang === "ru" ? "Русский" : "English" }
        </Button>
      </Box>

      <Box gridArea="avatar" backgroundURL="/avatar.webp" className={styles["avatar-box"]} animation="fade-left" />

      <Box gridArea="info" className={styles["info-box"]} animation="fade-right" delay={0.5}>
        <h1>&#128075;&nbsp;{ lang === "ru" ? ru.hero.title : en.hero.title }</h1>
        <p className={`${theme === "light" && styles.light}`}>{ lang === "ru" ? ru.hero.info : en.hero.info }</p>
      </Box>

      <Box gridArea="socials" animation="fade-right" delay={0.75}>
        <Grid gap="0" rows={{ 1440: 2, 1024: 2, 768: 2 }} columns={{ 1440: 3, 1024: 3, 768: 3 }}
              areas={{1440: ["vk tg github", "gmail behance lichess"], 1024: ["vk tg github", "gmail behance lichess"], 768: ["vk tg github", "gmail behance lichess"]}} className={`${styles["socials-grid"]} ${theme === "light" && styles.light}`}>
          <div>
            <a href="https://vk.com/robertproducts" target="_blank" rel="noreferrer me" style={{gridArea: "vk"}} title={lang === "ru" ? ru.hero.vk : en.hero.vk}>
              <SiVk />
            </a>
          </div>
          <div>
            <a href="https://t.me/im_robertproducts" target="_blank" rel="noreferrer me" style={{gridArea: "tg"} as React.CSSProperties} title={lang === "ru" ? ru.hero.tg : en.hero.tg}>
              <FaTelegram />
            </a>
          </div>
          <div>
            <a href="https://github.com/tolstovr" target="_blank" rel="noreferrer me" style={{gridArea: "github"}} title={lang === "ru" ? ru.hero.github : en.hero.github}>
              <FaGithub />
            </a>
          </div>
          <div>
            <a href="mailto:tolstovrob@gmail.com" target="_blank" rel="noreferrer me" style={{gridArea: "gmail"}} title={lang === "ru" ? ru.hero.gmail : en.hero.gmail}>
              <FaGooglePlusG />
            </a>
          </div>
          <div>
            <a href="https://www.behance.net/roberttolstov" target="_blank" rel="noreferrer me" style={{gridArea: "behance"}} title={lang === "ru" ? ru.hero.behance : en.hero.behance}>
              <FaBehance />
            </a>
          </div>
          <div>
            <a href="https://lichess.org/@/robertproductsru" target="_blank" rel="noreferrer me" style={{gridArea: "lichess"}} title={lang === "ru" ? ru.hero.lichess : en.hero.lichess}>
              <SiLichess />
            </a>
          </div>
        </Grid>
      </Box>

    </Grid>
  )
}

export default HeroSection