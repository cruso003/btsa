#!/bin/bash

# BTSA Website - Dependency Installation Script
# Run this script to install all required dependencies

echo "🏠 Build To Shelter Africa - Installing Dependencies"
echo "=================================================="
echo ""

# Check if npm or bun is available
if command -v bun &> /dev/null; then
    echo "✅ Using Bun (faster)"
    PACKAGE_MANAGER="bun add"
elif command -v npm &> /dev/null; then
    echo "✅ Using npm"
    PACKAGE_MANAGER="npm install"
else
    echo "❌ Error: Neither npm nor bun found!"
    echo "Please install Node.js or Bun first:"
    echo "  - Node.js: https://nodejs.org/"
    echo "  - Bun: https://bun.sh/"
    exit 1
fi

echo ""
echo "📦 Installing required packages..."
echo ""

# Install all required dependencies
$PACKAGE_MANAGER \
  framer-motion \
  react-intersection-observer \
  react-hook-form \
  zod \
  @hookform/resolvers \
  @tanstack/react-query \
  date-fns \
  react-countup \
  embla-carousel-react \
  react-player \
  @radix-ui/react-slot \
  @radix-ui/react-progress \
  tailwindcss-animate

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ All dependencies installed successfully!"
    echo ""
    echo "🚀 Next steps:"
    echo "  1. Run 'npm run dev' or 'bun dev' to start the development server"
    echo "  2. Open http://localhost:3000 in your browser"
    echo "  3. Start building amazing features for BTSA!"
    echo ""
else
    echo ""
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
