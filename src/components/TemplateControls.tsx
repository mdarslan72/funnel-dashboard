import React from "react";
import { Search } from "lucide-react";

interface TemplateControlsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const TemplateControls: React.FC<TemplateControlsProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
          Filters
        </button>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search for a Template"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
      <select className="px-4 py-2 border border-gray-300 rounded-lg">
        <option>Most Popular</option>
        <option>Newest</option>
        <option>A-Z</option>
      </select>
    </div>
  );
};
