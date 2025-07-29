import React from "react";
import { Search, Clock, List } from "lucide-react";
import type { ViewMode } from "../types";

interface SearchControlsProps {
  placeholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  showTimeAndListIcons?: boolean;
  viewMode?: ViewMode;
  onViewModeChange?: (mode: ViewMode) => void;
}

export const SearchControls: React.FC<SearchControlsProps> = ({
  placeholder = "Search",
  searchValue = "",
  onSearchChange,
  showTimeAndListIcons = false,
  viewMode = "time",
  onViewModeChange,
}) => {
  return (
    <div className="bg-white px-6 py-4 border-b border-gray-200">
      <div className="flex items-center justify-end gap-4">
        {showTimeAndListIcons && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => onViewModeChange?.("time")}
              className={`p-2 rounded-lg ${
                viewMode === "time"
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <Clock size={20} />
            </button>
            <button
              onClick={() => onViewModeChange?.("list")}
              className={`p-2 rounded-lg ${
                viewMode === "list"
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <List size={20} />
            </button>
          </div>
        )}
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder={placeholder}
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
          />
        </div>
      </div>
    </div>
  );
};
