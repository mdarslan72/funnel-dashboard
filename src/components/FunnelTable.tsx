import React from "react";
import { MoreHorizontal } from "lucide-react";
import type { Funnel, ViewMode } from "../types";

interface FunnelTableProps {
  funnels: Funnel[];
  viewMode?: ViewMode;
}

export const FunnelTable: React.FC<FunnelTableProps> = ({
  funnels,
  viewMode = "list",
}) => {
  return (
    <div className="bg-white mx-6 mt-6 rounded-lg shadow-sm border border-gray-200">
      {/* Table Header */}
      {viewMode === "list" ? (
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-200 text-sm font-medium text-gray-600">
          <div className="col-span-4">Name</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-3">Last Updated</div>
          <div className="col-span-2">Steps</div>
          <div className="col-span-1"></div>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-200 text-sm font-medium text-gray-600">
          <div className="col-span-6">Name</div>
          <div className="col-span-4">Last Updated</div>
          <div className="col-span-1">Steps</div>
          <div className="col-span-1"></div>
        </div>
      )}

      {/* Table Rows */}
      {funnels.map((funnel) => (
        <div
          key={funnel.id}
          className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50"
        >
          {viewMode === "list" ? (
            <>
              <div className="col-span-4 font-medium text-gray-900">
                {funnel.name}
              </div>
              <div className="col-span-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                  {funnel.status}
                </span>
              </div>
              <div className="col-span-3 text-gray-600 text-sm">
                {funnel.lastUpdated}
              </div>
              <div className="col-span-2">
                <span
                  className={`text-sm ${
                    funnel.steps === 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {funnel.steps} Step{funnel.steps !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreHorizontal size={16} className="text-gray-400" />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="col-span-6 font-medium text-gray-900">
                {funnel.name}
              </div>
              <div className="col-span-4 text-gray-600 text-sm">
                {funnel.lastUpdated}
              </div>
              <div className="col-span-1">
                <span
                  className={`text-sm ${
                    funnel.steps === 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {funnel.steps} Step{funnel.steps !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreHorizontal size={16} className="text-gray-400" />
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
