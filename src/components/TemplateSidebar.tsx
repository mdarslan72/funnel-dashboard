import React from "react";
import { templateCategories, browseCategoryOptions } from "../data/mockData";

interface TemplateSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const TemplateSidebar: React.FC<TemplateSidebarProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="space-y-2">
        {templateCategories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
              selectedCategory === category
                ? "bg-blue-50 text-blue-700 font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-medium text-gray-900 mb-3">Browse Categories</h3>
        <div className="space-y-1 text-sm">
          {browseCategoryOptions.map((cat) => (
            <div key={cat} className="flex items-center gap-2 py-1">
              <input type="checkbox" className="rounded border-gray-300" />
              <label className="text-gray-600">{cat}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
