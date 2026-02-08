const fs = require("fs");

const booksDataPath = "client/src/lib/books-data.ts";
let content = fs.readFileSync(booksDataPath, "utf-8");

const titleMappings = {
  "精通Rust（第2版）": "精通Rust（第2版)",
};

let changeCount = 0;
Object.entries(titleMappings).forEach(([oldTitle, newTitle]) => {
  const oldPattern = '"' + oldTitle + '"';
  const newPattern = '"' + newTitle + '"';
  if (content.includes(oldPattern)) {
    content = content.replace(oldPattern, newPattern);
    changeCount++;
    console.log('修改: "' + oldTitle + '" -> "' + newTitle + '"');
  } else {
    console.log('未找到: "' + oldTitle + '"');
  }
});

console.log("\n总共修改: " + changeCount + " 本书");
fs.writeFileSync(booksDataPath, content, "utf-8");
console.log("完成！");
