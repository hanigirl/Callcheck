# 🚀 How to Start Callcheck

## Quick Start

### Option 1: Using the Script (Easiest)
```bash
./start.sh
```

או לחיצה כפולה על הקובץ `start.sh` ב-Finder (Mac) או ב-File Explorer.

### Option 2: Using npm
```bash
npm run dev
```

## What Happens?

1. ✅ Installs dependencies (if needed)
2. ✅ Builds the Electron main process
3. ✅ Starts Vite development server (port 5173)
4. ✅ Opens Electron app window

## Troubleshooting

### If it doesn't start:
1. Make sure Node.js is installed: `node --version`
2. Install dependencies: `npm install`
3. Check if port 5173 is available

### Manual Steps:
```bash
# Terminal 1: Start Vite
npm run dev:renderer

# Terminal 2: Build main process
npm run build:main

# Terminal 3: Start Electron
npm run dev:electron
```

## Stop the Server
Press `Ctrl+C` in the terminal where the server is running.

