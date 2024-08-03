# Box

## Supported attributes

| **Attribute** | **Options** | **Default** |
|---|---|---|
| `backgroundURL` | `string \| undefined` | `undefined` |
| `backgroundColor` | `string \| undefined` | `undefined` |
| `gridArea` | `string` | required |
| `className` | `string \| undefined` | `undefined` |
| `children` | `React.ReactNode \| undefined` | `undefined` |

## Example

```tsx
import Grid from "@/components/Grid/Grid"
import Box from "@/components/Box/Box"
import styles from "./Container.module.scss"

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
      <Box gridArea="area1" backgroundColor="indigo">
        Aboba
      </Box>
      <Box gridArea="area2" backgroundURL="/avatar.webp" />
      <Box gridArea="area3" className={styles.box} />
      <Box gridArea="area4" />
    </Grid>
  )
}
```

```scss
.box {
  color: red;
  background-color: white;
}
```