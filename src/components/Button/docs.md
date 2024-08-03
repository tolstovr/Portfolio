# Button

## Supported attributes

| **Attribute** | **Options** | **Default** |
|---|---|---|
| `variant` | `"fill" \| "outline"` | `fill` |
| `color` | `"default" \| "primary" \| "secondary" \| "error" \| "success" \| "warning"` | `default` |
| `size` | `"small" \| "medium" \| "large"` | `medium` |
| `onClick` | `() => void` | `() => {}` |
| `icon` | `React.ReactNode \| undefined` | `undefined` |
| `disabled` | `boolean \| undefined` | `undefined` |
| `fullwidth` | `boolean \| undefined` | `undefined` |
| `round` | `boolean \| undefined` | `undefined` |
| `children` | `React.ReactNode \| undefined` | `undefined` |

## Example

```tsx
import Button from "@/components/Button/Button"
import { CgHello } from "react-icons/cg"

const Container = () => {
  return (
    <Button variant="outline"
            color="primary"
            size="large"
            onClick={() => {alert("Aboba")}}
            icon={<CgHello />}
            disabled fullwidth round>
      Aboba
    </Button>
  )
}
```