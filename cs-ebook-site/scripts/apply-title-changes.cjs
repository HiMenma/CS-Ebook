const fs = require("fs");

const booksDataPath = "client/src/lib/books-data.ts";
let content = fs.readFileSync(booksDataPath, "utf-8");

const titleMappings = {
  // 空格差异
  "TensorFlow 深度学习": "TensorFlow深度学习",
  "流畅的 Python （第2版）": "流畅的 Python（第2版）",
  "Java实战 (第2 版)": "Java实战 (第2版)",
  "Java编程思想 ( 第5版)": "Java编程思想 (第5版)",
  "JavaScript 权威指南 (第7版)": "JavaScript权威指南 (第7版)",
  "JavaScript 高级程序设计 (第4 版)": "JavaScript高级程序设计 (第4版)",
  "Rust 程序设计（ 第2版）": "Rust程序设计（第2版）",
  "精通Rust（第2版 )": "精通Rust（第2版）",
  "线性代数及其应用 ( 第4版)": "线性代数及其应用 (第4版)",
  "离散数学及其应用（第 8版）": "离散数学及其应用（第8版）",

  // 版本号差异
  深入理解计算机系统: "深入理解计算机系统（第3版）",
  算法导论: "算法导论（第3版）",
  "算法（第4版）": "算法（第4版）", // 确认文件名
  数据结构与算法分析: "数据结构与算法分析",
  "计算机网络：自顶向下方法": "计算机网络自顶向下方法",
  "TCP/IP详解": "TCP IP详解",
};

let changeCount = 0;
Object.entries(titleMappings).forEach(([oldTitle, newTitle]) => {
  const oldPattern = '"' + oldTitle + '"';
  const newPattern = '"' + newTitle + '"';
  if (content.includes(oldPattern)) {
    content = content.replace(oldPattern, newPattern);
    changeCount++;
    console.log('修改: "' + oldTitle + '" -> "' + newTitle + '"');
  }
});

console.log("\n总共修改: " + changeCount + " 本书");
fs.writeFileSync(booksDataPath, content, "utf-8");
console.log("完成！");
