@echo off
echo.
echo Setting up SmartDialog.ai Website...
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

REM Fix imports
echo Fixing versioned imports...
call node fix-imports.js

echo.
echo Setup complete!
echo.
echo To start development server, run:
echo   npm run dev
echo.
echo To build for production, run:
echo   npm run build
echo.
pause
