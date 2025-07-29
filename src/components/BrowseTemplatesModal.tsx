import React, { useState } from "react";
import { X } from "lucide-react";
import { TemplateSidebar } from "./TemplateSidebar";
import { TemplateControls } from "./TemplateControls";
import { TemplateGrid } from "./TemplateGrid";
import { mockTemplates } from "../data/mockData";

interface BrowseTemplatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateFunnel: () => void;
}

export const BrowseTemplatesModal: React.FC<BrowseTemplatesModalProps> = ({
  isOpen,
  onClose,
  onCreateFunnel,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Templates");

  if (!isOpen) return null;

  const filteredTemplates = mockTemplates.filter(
    (template) =>
      selectedCategory === "All Templates" ||
      template.category === selectedCategory
  );

  const handleClose = () => {
    onClose();
    setSearchTerm("");
    setSelectedCategory("All Templates");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-6xl mx-4 h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Browse Templates
            </h2>
            <p className="text-gray-600 mt-1">
              Choose from our collection of funnel templates
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex flex-1 overflow-hidden">
          <TemplateSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="flex-1 p-6 overflow-auto">
            <TemplateControls
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <TemplateGrid templates={filteredTemplates} />
          </div>
        </div>
      </div>
    </div>
  );
};
