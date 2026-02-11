/**
 * Home 页面 - CS-Ebook 浏览器
 * 深色极简科技风格
 */

import { useState, useMemo } from "react";
import { booksData, getAllBooks, searchBooks } from "@/lib/books-data";
import { BookCard } from "@/components/BookCard";
import { CategorySidebar } from "@/components/CategorySidebar";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  // 搜索结果
  const filteredBooks = useMemo(() => {
    if (searchQuery.trim()) {
      return searchBooks(searchQuery);
    }

    if (selectedCategory && selectedSubcategory) {
      const category = booksData.find(c => c.id === selectedCategory);
      if (category) {
        const subcategory = category.subcategories.find(
          s => s.id === selectedSubcategory
        );
        return subcategory?.books || [];
      }
    }

    if (selectedCategory) {
      const category = booksData.find(c => c.id === selectedCategory);
      if (category) {
        const books: any[] = [];
        category.subcategories.forEach(sub => {
          books.push(...sub.books);
        });
        return books;
      }
    }

    return getAllBooks();
  }, [selectedCategory, selectedSubcategory, searchQuery]);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
    setSelectedSubcategory(null);
    if (!expandedCategories.has(categoryId)) {
      toggleCategory(categoryId);
    }
  };

  const handleSubcategorySelect = (
    categoryId: string,
    subcategoryId: string
  ) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(
      selectedSubcategory === subcategoryId ? null : subcategoryId
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center border-b border-border"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/P9M1bejlzT2S5vhaHXWwSy/sandbox/VdJEPTFeTkQbGCrYDJklyP-img-1_1770346986000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUDlNMWJlamx6VDJTNXZoYUhYV3dTeS9zYW5kYm94L1ZkSkVQVEZlVGtRYkdDcllESmtseVAtaW1nLTFfMTc3MDM0Njk4NjAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=luawBsxY-STDxNBS0JRnw8LPJLRpRMoCV~nv6Ob6Q0-Iu3rinu37uOUDiprO-wCsIudGJOxYaINkkFrawKPaJPlgp9VC6oZVJ1ZwFpXy1nJN8lbZhveBDRfl~r2V~IJwT8oOwio9vR8cIXevruGALDUIRPj6XLK6pJykwIAvYqHpgHAZv37vCgKO3-LV7JZLxoFJCj6lhcz1VlQ0enc51SRNaEgZNV90IjEUB7utjOVtWOWPzXuBg4Dcemj5rqulEfwstl8MCfMNOAb2b5R8a16Dk~LX6Eg0AZOg9x~qzhbIJPr2FEE2VoMpGTKezwurSjsRV~zjWmlcwcjz-EG27g__')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            CS-Ebook Explorer
          </h1>
          <p className="text-xl text-muted-foreground">
            高质量计算机科学书籍推荐库
          </p>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Categories */}
        <CategorySidebar
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          expandedCategories={expandedCategories}
          onCategorySelect={handleCategorySelect}
          onSubcategorySelect={handleSubcategorySelect}
          onToggleCategory={toggleCategory}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-background overflow-hidden">
          {/* Search Bar */}
          <SearchBar
            value={searchQuery}
            onChange={value => {
              setSearchQuery(value);
              setSelectedCategory(null);
              setSelectedSubcategory(null);
            }}
          />

          {/* Books Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 auto-rows-max">
                {filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-muted-foreground text-lg">
                    未找到相关书籍
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    尝试修改搜索条件
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="border-t border-border bg-card py-8 px-6"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/P9M1bejlzT2S5vhaHXWwSy/sandbox/VdJEPTFeTkQbGCrYDJklyP-img-5_1770346984000_na1fn_Zm9vdGVyLXBhdHRlcm4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUDlNMWJlamx6VDJTNXZoYUhYV3dTeS9zYW5kYm94L1ZkSkVQVEZlVGtRYkdDcllESmtseVAtaW1nLTVfMTc3MDM0Njk4NDAwMF9uYTFmbl9ZbTl2ZEdWeUxYQmhkSFJsY200LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=erZQ~YY4cy9KGGutmXMjjvxgXKq~-iQ~5Pq8h~NbECuUC5ihBWLMVhwmBByHXna9WApnbwxOZQoXUFVy8-tuo56nKon5crYwz6g4p8cMAGcPvtWI6CkhvVjvTpmqfYpzbzun-14Zh~DMoq5okvhbGpX8gZmHawh3gT-gG3nSxM96Y9l0DVwjl5eLrYRO1bfmAxIUPuF-VTjFppf3-rxrF0NDMBRboOcQGkF6YCfqiGopwUe-tPUzzG4hfFlT1nSi~rilJiWQQbEK~T2C2VTLy3zSOXKagmc92KKLc7KfCz5iPhfGJUBN2B~vOllBrIbBDND2sQsOBPze4MuOG~vA__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/80 rounded-lg p-6 backdrop-blur-sm max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold gradient-text mb-4">关于本站</h2>
          <p className="text-muted-foreground mb-4">
            本站是一个高质量、经典计算机书籍推荐库。精选各方向经典著作，帮助开发者系统学习计算机科学知识。
          </p>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-accent font-semibold mb-1">📚 书籍数量</p>
              <p className="text-muted-foreground">
                {getAllBooks().length}+ 本精选书籍
              </p>
            </div>
            <div>
              <p className="text-accent font-semibold mb-1">🎯 覆盖领域</p>
              <p className="text-muted-foreground">{booksData.length} 大类别</p>
            </div>
            <div>
              <p className="text-accent font-semibold mb-1">🔗 数据来源</p>
              <p className="text-muted-foreground">
                <a
                  href="https://github.com/HiMenma/CS-Ebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub 仓库
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
