"use client"
import React, { useEffect } from "react"
import { ThemeProvider, useTheme } from "@/hooks/ThemeContext"
import { LocaleProvider } from "@/hooks/LocaleContext"
import HeroSection from "@/modules/HeroSection/HeroSection"
import styles from "./page.module.scss"

const BodyStyleUpdater = () => {
  const { theme } = useTheme()

  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#edeef0"
      document.body.style.color = "#000000"
    }
    
    return () => {
      document.body.style.backgroundColor = ""
      document.body.style.color = ""
    }
  }, [theme])

  return null
}

const Home = () => {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <BodyStyleUpdater />
        <main>
          <HeroSection />
        </main>
      </ThemeProvider>
    </LocaleProvider>
  )
}

export default Home