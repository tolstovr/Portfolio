import React from "react"
import { useLang } from "@/hooks/LocaleContext"
import { getLang } from "@/utils/locales"
import { getRows, getColumns } from "@/utils/getRowsColumns"
import Box from "@/components/Box/Box"
import Animated from "@/components/Animated/Animated"
import Grid from "@/components/Grid/Grid"
import Timeline from "@/components/Timeline/Timeline"
import styles from "./SkillsSection.module.scss"


const StackBox = () => {
  const { lang } = useLang()

  return (
    <Box gridArea="education" animation="fade-left" delay={0.25} className={styles["stack-box"]}>
      <Animated animation="fade-up" delay={0.5}>
        <h1>&#127891;&nbsp;{getLang(lang).skills.education}</h1>
      </Animated>
      <Timeline events={[
        { date: "2021", description: getLang(lang).skills.basicedu },
        { date: "2023", description: getLang(lang).skills.secondaryedu },
        { date: "2027", description: getLang(lang).skills.bacheloredu }
      ]} />
    </Box>
  )
}

export default StackBox