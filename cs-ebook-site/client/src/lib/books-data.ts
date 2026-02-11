/**
 * CS-Ebook 书籍数据
 * 深色极简科技风格 - 数据驱动的书籍展示
 */

export interface Book {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  description?: string;
  authors?: string[];
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  books: Book[];
}

// 书籍数据
export const booksData: Category[] = [
  {
    id: "ai",
    name: "人工智能",
    subcategories: [
      {
        id: "ai-cv",
        name: "图像处理",
        books: [
          {
            id: "ai-cv-1",
            title: "3D计算机视觉",
            category: "ai",
            subcategory: "ai-cv",
          },
          {
            id: "ai-cv-2",
            title: "OpenCV计算机视觉教程",
            category: "ai",
            subcategory: "ai-cv",
          },
          {
            id: "ai-cv-3",
            title: "OpenCV轻松入门",
            category: "ai",
            subcategory: "ai-cv",
          },
          {
            id: "ai-cv-4",
            title: "Python OpenCV 从入门到精通",
            category: "ai",
            subcategory: "ai-cv",
          },
          {
            id: "ai-cv-5",
            title: "动手学计算机视觉",
            category: "ai",
            subcategory: "ai-cv",
          },
          {
            id: "ai-cv-6",
            title: "图像工程 (第4版)",
            category: "ai",
            subcategory: "ai-cv",
          },
          {
            id: "ai-cv-7",
            title: "数字图像处理（第4版）",
            category: "ai",
            subcategory: "ai-cv",
          },
          {
            id: "ai-cv-8",
            title: "深度学习与目标检测（第2版）",
            category: "ai",
            subcategory: "ai-cv",
          },
          {
            id: "ai-cv-9",
            title: "深度学习之PyTorch物体检测实战",
            category: "ai",
            subcategory: "ai-cv",
          },
          {
            id: "ai-cv-10",
            title: "深度学习入门",
            category: "ai",
            subcategory: "ai-cv",
          },
          {
            id: "ai-cv-11",
            title: "视觉SLAM十四讲 (第2版)",
            category: "ai",
            subcategory: "ai-cv",
          },
        ],
      },
      {
        id: "ai-rl",
        name: "强化学习",
        books: [
          {
            id: "ai-rl-1",
            title: "Easy RL强化学习教程",
            category: "ai",
            subcategory: "ai-rl",
          },
          {
            id: "ai-rl-2",
            title: "动手学强化学习",
            category: "ai",
            subcategory: "ai-rl",
          },
          {
            id: "ai-rl-3",
            title: "强化学习（第2版）",
            category: "ai",
            subcategory: "ai-rl",
          },
          {
            id: "ai-rl-4",
            title: "深度学习入门4",
            category: "ai",
            subcategory: "ai-rl",
          },
          {
            id: "ai-rl-5",
            title: "深度强化学习",
            category: "ai",
            subcategory: "ai-rl",
          },
        ],
      },
      {
        id: "ai-ml",
        name: "机器学习",
        books: [
          {
            id: "ai-ml-1",
            title: "人工智能 现代方法（第4版）",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-2",
            title: "动手学机器学习",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-3",
            title: "可解释人工智能导论",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-4",
            title: "吴恩达机器学习笔记",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-5",
            title: "实用推荐系统",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-6",
            title: "机器学习 (第2版)",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-7",
            title: "机器学习 公式推到与代码实现",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-8",
            title: "机器学习",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-9",
            title: "机器学习7",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-10",
            title: "机器学习Python实战",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-11",
            title: "机器学习公式详解",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-12",
            title: "机器学习实战 (第2版)",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-13",
            title: "百面机器学习",
            category: "ai",
            subcategory: "ai-ml",
          },
          {
            id: "ai-ml-14",
            title: "美团机器学习实践",
            category: "ai",
            subcategory: "ai-ml",
          },
        ],
      },
      {
        id: "ai-dl",
        name: "深度学习",
        books: [
          {
            id: "ai-dl-1",
            title: "Python深度学习 基于PyTorch（第2版）",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-2",
            title: "Python深度学习（第2版）",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-3",
            title: "Python神经网络编程",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-4",
            title: "Pytorch 深度学习实战",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-5",
            title: "TensorFlow深度学习",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-6",
            title: "动手学Pytorch建模与应用",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-7",
            title: "动手学深度学习 (第2版)",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-8",
            title: "吴恩达深度学习笔记",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-9",
            title: "图神经网络",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-10",
            title: "李宏毅深度学习教程",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-11",
            title: "模式识别与机器学习",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-12",
            title: "深度学习 基础与概念",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-13",
            title: "深度学习",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-14",
            title: "深度学习500问",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-15",
            title: "深度学习入门2",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-16",
            title: "深度学习原理与Pytorch实战 (第2版)",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-17",
            title: "深度学习原理与实践",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-18",
            title: "深度学习推荐系统",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-19",
            title: "深度学习高手笔记",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-20",
            title: "百面深度学习",
            category: "ai",
            subcategory: "ai-dl",
          },
          {
            id: "ai-dl-21",
            title: "神经网络与深度学习",
            category: "ai",
            subcategory: "ai-dl",
          },
        ],
      },
      {
        id: "ai-nlp",
        name: "自然语言处理",
        books: [
          {
            id: "ai-nlp-1",
            title: "BERT基础教程",
            category: "ai",
            subcategory: "ai-nlp",
          },
          {
            id: "ai-nlp-2",
            title: "Pytorch自然语言处理",
            category: "ai",
            subcategory: "ai-nlp",
          },
          {
            id: "ai-nlp-3",
            title: "一本书读懂AIGC",
            category: "ai",
            subcategory: "ai-nlp",
          },
          {
            id: "ai-nlp-4",
            title: "从零构建大模型",
            category: "ai",
            subcategory: "ai-nlp",
          },
          {
            id: "ai-nlp-5",
            title: "大模型基础",
            category: "ai",
            subcategory: "ai-nlp",
          },
          {
            id: "ai-nlp-6",
            title: "大规模语言模型",
            category: "ai",
            subcategory: "ai-nlp",
          },
          {
            id: "ai-nlp-7",
            title: "深度学习进阶",
            category: "ai",
            subcategory: "ai-nlp",
          },
          {
            id: "ai-nlp-8",
            title: "知识图谱与深度学习",
            category: "ai",
            subcategory: "ai-nlp",
          },
          {
            id: "ai-nlp-9",
            title: "知识图谱导论",
            category: "ai",
            subcategory: "ai-nlp",
          },
          {
            id: "ai-nlp-10",
            title: "自然语言处理",
            category: "ai",
            subcategory: "ai-nlp",
          },
          {
            id: "ai-nlp-11",
            title: "自然语言处理实战",
            category: "ai",
            subcategory: "ai-nlp",
          },
          {
            id: "ai-nlp-12",
            title: "自然语言处理导论",
            category: "ai",
            subcategory: "ai-nlp",
          },
          {
            id: "ai-nlp-13",
            title: "自然语言处理：基于预训练模型的方法",
            category: "ai",
            subcategory: "ai-nlp",
          },
        ],
      },
    ],
  },
  {
    id: "programming",
    name: "编程语言",
    subcategories: [
      {
        id: "prog-python",
        name: "Python",
        books: [
          {
            id: "prog-python-1",
            title: "Effect Python",
            category: "programming",
            subcategory: "prog-python",
          },
          {
            id: "prog-python-2",
            title: "Python基础教程 (第3版)",
            category: "programming",
            subcategory: "prog-python",
          },
          {
            id: "prog-python-3",
            title: "Python编程快速上手",
            category: "programming",
            subcategory: "prog-python",
          },
          {
            id: "prog-python-4",
            title: "Python编程：从入门到实践（第3版）",
            category: "programming",
            subcategory: "prog-python",
          },
          {
            id: "prog-python-5",
            title: "流畅的 Python（第2版）",
            category: "programming",
            subcategory: "prog-python",
          },
          {
            id: "prog-python-6",
            title: "编程不难",
            category: "programming",
            subcategory: "prog-python",
          },
        ],
      },
      {
        id: "prog-java",
        name: "Java",
        books: [
          {
            id: "prog-java-1",
            title: "Effective Java (第3版)",
            category: "programming",
            subcategory: "prog-java",
          },
          {
            id: "prog-java-2",
            title: "Java实战 (第2版)",
            category: "programming",
            subcategory: "prog-java",
          },
          {
            id: "prog-java-3",
            title: "Java核心技术（原书第12版）",
            category: "programming",
            subcategory: "prog-java",
          },
          {
            id: "prog-java-4",
            title: "Java编程思想 (第5版)",
            category: "programming",
            subcategory: "prog-java",
          },
          {
            id: "prog-java-5",
            title: "深入理解Java虚拟机（第3版）",
            category: "programming",
            subcategory: "prog-java",
          },
        ],
      },
      {
        id: "prog-js",
        name: "JavaScript",
        books: [
          {
            id: "prog-js-1",
            title: "JavaScript权威指南 (第7版)",
            category: "programming",
            subcategory: "prog-js",
          },
          {
            id: "prog-js-2",
            title: "JavaScript高级程序设计 (第4版)",
            category: "programming",
            subcategory: "prog-js",
          },
          {
            id: "prog-js-3",
            title: "你不知道的JavaScript",
            category: "programming",
            subcategory: "prog-js",
          },
          {
            id: "prog-js-4",
            title: "深入理解ES6",
            category: "programming",
            subcategory: "prog-js",
          },
        ],
      },
      {
        id: "prog-cpp",
        name: "C++",
        books: [
          {
            id: "prog-cpp-1",
            title: "C++ Primer (第5版)",
            category: "programming",
            subcategory: "prog-cpp",
          },
          {
            id: "prog-cpp-2",
            title: "C++ Primer Plus (第6版)",
            category: "programming",
            subcategory: "prog-cpp",
          },
          {
            id: "prog-cpp-3",
            title: "Effective Modern C++",
            category: "programming",
            subcategory: "prog-cpp",
          },
        ],
      },
      {
        id: "prog-go",
        name: "Go",
        books: [
          {
            id: "prog-go-1",
            title: "Go程序设计语言",
            category: "programming",
            subcategory: "prog-go",
          },
          {
            id: "prog-go-2",
            title: "Go语言学习笔记",
            category: "programming",
            subcategory: "prog-go",
          },
        ],
      },
      {
        id: "prog-rust",
        name: "Rust",
        books: [
          {
            id: "prog-rust-1",
            title: "Rust 程序设计（第2版）",
            category: "programming",
            subcategory: "prog-rust",
          },
          {
            id: "prog-rust-2",
            title: "精通Rust（第2版)",
            category: "programming",
            subcategory: "prog-rust",
          },
        ],
      },
    ],
  },
  {
    id: "fundamentals",
    name: "计算机基础",
    subcategories: [
      {
        id: "fund-os",
        name: "操作系统",
        books: [
          {
            id: "fund-os-1",
            title: "操作系统导论",
            category: "fundamentals",
            subcategory: "fund-os",
          },
          {
            id: "fund-os-2",
            title: "深入理解计算机系统（第3版）",
            category: "fundamentals",
            subcategory: "fund-os",
          },
        ],
      },
      {
        id: "fund-algo",
        name: "算法与数据结构",
        books: [
          {
            id: "fund-algo-1",
            title: "算法导论（第3版）",
            category: "fundamentals",
            subcategory: "fund-algo",
          },
          {
            id: "fund-algo-2",
            title: "算法  (第4版)",
            category: "fundamentals",
            subcategory: "fund-algo",
          },
          {
            id: "fund-algo-3",
            title: "数据结构与算法分析（第2版）",
            category: "fundamentals",
            subcategory: "fund-algo",
          },
        ],
      },
      {
        id: "fund-network",
        name: "计算机网络",
        books: [
          {
            id: "fund-network-1",
            title: "计算机网络 自顶向下方法 (第7版)",
            category: "fundamentals",
            subcategory: "fund-network",
          },
          {
            id: "fund-network-2",
            title: "TCP IP详解 (第2版)",
            category: "fundamentals",
            subcategory: "fund-network",
          },
        ],
      },
    ],
  },
  {
    id: "bigdata",
    name: "大数据处理",
    subcategories: [
      {
        id: "bd-analysis",
        name: "数据分析",
        books: [
          {
            id: "bd-analysis-1",
            title: "Hadoop权威指南",
            category: "bigdata",
            subcategory: "bd-analysis",
          },
          {
            id: "bd-analysis-2",
            title: "Python数据科学手册 (第2版)",
            category: "bigdata",
            subcategory: "bd-analysis",
          },
          {
            id: "bd-analysis-3",
            title: "利用Python进行数据分析 (第3版)",
            category: "bigdata",
            subcategory: "bd-analysis",
          },
        ],
      },
      {
        id: "bd-mining",
        name: "数据挖掘",
        books: [
          {
            id: "bd-mining-1",
            title: "数据密集型应用系统设计",
            category: "bigdata",
            subcategory: "bd-mining",
          },
          {
            id: "bd-mining-2",
            title: "数据挖掘 概念与技术 (第3版)",
            category: "bigdata",
            subcategory: "bd-mining",
          },
          {
            id: "bd-mining-3",
            title: "数据挖掘导论 (完整版)",
            category: "bigdata",
            subcategory: "bd-mining",
          },
        ],
      },
    ],
  },
  {
    id: "math",
    name: "数学基础",
    subcategories: [
      {
        id: "math-applied",
        name: "应用数学",
        books: [
          {
            id: "math-applied-1",
            title: "具体数学 (第2版)",
            category: "math",
            subcategory: "math-applied",
          },
          {
            id: "math-applied-2",
            title: "吴军数学通识讲义",
            category: "math",
            subcategory: "math-applied",
          },
          {
            id: "math-applied-3",
            title: "数学之美（第3版）",
            category: "math",
            subcategory: "math-applied",
          },
          {
            id: "math-applied-4",
            title: "程序员的数学 (第2版)",
            category: "math",
            subcategory: "math-applied",
          },
        ],
      },
      {
        id: "math-advanced",
        name: "高等数学",
        books: [
          {
            id: "math-advanced-1",
            title: "普林斯顿微积分读本 (修订版)",
            category: "math",
            subcategory: "math-advanced",
          },
          {
            id: "math-advanced-2",
            title: "线性代数及其应用 (第4版)",
            category: "math",
            subcategory: "math-advanced",
          },
          {
            id: "math-advanced-3",
            title: "离散数学及其应用（第8版）",
            category: "math",
            subcategory: "math-advanced",
          },
        ],
      },
    ],
  },
];

// 获取所有书籍的平面列表
export function getAllBooks(): Book[] {
  const allBooks: Book[] = [];
  booksData.forEach(category => {
    category.subcategories.forEach(subcategory => {
      allBooks.push(...subcategory.books);
    });
  });
  return allBooks;
}

// 搜索书籍
export function searchBooks(query: string): Book[] {
  const lowerQuery = query.toLowerCase();
  return getAllBooks().filter(
    book =>
      book.title.toLowerCase().includes(lowerQuery) ||
      book.category.toLowerCase().includes(lowerQuery) ||
      book.subcategory.toLowerCase().includes(lowerQuery)
  );
}

// 按分类获取书籍
export function getBooksByCategory(categoryId: string): Book[] {
  const category = booksData.find(c => c.id === categoryId);
  if (!category) return [];
  const books: Book[] = [];
  category.subcategories.forEach(subcategory => {
    books.push(...subcategory.books);
  });
  return books;
}

// 按子分类获取书籍
export function getBooksBySubcategory(
  categoryId: string,
  subcategoryId: string
): Book[] {
  const category = booksData.find(c => c.id === categoryId);
  if (!category) return [];
  const subcategory = category.subcategories.find(s => s.id === subcategoryId);
  return subcategory?.books || [];
}
