import React, { useState } from "react";
import { X } from "lucide-react";
import type { CreateType } from "../types";

interface CreateFunnelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateBlank: (name: string) => void;
  onBrowseTemplates: () => void;
}

export const CreateFunnelModal: React.FC<CreateFunnelModalProps> = ({
  isOpen,
  onClose,
  onCreateBlank,
  onBrowseTemplates,
}) => {
  const [createType, setCreateType] = useState<CreateType>("blank");
  const [funnelName, setFunnelName] = useState("");

  if (!isOpen) return null;

  const handleCreate = () => {
    if (createType === "template") {
      onBrowseTemplates();
    } else if (funnelName.trim()) {
      onCreateBlank(funnelName);
      setFunnelName("");
    }
  };

  const handleClose = () => {
    onClose();
    setFunnelName("");
    setCreateType("blank");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Create New Funnel</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* From Blank */}
          <div
            className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
              createType === "blank"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setCreateType("blank")}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  createType === "blank"
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {createType === "blank" && (
                  <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                )}
              </div>
              <h3 className="font-semibold">From blank</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Design from scratch using the funnel builder
            </p>

            {createType === "blank" && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Funnel Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name for your awesome Funnel"
                  value={funnelName}
                  onChange={(e) => setFunnelName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            )}
          </div>

          {/* From Templates */}
          <div
            className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
              createType === "template"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setCreateType("template")}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  createType === "template"
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {createType === "template" && (
                  <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                )}
              </div>
              <h3 className="font-semibold">From templates</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Jump start with an awesome prebuilt Funnel
            </p>

            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-4 text-white text-center">
              <div className="text-lg font-semibold mb-1">Over 1000+</div>
              <div className="text-sm opacity-90">Templates</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={handleClose}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={createType === "blank" && !funnelName.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {createType === "template" ? "Browse Templates" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};
