"use client"
import React, { useState, useEffect } from "react"
import { useLang } from "@/hooks/LocaleContext"
import { getLang } from "@/utils/locales"
import ReactHtmlParser from "react-html-parser"
import Cookies from "js-cookie"
import { motion, useAnimation, backOut } from "framer-motion"
import Modal from "@/components/Modal/Modal"
import styles from "./CookieModal.module.scss"

const CookieModal = () => {
  const { lang } = useLang()
  const controls = useAnimation()
  const [isCookiesAccepted, setIsCookiesAccepted] = useState<string | undefined>(() => Cookies.get("cookies"))

  const handleCookiesAccepted = () => {
    Cookies.set("cookies", "true")
    setIsCookiesAccepted("true")
    controls.start("exit", { delay: 0 })
  }

  useEffect(() => {
    if (!isCookiesAccepted)
      controls.start("visible")
  }, [controls])

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: 50 }
  }

  return (
    <motion.div initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ delay: 2, duration: 0.25, backOut }}
                className={styles["motion-container"]}>
      <Modal
        message={ ReactHtmlParser(getLang(lang).cookies.message) }
        acceptLabel={getLang(lang).cookies.accept}
        onAccept={handleCookiesAccepted} />
    </motion.div>
  )
}

export default CookieModal