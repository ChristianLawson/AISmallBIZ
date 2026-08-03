const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /bg-indigo-50/g, to: 'bg-[#EEF2FF]' },
  { from: /dark:bg-indigo-950/g, to: 'dark:bg-[#1e1b4b]' },
  { from: /bg-zinc-100/g, to: 'bg-[#F3F4F6]' },
  { from: /dark:bg-zinc-800/g, to: 'dark:bg-[#374151]' },
  { from: /text-indigo-700/g, to: 'text-[#312e81]' },
  { from: /dark:text-indigo-300/g, to: 'dark:text-[#A5B4FC]' },
  { from: /border-indigo-200/g, to: 'border-[#C7D2FE]' },
  { from: /dark:border-indigo-800/g, to: 'dark:border-[#312e81]' },
  { from: /bg-indigo-100/g, to: 'bg-[#E0E7FF]' },
];

function findTsxFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findTsxFiles(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

const srcDir = path.join(__dirname, 'src');
const tsxFiles = findTsxFiles(srcDir);

let totalFilesModified = 0;
let totalReplacements = 0;

for (const file of tsxFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let fileModified = false;
  let fileReplacements = 0;

  for (const { from, to } of replacements) {
    const matches = content.match(from);
    if (matches) {
      const count = matches.length;
      content = content.replace(from, to);
      fileModified = true;
      fileReplacements += count;
      totalReplacements += count;
    }
  }

  if (fileModified) {
    fs.writeFileSync(file, content, 'utf8');
    totalFilesModified++;
    console.log(`Modified: ${path.relative(srcDir, file)} (${fileReplacements} replacements)`);
  }
}

console.log(`\nSummary:`);
console.log(`Files modified: ${totalFilesModified}`);
console.log(`Total replacements: ${totalReplacements}`);
