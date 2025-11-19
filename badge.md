## Component: Badge

### 💡 Purpose
Displays a numeric or status indicator inside a circular label.  
Supports different color variants (e.g., success, danger), with optional icon.

---

### 🎨 Tokens

- **Background color**:
  - Default (danger): `--danger-danger-surface`
- **Text color**:
  - Default (danger): `--danger-danger-400`
- **Corner radius**: `100%` (fully rounded)
- **Padding**: 4px (all sides)
- **Min width**: 20px
- **Text alignment**: centered

---

### 🔠 Typography

- Font size: 16px  
- Font weight: Medium  
- Line height: 100%

---

### 🧩 Variants

| Variant   | Background Token               | Text Token              |
|-----------|--------------------------------|--------------------------|
| Danger    | `--danger-danger-surface`      | `--danger-danger-400`    |
| Success   | `--success-success-surface`    | `--success-success-text` |

---

### 🧷 Optional Icon

- Can include a leading or trailing icon
- Icon has **no spacing from text** (flush)
- Icon inherits text color
- SVG recommended

---

### 📐 Layout

- Circle shape enforced via `border-radius: 100%`
- Min width: 20px
- Text and icon centered horizontally & vertically

---

> The badge is intended to be used inside tables, cards, or inline next to labels. Responsive and theme-compliant via design tokens.
