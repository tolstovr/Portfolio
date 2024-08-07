# Box

## Supported attributes

| **Attribute** | **Options** | **Default** |
|---|---|---|
| `backgroundURL` | `string \| undefined` | `undefined` |
| `backgroundColor` | `string \| undefined` | `undefined` |
| `gridArea` | `string` | required |
| `animation` | `"fade-up" \| "fade-left" \| "fade-right" \| "fade-down" \| "scale-in" \| "scale-out" \| undefined` | `undefined` |
| `delay` | `number \| undefined` | `undefined` |
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
        768: "4",
    }} columns={{
        1440: "3",
        1024: "2",
        768: "1",
    }} areas={{
        1440: ["area1 area1 area2", "area3 area4 area4"],
        1024: ["area1 area1", "area2 area3", "area4 area4"],
        768: ["area1", "area2", "area3", "area4"],
    }}>
      <Box gridArea="area1" backgroundColor="indigo">
        Aboba
      </Box>
      <Box gridArea="area2" backgroundURL="/avatar.webp" />
      <Box gridArea="area3" className={styles.box} />
      <Box gridArea="area4" animation="fade-up" delay={0.25} />
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