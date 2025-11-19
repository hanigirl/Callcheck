#!/bin/bash

# Callcheck - Start Development Server
# This script starts the Electron app in development mode

echo "🚀 Starting Callcheck development server..."
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Start the development server
echo "▶️  Starting development server..."
npm run dev

