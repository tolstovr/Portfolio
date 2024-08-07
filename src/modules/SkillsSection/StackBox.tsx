import React from "react"
import { useTheme } from "@/hooks/ThemeContext"
import { useLang } from "@/hooks/LocaleContext"
import { getLang } from "@/utils/locales"
import { getRows, getColumns } from "@/utils/getRowsColumns"
import Box from "@/components/Box/Box"
import Animated from "@/components/Animated/Animated"
import Grid from "@/components/Grid/Grid"
import styles from "./SkillsSection.module.scss"
import { BashDark, CSS, Docker, ExpressJSDark, FastAPI, Git, HTML, JavaScript, NextJSDark, PostgreSQLDark, PythonDark, ReactDark, Sass, Svelte, TailwindCSSDark, TypeScript, ViteDark, YarnDark, ReactLight, PythonLight, NextJSLight, ExpressJSLight, ViteLight, TailwindCSSLight, PostgreSQLLight, YarnLight, BashLight, NpmDark, NpmLight } from "@fdorantesm/react-skill-icons"

const StackBox = () => {
  const { theme } = useTheme()
  const { lang } = useLang()

  const areas1440 = [
    "html html svelte ts next fastapi fastapi sass css",
    "html html react react react fastapi fastapi npm git",
    "js js react react react python postgre express docker",
    "js js react react react yarn vite tailwind bash"
  ]

  const areas1024 = [
    "html html svelte ts next fastapi fastapi sass css",
    "html html react react react fastapi fastapi npm git",
    "js js react react react python postgre express docker",
    "js js react react react yarn vite tailwind bash"
  ]

  const areas768 = [
    "html css js react ts",
    "sass tailwind next svelte postgre",
    "yarn npm vite express python",
    "fastapi git docker bash ."
  ]

  return (
    <Box gridArea="stack" animation="fade-up" className={styles["stack-box"]}>
      <Animated animation="fade-up" delay={0.25}>
        <h1>&#128187;&nbsp;{getLang(lang).skills.stack}</h1>
      </Animated>
      <Grid className={styles["stack-wrapper"]} gap="1rem" rows={{
        1440: getRows(areas1440),
        1024: getRows(areas1024),
        768: getRows(areas768)
      }} columns={{
        1440: getColumns(areas1440),
        1024: getColumns(areas1024),
        768: getColumns(areas768)
      }} areas={{
        1440: areas1440,
        1024: areas1024,
        768: areas768
      }}>
        <Animated className={styles["skill-icon"]} style={{gridArea: "react"}} animation="scale-in" delay={0.25}>
          {theme === "dark" ? <ReactDark /> : <ReactLight />}
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "ts"}} animation="scale-in" delay={0.5}>
          <TypeScript />
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "next"}} animation="scale-in" delay={0.5}>
          {theme === "dark" ? <NextJSDark /> : <NextJSLight />}
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "python"}} animation="scale-in" delay={0.75}>
          {theme === "dark" ? <PythonDark /> : <PythonLight />}
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "postgre"}} animation="scale-in" delay={1}>
          {theme === "dark" ? <PostgreSQLDark /> : <PostgreSQLLight />}
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "fastapi"}} animation="scale-in" delay={1}>
          <FastAPI />
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "svelte"}} animation="scale-in" delay={0.75}>
          <Svelte />
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "express"}} animation="scale-in" delay={1}>
          {theme === "dark" ? <ExpressJSDark /> : <ExpressJSLight />}
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "vite"}} animation="scale-in" delay={0.5}>
          {theme === "dark" ? <ViteDark /> : <ViteLight />}
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "tailwind"}} animation="scale-in" delay={0.75}>
          {theme === "dark" ? <TailwindCSSDark /> : <TailwindCSSLight />}
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "sass"}} animation="scale-in" delay={0.5}>
          <Sass />
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "html"}} animation="scale-in" delay={0.5}>
          <HTML />
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "js"}} animation="scale-in" delay={0.5}>
          <JavaScript />
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "yarn"}} animation="scale-in" delay={0.75}>
          {theme === "dark" ? <YarnDark /> : <YarnLight />}
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "git"}} animation="scale-in" delay={1.25}>
          <Git />
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "docker"}} animation="scale-in" delay={1.25}>
          <Docker />
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "css"}} animation="scale-in" delay={0.5}>
          <CSS />
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "bash"}} animation="scale-in" delay={1.25}>
          {theme === "dark" ? <BashDark /> : <BashLight />}
        </Animated>
        <Animated className={styles["skill-icon"]} style={{gridArea: "npm"}} animation="scale-in" delay={1}>
          {theme === "dark" ? <NpmDark /> : <NpmLight />}
        </Animated>
      </Grid>
    </Box>
  )
}

export default StackBox