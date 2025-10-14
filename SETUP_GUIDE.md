# Quick Setup Guide

## Step-by-Step Instructions

### 1. Install Dependencies

```bash
npm install
```

If you get errors about `tailwind-merge` or Tailwind v4, use the stable version:

```bash
# Use Tailwind v3 (stable) instead
cp package-stable.json package.json
cp vite.config-stable.ts vite.config.ts
npm install
```

### 2. Fix Imports (REQUIRED!)

This removes version numbers from Figma Make imports:

```bash
node fix-imports.js
```

### 3. Start Development

```bash
npm run dev
```

Visit http://localhost:5173

### 4. Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.

---

## Troubleshooting

### Error: `tailwind-merge@^2.7.0` not found

**Solution:** Use the stable package.json:
```bash
cp package-stable.json package.json
cp vite.config-stable.ts vite.config.ts
npm install
```

### Error: Import errors with `@radix-ui` or `lucide-react`

**Solution:** Run the fix-imports script:
```bash
node fix-imports.js
```

### Build works locally but fails on Vercel

**Make sure:**
1. `vercel.json` is in your repo
2. Build command is: `npm run build`
3. Output directory is: `dist`
4. Install command is: `npm install`

---

## Deploying to Vercel

### Via GitHub

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your repository
5. Settings should auto-detect:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click Deploy

### Before Deploying

Make sure you've run:
```bash
node fix-imports.js
git add .
git commit -m "Fix imports for deployment"
git push
```

---

## File Checklist

Before deployment, ensure these files exist:
- ✅ `package.json`
- ✅ `vite.config.ts`
- ✅ `vercel.json`
- ✅ `index.html`
- ✅ `main.tsx`
- ✅ `tsconfig.json`

And make sure you've run:
- ✅ `node fix-imports.js`

---

## Need Help?

Check the main README.md for full documentation.
