# איך להריץ את האפליקציה Callcheck

## דרישות מוקדמות
1. Node.js גרסה 18 או יותר
   - הורד מ: https://nodejs.org/
   - או התקן דרך Homebrew: `brew install node`

## שלבי הרצה

### 1. פתח טרמינל (Terminal או iTerm)

### 2. נווט לתיקיית הפרויקט
```bash
cd "/Users/hani/hani's /src/callcheck"
```

### 3. התקן תלויות (רק בפעם הראשונה)
```bash
npm install
```

### 4. הרץ את האפליקציה במצב פיתוח
```bash
npm run dev
```

### מה יקרה:
- שרת Vite יופעל על פורט 5173
- חלון Electron יפתח אוטומטית
- הדף `ForReview` יוצג עם כל הכפתורים

### אם יש בעיה:
- וודא ש-Node.js מותקן: `node --version`
- וודא ש-npm מותקן: `npm --version`
- אם לא, התקן Node.js מ-nodejs.org

## דפים זמינים:
- `/src/pages/ForReview.tsx` - דף ביקורת עם כל הכפתורים


