# Animated

## Supported attributes

| **Attribute** | **Options** | **Default** |
|---|---|---|
| `animation` | `"fade-up" \| "fade-left" \| "fade-right" \| "fade-down" \| "scale-in" \| "scale-out" \| undefined` | required |
| `delay` | `number \| undefined` | `undefined` |
| `className` | `string \| undefined` | `undefined` |
| `styles` | `React.CSSProperties \| undefined` | `undefined` |
| `children` | `React.ReactNode \| undefined` | `undefined` |

## Example

```tsx
import Animated from "@/components/Animated/Animated"
import styles from "./Container.module.scss"

const Container = () => {
  return (
    <Animated animation="fade-up">
      Aboba
    </Animated>
  )
}
```