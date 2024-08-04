"use client"
import React from "react"
import { ThemeProvider } from "@/hooks/ThemeContext"
import { LocaleProvider } from "@/hooks/LocaleContext"
import HeroSection from "@/modules/HeroSection/HeroSection"
import styles from "./page.module.scss"

const Home = () => {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <main>
          <HeroSection />
        </main>
    </ThemeProvider>
    </LocaleProvider>
  )
}

export default Home