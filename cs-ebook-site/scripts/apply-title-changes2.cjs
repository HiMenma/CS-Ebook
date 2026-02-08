const fs = require("fs");

const booksDataPath = "client/src/lib/books-data.ts";
let content = fs.readFileSync(booksDataPath, "utf-8");

// 修复 colon 字符（全角 vs 半角）
content = content.replace(/：/g, ":");

const titleMappings = {
  // 空格差异
  "Python编程:从入门到实践（第3版）": "Python编程:从入门到实践",
  "自然语言处理:基于预训练模型的方法": "自然语言处理:基于预训练模型的方法",

  // 版本号差异
  "算法（第4版）": "算法  (第4版)",
  数据结构与算法分析: "数据结构与算法分析（第2版）",

  // 书名差异
  计算机网络自顶向下方法: "计算机网络自顶向下方法",
  "TCP IP详解": "TCP IP详解",
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
