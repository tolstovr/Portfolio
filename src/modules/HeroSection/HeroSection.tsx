import React from "react"
import { getRows, getColumns } from "@/utils/getRowsColumns"
import Grid from "@/components/Grid/Grid"
import InfoBoxes from "./InfoBoxes"
import SocialsBoxes from "./SocialsBoxes"
import SettingsBox from "./SettingsBox"

const HeroSection = () => {
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

      <SocialsBoxes />
      <InfoBoxes />
      <SettingsBox />
    </Grid>
  )
}

export default HeroSection