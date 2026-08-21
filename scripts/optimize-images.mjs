import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import sharp from "sharp";

const projectRoot = resolve(import.meta.dirname, "..");
const appRoot = join(projectRoot, "app");
const publicRoot = join(projectRoot, "public");
const excluded = new Set(["/figma/projects-page/raw-12.png"]);

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return [path];
  });
}

const references = new Set();
for (const file of sourceFiles(appRoot)) {
  if (![".ts", ".tsx"].includes(extname(file))) continue;
  const source = readFileSync(file, "utf8");
  for (const match of source.matchAll(/\/figma\/[^"'\s]+\.png/g)) {
    if (!excluded.has(match[0])) references.add(match[0]);
  }
}

let originalBytes = 0;
let optimizedBytes = 0;

for (const reference of [...references].sort()) {
  const input = join(publicRoot, reference);
  const output = input.replace(/\.png$/, ".webp");
  if (!existsSync(input)) throw new Error(`Missing image: ${input}`);

  const inputSize = statSync(input).size;
  await sharp(input)
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toFile(output);
  const outputSize = statSync(output).size;
  originalBytes += inputSize;
  optimizedBytes += outputSize;
  console.log(`${reference}: ${(inputSize / 1024 / 1024).toFixed(2)} MB -> ${(outputSize / 1024 / 1024).toFixed(2)} MB`);
}

const reduction = originalBytes ? (1 - optimizedBytes / originalBytes) * 100 : 0;
console.log(`Optimized ${references.size} images: ${(originalBytes / 1024 / 1024).toFixed(2)} MB -> ${(optimizedBytes / 1024 / 1024).toFixed(2)} MB (${reduction.toFixed(1)}% smaller)`);
