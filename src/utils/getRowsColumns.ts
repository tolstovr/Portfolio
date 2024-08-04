export const getRows = (areas: string[]) => {
  return areas.length
}

export const getColumns = (areas: string[]) => {
  return areas.reduce((acc, area) => Math.max(acc, area.split(" ").length), 0)
}