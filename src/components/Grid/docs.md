# Grid

## Supported attributes

| **Attribute** | **Options** | **Default** |
|---|---|---|
| `gap` | `string \| undefined` | `undefined` |
| `rows` | `{ 1440: string \| number, 1024: string \| number, 512: string \| number }` | required |
| `columns` | `{ 1440: string \| number, 1024: string \| number, 512: string \| number }` | required |
| `areas` | `{ 1440: string[], 1024: string[], 512: string[] }` | required |
| `children` | `React.ReactNode \| undefined` | `undefined` |

## Example

```tsx
import Grid from "@/components/Grid/Grid"
import Box from "@/components/Box/Box"

const Container = () => {
  return (
    <Grid gap="1rem" rows={{
        1440: "2",
        1024: "3",
        512: "4",
    }} columns={{
        1440: "3",
        1024: "2",
        512: "1",
    }} areas={{
        1440: ["area1 area1 area2", "area3 area4 area4"],
        1024: ["area1 area1", "area2 area3", "area4 area4"],
        512: ["area1", "area2", "area3", "area4"],
    }}>
      <Box gridArea="area1" />
      <Box gridArea="area2" />
      <Box gridArea="area3" />
      <Box gridArea="area4" />
    </Grid>
  )
}
```