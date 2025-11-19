# Callcheck

Data and analysis platform for call center managers.

## Development

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
npm install
```

### Run in Development Mode

```bash
npm run dev
```

This will:
- Start the Vite dev server for the React app
- Launch Electron with hot-reload enabled

### Build

Build the application for production:

```bash
npm run build
```

### Package

Create distributable packages:

```bash
# For current platform
npm run package

# For specific platforms
npm run package:mac
npm run package:win
npm run package:linux
```

## Project Structure

```
callcheck/
├── electron/          # Electron main process files
│   ├── main.ts       # Main process entry point
│   └── preload.ts    # Preload script
├── src/              # React renderer application
│   ├── App.tsx       # Main app component
│   └── main.tsx      # React entry point
├── dist/             # Build output
└── release/          # Packaged applications
```

## Design System Integration

The project is configured to use the design system from `../design-system`. Import components and styles as needed:

```typescript
import { Button, Card } from '@design-system';
import '@design-system/css/index.css';
```

### Local Fonts (Ploni ML v2 AAA)

To use the Ploni ML v2 AAA font locally, place the font files in `public/fonts` with the following filenames:

- `Ploni-ML-v2-AAA-Regular.woff2` (weight: 400)
- `Ploni-ML-v2-AAA-Regular.woff` (weight: 400)
- `Ploni-ML-v2-AAA-Medium.woff2` (weight: 500) - **Required for buttons and body-accented text**
- `Ploni-ML-v2-AAA-Medium.woff` (weight: 500) - **Required for buttons and body-accented text**
- `Ploni-ML-v2-AAA-DemiBold.woff2` (weight: 600)
- `Ploni-ML-v2-AAA-DemiBold.woff` (weight: 600)

These are referenced by `@font-face` rules in `src/index.css`. If the local files are not present, the app will fall back to system-installed names or to `Noto Sans Hebrew`.

## Technologies

- **Electron**: Desktop app framework
- **React**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server

