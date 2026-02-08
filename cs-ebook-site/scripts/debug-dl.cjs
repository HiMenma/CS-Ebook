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

// Filter for deep learning files
const dlFiles = imageFiles.filter(f =>
  f.relPath.toLowerCase().includes("深度学习")
);
dlFiles.slice(0, 5).forEach(f => {
  console.log("RelPath: " + f.relPath);
  console.log("Filename: " + f.filename);
  console.log("");
});
