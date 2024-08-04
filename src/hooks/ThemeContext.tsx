import React, { createContext, useContext, useEffect, useState } from "react"
import Cookies from "js-cookie"

interface ThemeContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const savedTheme = Cookies.get("theme") as "light" | "dark" | undefined
    if (savedTheme)
      setTheme(savedTheme)
    else {
      Cookies.set("theme", "dark")
      setTheme("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    Cookies.set("theme", newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context)
    throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
