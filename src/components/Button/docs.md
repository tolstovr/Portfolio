# Button

## Supported attributes
variant?: "fill" | "outline"
  size?: "small" | "medium" | "large"
  color?: "default" | "primary" | "secondary" | "error" | "success" | "warning"
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean
  fullwidth?: boolean
  round?: boolean
  children?: React.ReactNode

- `variant: "fill" | "outline"`. Determines either the button is filled or outlined
- `color: "default" | "primary" | "secondary" | "error" | "success" | "warning"`. Sets the color theme of the button
- `size: "small" | "medium" | "large"`. Sets the size of the button
- `onClick: () => any`