const fs = require("fs");
const path = require("path");

const booksDataPath = "client/src/lib/books-data.ts";
let content = fs.readFileSync(booksDataPath, "utf-8");

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
      const relPath = fullPath
        .replace(/\\/g, "/")
        .replace("images/", "")
        .replace(".jpg", "");
      files.push({ relPath: relPath, filename: item.replace(".jpg", "") });
    }
  });
  return files;
}

const imageFiles = getAllImageFiles("images");

const normalizeTitle = title =>
  title.toLowerCase().replace(/\s+/g, " ").replace(/：/g, ":").trim();

const bookRegex =
  /(\{\s*id:\s*"([^"]+)",\s*title:\s*")([^"]+)(",\s*category:\s*"([^"]+)",\s*subcategory:\s*"([^"]+)")/g;

const titleChanges = [];
let match;
while ((match = bookRegex.exec(content)) !== null) {
  const fullMatch = match[0];
  const prefix = match[1];
  const oldTitle = match[2];
  const suffix = match[3];
  const id = match[4];
  const category = match[5];
  const subcategory = match[6];

  const catName = categoryMap[category] || category;
  const subCatName = subcategoryMap[category]?.[subcategory] || subcategory;

  const dirPath = catName + "/" + subCatName;
  const filesInDir = imageFiles.filter(f =>
    f.relPath.toLowerCase().startsWith(dirPath.toLowerCase())
  );

  for (const file of filesInDir) {
    const normalizedFile = normalizeTitle(file.filename);
    const normalizedTitle = normalizeTitle(oldTitle);

    if (normalizedFile === normalizedTitle && file.filename !== oldTitle) {
      titleChanges.push({
        oldTitle,
        newTitle: file.filename,
        id,
        prefix,
        suffix,
        fullMatch,
      });
      break;
    }
  }
}

console.log("将修改以下书名：");
console.log("================\n");

titleChanges.forEach((item, i) => {
  console.log(i + 1 + ". " + item.id);
  console.log('   "' + item.oldTitle + '"');
  console.log('   -> "' + item.newTitle + '"');
  console.log("");
});

console.log("总共修改: " + titleChanges.length + " 本书");
console.log("\n正在写入文件...");

titleChanges.forEach(item => {
  const newContent = item.prefix + item.newTitle + item.suffix;
  content = content.replace(item.fullMatch, newContent);
});

fs.writeFileSync(booksDataPath, content, "utf-8");
console.log("完成！");
