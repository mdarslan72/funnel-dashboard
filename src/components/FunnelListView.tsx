import React, { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Header } from "./Header";
import { SearchControls } from "./SearchControls";
import { FunnelTable } from "./FunnelTable";
import { Pagination } from "./Pagination";
import { FoldersList } from "./FoldersList";
import { useSearch } from "../hooks/useSearch";
import { usePagination } from "../hooks/usePagination";
import type { Funnel, ViewMode, Folder } from "../types";

interface FunnelListViewProps {
  funnels: Funnel[];
  folders?: Folder[];
  currentPage: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onCreateFolder: () => void;
  onCreateFunnel: () => void;
  viewMode?: ViewMode;
  onViewModeChange?: (mode: ViewMode) => void;
  isLoadingViewMode?: boolean;
}

export const FunnelListView: React.FC<FunnelListViewProps> = ({
  funnels,
  folders = [],
  currentPage,
  onPageChange,
  itemsPerPage,
  onCreateFolder,
  onCreateFunnel,
  viewMode = "time",
  onViewModeChange,
  isLoadingViewMode = false,
}) => {
  const { searchTerm, setSearchTerm, filteredFunnels, isSearching } = useSearch(
    {
      funnels,
    }
  );

  const { items: paginatedFunnels, totalPages } = usePagination({
    items: filteredFunnels,
    currentPage,
    itemsPerPage,
  });

  // Reset to page 1 when search results change
  useEffect(() => {
    if (searchTerm && currentPage > 1) {
      onPageChange(1);
    }
  }, [filteredFunnels.length, searchTerm, currentPage, onPageChange]);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Header onCreateFolder={onCreateFolder} onCreateFunnel={onCreateFunnel} />
      <SearchControls
        placeholder="Search for Funnels"
        searchValue={searchTerm}
        onSearchChange={setSearchTerm}
        showTimeAndListIcons={true}
        viewMode={viewMode}
        onViewModeChange={onViewModeChange}
      />

      <FoldersList folders={folders} isVisible={folders.length > 0} />

      {/* Loading Overlay for View Mode Change */}
      {isLoadingViewMode && (
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-lg">
            <Loader2 size={24} className="animate-spin text-blue-600" />
            <span className="text-gray-700">Switching view...</span>
          </div>
        </div>
      )}

      {/* Loading Overlay for Search */}
      {isSearching && (
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-lg">
            <Loader2 size={24} className="animate-spin text-blue-600" />
            <span className="text-gray-700">Searching...</span>
          </div>
        </div>
      )}

      <FunnelTable funnels={paginatedFunnels} viewMode={viewMode} />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};
