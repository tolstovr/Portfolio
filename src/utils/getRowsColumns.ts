export const getRows = (areas: string[]) => areas.length
export const getColumns = (areas: string[]) => areas.reduce((acc, area) => Math.max(acc, area.split(" ").length), 0)