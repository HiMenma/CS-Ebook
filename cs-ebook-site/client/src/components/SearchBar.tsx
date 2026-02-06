/**
 * SearchBar 组件 - 搜索栏
 * 深色极简科技风格
 */

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "搜索书籍名称、作者或分类..." }: SearchBarProps) {
  return (
    <div className="border-b border-border p-6 bg-card">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="pl-10 pr-10 bg-input border-border text-foreground placeholder-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-200"
          />
          {value && (
            <button
              onClick={() => onChange("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
