# Box

## Supported attributes

| **Attribute** | **Options** | **Default** |
|---|---|---|
| `events` | `TimelineItemProps[]` | required |

## TimelineItem attributes

| **Attribute** | **Options** | **Default** |
|---|---|---|
| `date` | `string` | required |
| `description` | `string` | required |
| `animation` | `"fade-up" \| "fade-left" \| "fade-right" \| "fade-down" \| "scale-in" \| "scale-out" \| undefined` | `undefined` |
| `delay` | `number \| undefined` | `undefined` |
| `className` | `string \| undefined` | `undefined` |
| `children` | `React.ReactNode \| undefined` | `undefined` |

## Example

```tsx
import styles from "./Container.module.scss"

const Container = () => {
  return (
    <Timeline events={[
        { date: "2021", description: getLang(lang).skills.basicedu },
        { date: "2023", description: getLang(lang).skills.secondaryedu },
        { date: "2027", description: getLang(lang).skills.bacheloredu }
      ]} />
  )
}
```