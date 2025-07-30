import React, { useState } from "react";
import { TemplateHeader } from "./TemplateHeader";
import { TemplateSidebar } from "./TemplateSidebar";
import { TemplateControls } from "./TemplateControls";
import { TemplateGrid } from "./TemplateGrid";
import { mockTemplates } from "../data/mockData";

interface TemplateViewProps {
  onCreateFolder: () => void;
  onCreateFunnel: () => void;
}

export const TemplateView: React.FC<TemplateViewProps> = ({
  onCreateFolder,
  onCreateFunnel,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Templates");
  console.log("Mock Templates:", mockTemplates);
  const filteredTemplates = mockTemplates.filter(
    (template) =>
      selectedCategory === "All Templates" ||
      template.category === selectedCategory ||
      template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("Filtered Templates:", filteredTemplates);

  return (
    <div className="min-h-screen bg-gray-50">
      <TemplateHeader
        onCreateFolder={onCreateFolder}
        onCreateFunnel={onCreateFunnel}
      />

      <div className="flex h-[calc(100vh-120px)]">
        <TemplateSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="flex-1 p-6">
          <TemplateControls
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <TemplateGrid templates={filteredTemplates} />
        </div>
      </div>
    </div>
  );
};
