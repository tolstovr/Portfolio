import React, { createContext, useContext, useEffect, useState } from "react"
import Cookies from "js-cookie"

interface LocaleContextType {
  lang: "ru" | "en"
  toggleLang: () => void
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<"en" | "ru">("ru")

  useEffect(() => {
    const savedLocale = Cookies.get("lang") as "en" | "ru" | undefined
    if (savedLocale)
      setLang(savedLocale)
    else {
      Cookies.set("lang", "ru")
      setLang("ru")
    }
  }, [])

  const toggleLang = () => {
    const newLocale = lang === "ru" ? "en" : "ru"
    setLang(newLocale)
    Cookies.set("lang", newLocale)
  }

  return (
    <LocaleContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLang = () => {
  const context = useContext(LocaleContext)
  if (!context)
    throw new Error("useLang must be used within a LocaleProvider")
  return context
}
