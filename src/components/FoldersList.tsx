import React from "react";
import { Folder, Calendar } from "lucide-react";
import type { Folder as FolderType } from "../types";

interface FoldersListProps {
  folders: FolderType[];
  isVisible: boolean;
}

export const FoldersList: React.FC<FoldersListProps> = ({
  folders,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center gap-2 mb-3">
        <Folder size={20} className="text-blue-600" />
        <h3 className="font-medium text-gray-900">
          Folders ({folders.length})
        </h3>
      </div>

      {folders.length === 0 ? (
        <p className="text-gray-500 text-sm">No folders created yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {folders.map((folder) => (
            <div
              key={folder.id}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <Folder size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{folder.name}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>
                      {folder.funnelCount} funnel
                      {folder.funnelCount !== 1 ? "s" : ""}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{folder.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
