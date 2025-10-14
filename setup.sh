#!/bin/bash

echo "🚀 Setting up SmartDialog.ai Website..."
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Fix imports
echo "🔧 Fixing versioned imports..."
node fix-imports.js

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start development server, run:"
echo "  npm run dev"
echo ""
echo "To build for production, run:"
echo "  npm run build"
echo ""
