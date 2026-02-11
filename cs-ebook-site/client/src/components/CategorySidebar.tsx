/**
 * CategorySidebar 组件 - 分类导航
 * 深色极简科技风格
 */

import { ChevronDown, ChevronRight } from "lucide-react";
import { booksData } from "@/lib/books-data";

interface CategorySidebarProps {
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  expandedCategories: Set<string>;
  onCategorySelect: (categoryId: string) => void;
  onSubcategorySelect: (categoryId: string, subcategoryId: string) => void;
  onToggleCategory: (categoryId: string) => void;
}

export function CategorySidebar({
  selectedCategory,
  selectedSubcategory,
  expandedCategories,
  onCategorySelect,
  onSubcategorySelect,
  onToggleCategory,
}: CategorySidebarProps) {
  return (
    <div className="w-64 bg-card border-r border-border overflow-y-auto">
      <div className="p-4 space-y-2">
        {booksData.map(category => (
          <div key={category.id}>
            <button
              onClick={() => onCategorySelect(category.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/30"
                  : "hover:bg-secondary text-foreground"
              }`}
            >
              <span className="font-medium text-sm">{category.name}</span>
              {expandedCategories.has(category.id) ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

            {/* Subcategories */}
            {expandedCategories.has(category.id) && (
              <div className="ml-4 mt-1 space-y-1 border-l border-border pl-2">
                {category.subcategories.map(subcategory => (
                  <button
                    key={subcategory.id}
                    onClick={() =>
                      onSubcategorySelect(category.id, subcategory.id)
                    }
                    className={`w-full text-left px-3 py-1.5 rounded text-sm transition-all duration-200 ${
                      selectedSubcategory === subcategory.id &&
                      selectedCategory === category.id
                        ? "bg-accent text-accent-foreground font-medium shadow-md shadow-accent/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {subcategory.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
