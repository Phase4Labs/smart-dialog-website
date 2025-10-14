# SmartDialog.ai Website

A modern, multi-lingual corporate website built with React, TypeScript, and Tailwind CSS.

## Features

- 🌍 Multi-language support (English, Spanish, Portuguese)
- 📱 Fully responsive design
- 🎨 Brand-customized color scheme
- ⚡ Fast and modern tech stack
- 🚀 Ready for Vercel deployment

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Important: Choose Your Setup

This project supports both **Tailwind CSS v4** (alpha) and **Tailwind CSS v3** (stable). Choose one:

#### Option A: Tailwind v4 (Current - Alpha)
Use the current files as-is. May have some edge cases.

#### Option B: Tailwind v3 (Recommended for Production)
If you encounter issues, switch to stable Tailwind v3:
```bash
# Backup and replace files
mv package.json package-v4.json
mv vite.config.ts vite.config-v4.ts
mv package-stable.json package.json
mv vite.config-stable.ts vite.config.ts
```

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Fix versioned imports (IMPORTANT - one-time only):**
   ```bash
   node fix-imports.js
   ```
   This removes version numbers from imports (e.g., `lucide-react@0.487.0` → `lucide-react`)

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### Important Notes

⚠️ **You MUST run `node fix-imports.js` before building!** This script fixes imports that have version numbers (from Figma Make environment) to standard npm imports.

If you see import errors during build, run:
```bash
node fix-imports.js
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

### Method 1: Via Git Repository

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect the settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click "Deploy"

### Method 2: Via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

## Project Structure

```
├── components/          # React components
│   ├── ui/             # ShadCN UI components
│   ├── Header.tsx      # Site header with navigation
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx
│   ├── SmartAssistant.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── lib/                # Utilities and contexts
│   ├── i18n.ts         # Translations
│   └── LanguageContext.tsx
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS and custom styles
├── public/             # Static assets
│   └── logo.svg        # Company logo
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.html          # HTML template
```

## Customization

### Update Brand Colors

Edit `/styles/globals.css` and modify the CSS variables:

```css
:root {
  --primary: #F76D0A;      /* Main brand color */
  --secondary: #9EBEC8;    /* Secondary color */
  --muted: #F5F5F4;        /* Muted background */
  /* ... */
}
```

### Add/Edit Content

Translations are in `/lib/i18n.ts`. Update the `translations` object to modify text content.

### Replace Logo

Replace `/public/logo.svg` with your own logo file.

### Update Contact Information

Edit `/pages/Contact.tsx` to update email, phone, and address.

### Update Social Media Links

Edit `/components/Footer.tsx` to update social media URLs.

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

## License

Private - All rights reserved

## Support

For questions or issues, contact: contact@smartdialog-ai.com
