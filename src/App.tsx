import React, { useState } from "react";
import {
  FunnelListView,
  CreateFunnelModal,
  CreateFolderModal,
  BrowseTemplatesModal,
  Toast,
} from "./components";
import { useFunnelManagement } from "./hooks/useFunnelManagement";
import { useFolderManagement } from "./hooks/useFolderManagement";
import type { ViewMode } from "./types";

const FunnelManagementUI: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("time"); // Default to time view (no status tags)
  const [isLoadingViewMode, setIsLoadingViewMode] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
    isVisible: boolean;
  }>({
    message: "",
    type: "success",
    isVisible: false,
  });

  const { funnels, currentPage, setCurrentPage, addFunnel, itemsPerPage } =
    useFunnelManagement();

  const { folders, addFolder } = useFolderManagement();

  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "success"
  ) => {
    setToast({
      message,
      type,
      isVisible: true,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const handleViewModeChange = async (mode: ViewMode) => {
    setIsLoadingViewMode(true);
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    setViewMode(mode);
    setIsLoadingViewMode(false);
  };

  const handleCreateFolder = (name: string) => {
    const newFolder = addFolder(name);
    showToast(`Folder "${newFolder.name}" created successfully!`);
    setShowCreateFolder(false);
  };

  const handleCreateFunnel = (name: string) => {
    addFunnel(name);
    showToast(`Funnel "${name}" created successfully!`);
    setShowCreateModal(false);
  };

  const openCreateModal = () => {
    setShowCreateModal(true);
    setShowTemplates(false);
  };

  const openTemplates = () => {
    setShowTemplates(true);
  };

  return (
    <>
      <FunnelListView
        funnels={funnels}
        folders={folders}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        onCreateFolder={() => setShowCreateFolder(true)}
        onCreateFunnel={openCreateModal}
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
        isLoadingViewMode={isLoadingViewMode}
      />

      <CreateFunnelModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreateBlank={handleCreateFunnel}
        onBrowseTemplates={openTemplates}
      />

      <BrowseTemplatesModal
        isOpen={showTemplates}
        onClose={() => setShowTemplates(false)}
        onCreateFunnel={openCreateModal}
      />

      <CreateFolderModal
        isOpen={showCreateFolder}
        onClose={() => setShowCreateFolder(false)}
        onCreateFolder={handleCreateFolder}
      />

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
};

export default FunnelManagementUI;
