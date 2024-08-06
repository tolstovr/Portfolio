import React from "react"
import { curLang } from "@/utils/locales"
import { useTheme } from "@/hooks/ThemeContext"
import Box from "@/components/Box/Box"
import Grid from "@/components/Grid/Grid"
import Button from "@/components/Button/Button"
import { FaTelegram, FaGithub, FaBehance, FaGooglePlusG } from "react-icons/fa6"
import { MdPictureAsPdf } from "react-icons/md"
import { SiVk, SiLichess  } from "react-icons/si"
import styles from "./HeroSection.module.scss"

const SocialsBoxes = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Box gridArea="cv-tg" className={styles["stretch-box"]} animation="fade-up">
        <a href="https://t.me/robertproducts" target="_blank" rel="noreferrer me">
          <Button fullwidth size="large" color="primary" icon={<FaTelegram />}>
            {curLang().hero.tgchannel}
          </Button>
        </a>
        <a href="/avatar.webp" download>
          <Button fullwidth size="large" icon={<MdPictureAsPdf />}>
            {curLang().hero.cv}
          </Button>
        </a>
      </Box>

      <Box gridArea="socials" animation="fade-right" delay={0.75}>
        <Grid gap="0" rows={{ 1440: 2, 1024: 2, 768: 2 }} columns={{ 1440: 3, 1024: 3, 768: 3 }}
              areas={{1440: ["vk tg github", "gmail behance lichess"], 1024: ["vk tg github", "gmail behance lichess"], 768: ["vk tg github", "gmail behance lichess"]}} className={`${styles["socials-grid"]} ${theme === "light" && styles.light}`}>
          <div>
            <a href="https://vk.com/robertproducts" target="_blank" rel="noreferrer me" style={{gridArea: "vk"}} title={curLang().hero.vk}>
              <SiVk />
            </a>
          </div>
          <div>
            <a href="https://t.me/im_robertproducts" target="_blank" rel="noreferrer me" style={{gridArea: "tg"} as React.CSSProperties} title={curLang().hero.tg}>
              <FaTelegram />
            </a>
          </div>
          <div>
            <a href="https://github.com/tolstovr" target="_blank" rel="noreferrer me" style={{gridArea: "github"}} title={curLang().hero.github}>
              <FaGithub />
            </a>
          </div>
          <div>
            <a href="mailto:tolstovrob@gmail.com" target="_blank" rel="noreferrer me" style={{gridArea: "gmail"}} title={curLang().hero.gmail}>
              <FaGooglePlusG />
            </a>
          </div>
          <div>
            <a href="https://www.behance.net/roberttolstov" target="_blank" rel="noreferrer me" style={{gridArea: "behance"}} title={curLang().hero.behance}>
              <FaBehance />
            </a>
          </div>
          <div>
            <a href="https://lichess.org/@/robertproductsru" target="_blank" rel="noreferrer me" style={{gridArea: "lichess"}} title={curLang().hero.lichess}>
              <SiLichess />
            </a>
          </div>
        </Grid>
      </Box>
    </>
  )
}

export default SocialsBoxes