import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

// Recursively find all .tsx and .ts files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = join(dirPath, file);
    if (statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Fix versioned imports
function fixImports(filePath) {
  let content = readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove version numbers from imports
  const versionedImportRegex = /from\s+["']([^"']+)@[\d.]+["']/g;
  const newContent = content.replace(versionedImportRegex, (match, packageName) => {
    modified = true;
    return `from "${packageName}"`;
  });

  if (modified) {
    writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
  }
}

// Main execution
const files = getAllFiles('./components');
files.forEach(fixImports);

console.log('Import fixing complete!');
