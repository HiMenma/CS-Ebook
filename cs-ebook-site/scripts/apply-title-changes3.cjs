const fs = require("fs");

const booksDataPath = "client/src/lib/books-data.ts";
let content = fs.readFileSync(booksDataPath, "utf-8");

const titleMappings = {
  // 书名差异
  "自然语言处理:基于预训练模型的方法": "自然语言处理：基于预训练模型的方法",
  "Python编程:从入门到实践": "Python编程：从入门到实践（第3版）",
  "C++ Primer Plus (第6版 )": "C++ Primer Plus (第6版)",
  "Rust程序设计（第2版）": "Rust 程序设计（第2版）",
  "精通Rust（第2版）": "精通Rust（第2版）",
  "算法  (第4版)": "算法  (第4版)",
  计算机网络自顶向下方法: "计算机网络 自顶向下方法 (第7版)",
  "TCP IP详解": "TCP IP详解 (第2版)",
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
