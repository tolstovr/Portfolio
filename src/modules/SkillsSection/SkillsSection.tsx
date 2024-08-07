import React from "react"
import { getRows, getColumns } from "@/utils/getRowsColumns"
import Grid from "@/components/Grid/Grid"
import StackBox from "./StackBox"
import EducationBox from "./EducationBox"

const SkillsSection = () => {
  const areas1440 = [
    "stack education",
  ]

  const areas1024 = [
    "stack",
    "education"
  ]

  const areas768 = [
    "stack",
    "education",
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
      <StackBox />
      <EducationBox />
    </Grid>
  )
}

export default SkillsSection