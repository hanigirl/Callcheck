# Callcheck Design System (page-level subset)

Import tokens once in your app entry:

```ts
import "./design-system/css/index.css";
```

Use Tailwind with the provided config or raw CSS tokens.

## Components
- Button, Card, Pill, SearchInput, Dropdown, NavRail, KpiDonut

## RTL
Set `dir="rtl"` on the html/body or page container. Components use logical margins.

## Theming
Override any `--cc-*` CSS variables at `:root` or a container to theme.
