const fs = require("fs");
const path = require("path");

function getAllImageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...getAllImageFiles(fullPath));
    } else if (item.endsWith(".jpg")) {
      const relPath = fullPath.replace(/\\/g, "/").replace("images/", "");
      files.push({ relPath: relPath, filename: item.replace(".jpg", "") });
    }
  });
  return files;
}

const imageFiles = getAllImageFiles("images");
const filenameMap = {};
imageFiles.forEach(f => {
  const normalizedFilename = f.filename
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/：/g, ":")
    .trim();
  const key = f.relPath.toLowerCase();
  filenameMap[key] = normalizedFilename;
  console.log("Key: " + key);
  console.log("Value: " + normalizedFilename);
  console.log("");
});

// Check if a specific key exists
const testKey = "人工智能/图像处理/3d计算机视觉".toLowerCase();
console.log("Test key: " + testKey);
console.log("Exists: " + (filenameMap[testKey] !== undefined));
