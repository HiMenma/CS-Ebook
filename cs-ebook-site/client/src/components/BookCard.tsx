/**
 * BookCard 组件 - 深色极简科技风格
 * 用于展示单本书籍，带有图片加载错误处理
 */

import { useState } from "react";
import { Book } from "@/lib/books-data";
import { BookOpen } from "lucide-react";

interface BookCardProps {
  book: Book;
  bookCoverUrl?: string;
}

// 获取书籍图片路径 - 使用 GitHub 原始链接作为 CDN 源
function getBookImagePath(category: string, subcategory: string, title: string): string {
  // 映射分类到中文名称
  const categoryMap: Record<string, string> = {
    "ai": "人工智能",
    "prog": "编程语言",
    "fund": "计算机基础",
    "bd": "大数据处理",
    "math": "数学基础",
    "soft": "软件工程",
    "app": "应用技术/数字媒体技术",
    "guide": "晋级指南",
  };

  const subcategoryMap: Record<string, Record<string, string>> = {
    "ai": {
      "ai-cv": "图像处理",
      "ai-rl": "强化学习",
      "ai-ml": "机器学习",
      "ai-dl": "深度学习",
      "ai-nlp": "自然语言处理",
    },
    "prog": {
      "prog-python": "Python",
      "prog-java": "Java",
      "prog-js": "JavaScript",
      "prog-cpp": "C++",
      "prog-go": "Go",
      "prog-rust": "Rust",
    },
    "fund": {
      "fund-os": "操作系统",
      "fund-algo": "算法与数据结构",
      "fund-network": "计算机网络",
    },
    "bd": {
      "bd-analysis": "数据分析",
      "bd-mining": "数据挖掘",
    },
    "math": {
      "math-applied": "应用数学",
      "math-advanced": "高等数学",
    },
    "soft": {
      "soft-arch": "软件架构",
      "soft-eng": "软件工程",
    },
    "app": {
      "app-media": "数字媒体技术",
    },
    "guide": {
      "guide-survival": "生存指南",
      "guide-exam": "软考",
      "guide-interview": "面试",
    },
  };

  const catName = categoryMap[category] || category;
  const subCatMap = subcategoryMap[category] || {};
  const subCatName = subCatMap[subcategory] || subcategory;

  // 使用 GitHub 原始链接作为 CDN 源
  const encodedCatName = encodeURIComponent(catName);
  const encodedSubCatName = encodeURIComponent(subCatName);
  const encodedTitle = encodeURIComponent(title);
  
  return `https://raw.githubusercontent.com/HiMenma/CS-Ebook/main/images/${encodedCatName}/${encodedSubCatName}/${encodedTitle}.jpg`;
}

// 生成 Z-Library 搜索链接
function getZLibraryLink(title: string): string {
  const encodedTitle = encodeURIComponent(title);
  return `https://z-library.sk/s/${encodedTitle}`;
}

export function BookCard({ book, bookCoverUrl }: BookCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // 使用本地图片路径
  const imagePath = getBookImagePath(book.category, book.subcategory, book.title);
  const zLibraryUrl = getZLibraryLink(book.title);

  // 生成基于书籍标题的渐变背景色
  const generateGradient = (title: string) => {
    const hash = title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = [
      "from-green-500 to-emerald-600",
      "from-cyan-500 to-blue-600",
      "from-purple-500 to-pink-600",
      "from-yellow-500 to-orange-600",
      "from-indigo-500 to-purple-600",
    ];
    return colors[hash % colors.length];
  };

  return (
    <a 
      href={zLibraryUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer h-full block"
    >
      <div className="relative rounded-md overflow-hidden mb-3 aspect-square bg-secondary border border-border transition-all duration-300 hover:border-accent hover:shadow-lg group-hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]">
        {/* 书籍封面 */}
        {!imageError ? (
          <>
            <img
              src={imagePath}
              alt={book.title}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* 加载中的占位符 */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="w-8 h-8 text-accent mx-auto mb-2 animate-pulse" />
                  <p className="text-xs text-muted-foreground">加载中...</p>
                </div>
              </div>
            )}
          </>
        ) : (
          /* 图片加载失败时的占位符 */
          <div className={`w-full h-full bg-gradient-to-br ${generateGradient(book.title)} flex items-center justify-center`}>
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-white mx-auto mb-2 opacity-80" />
              <p className="text-xs text-white/70 px-2">{book.title}</p>
            </div>
          </div>
        )}

        {/* 悬停覆盖层 */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-accent text-3xl">→</div>
          </div>
        </div>
      </div>

      {/* 书籍信息 */}
      <div className="space-y-1">
        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-accent transition-colors duration-200 leading-tight">
          {book.title}
        </h3>
        <p className="text-xs text-muted-foreground truncate">{book.subcategory}</p>
      </div>
    </a>
  );
}
