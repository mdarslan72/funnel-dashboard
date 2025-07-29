import React from "react";
import { Folder, Plus } from "lucide-react";

interface HeaderProps {
  onCreateFolder: () => void;
  onCreateFunnel: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onCreateFolder,
  onCreateFunnel,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Funnels</h1>
          <p className="text-gray-600 mt-1">
            Build funnels to generate leads, appointments and receive payment
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onCreateFolder}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Folder size={16} />
            Create Folder
          </button>
          <button
            onClick={onCreateFunnel}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={16} />
            New Funnel
          </button>
        </div>
      </div>
    </div>
  );
};
