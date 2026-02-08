const fs = require("fs");
const path = require("path");

const booksDataPath = "client/src/lib/books-data.ts";
const content = fs.readFileSync(booksDataPath, "utf-8");

const bookRegex =
  /\{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*subcategory:\s*"([^"]+)"/g;
const books = [];
let match;
while ((match = bookRegex.exec(content)) !== null) {
  books.push({
    id: match[1],
    title: match[2],
    category: match[3],
    subcategory: match[4],
  });
}

const categoryMap = {
  ai: "人工智能",
  programming: "编程语言",
  fundamentals: "计算机基础",
  bigdata: "大数据处理",
  math: "数学基础",
};
const subcategoryMap = {
  ai: {
    "ai-cv": "图像处理",
    "ai-rl": "强化学习",
    "ai-ml": "机器学习",
    "ai-dl": "深度学习",
    "ai-nlp": "自然语言处理",
  },
  programming: {
    "prog-python": "Python",
    "prog-java": "Java",
    "prog-js": "JavaScript",
    "prog-cpp": "C++",
    "prog-go": "Go",
    "prog-rust": "Rust",
  },
  fundamentals: {
    "fund-os": "操作系统",
    "fund-algo": "算法与数据结构",
    "fund-network": "计算机网络",
  },
  bigdata: { "bd-analysis": "数据分析", "bd-mining": "数据挖掘" },
  math: { "math-applied": "应用数学", "math-advanced": "高等数学" },
};

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
  const key = f.relPath.toLowerCase();
  filenameMap[key] = f.filename;
});

const normalizeTitle = title =>
  title
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/\s*\(\s*/g, "(")
    .replace(/\s*\)\s*/g, ")")
    .replace(/：/g, ":")
    .trim();

console.log("需要修改的书名：");
console.log('格式："原书名" -> "新书名"');
console.log("================");
console.log("");

const titleChanges = [];

books.forEach(b => {
  const catName = categoryMap[b.category] || b.category;
  const subCatName =
    subcategoryMap[b.category]?.[b.subcategory] || b.subcategory;
  const normalized = normalizeTitle(b.title);
  const key = catName + "/" + subCatName + "/" + normalized;

  if (filenameMap[key.toLowerCase()]) {
    const actualFilename = filenameMap[key.toLowerCase()];
    if (actualFilename !== normalized) {
      titleChanges.push({
        oldTitle: b.title,
        newTitle: actualFilename,
        id: b.id,
      });
    }
  }
});

// 按 ID 排序
titleChanges.sort((a, b) => a.id.localeCompare(b.id));

titleChanges.forEach((item, i) => {
  console.log(i + 1 + ". ID: " + item.id);
  console.log('   "' + item.oldTitle + '" -> "' + item.newTitle + '"');
  console.log("");
});

console.log("总共需要修改: " + titleChanges.length + " 本书");
