## Component: Events Table

### 🧱 Structure

- The table is **right-to-left (RTL)**.
-The cells are rtl and all the content inside it is aligned to the right including text and other components 
- There are **4 columns by default**, but the table may display **5 columns** in other views.  
- Columns automatically **resize responsively** to fit the viewport.
- The column layout is:

| # | Column              | Description                                                |
|---|---------------------|------------------------------------------------------------|
| 1 | Title               | Event title (`h2`) and subtitle (`body-xs`)               |
| 2 | Date                | Format: "12 במאי 2025, 11:12 AM" (Hebrew locale)           |
| 3 | Event Count Badge   | Circular badge with count (e.g. `12`), separate component  |
| 4 | Quotes              | Two text snippets + voice icon, each a reusable component |
| 5 | (Optional) Additions| "+10 נוספים", shows number of related items               |

---

### 📐 Layout & Spacing

- **Full width**
- **Padding**: 24px on all sides
- **Vertical spacing** between separate elements in a cell: 4px
- **Vertical spacing** between rows: 16px
- Table cells stretch/shrink responsively
- **Table header** uses consistent titles (same size and position across all tables)

---

### 🔠 Typography

| Element        | Style       |
|----------------|-------------|
| Table Title    | `h2`        |
| Column Titles  | `h2` (fixed size) |
| Cell Title     | `body-xs`   |
| Cell Text      | 16px, Medium |
| Text Overflow  | Truncated with ellipsis (`...`) if needed |

---

### 🧩 Components Used

- **Badge** – separate component for number indicators
- **Quote** – separate component showing text + icon
- **Button** – at top-left: “כל האירועים”

---

### 🧭 Behavior

- Rows are not clickable
- No pagination
- Button "כל האירועים" opens all event entries
- No hover/focus styles currently defined

---

> This table relies on consistent layout, reusable tokens (padding, spacing, typography), and encapsulated sub-components (Badge, Quote).
