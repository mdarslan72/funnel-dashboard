import { useState } from "react";
import type { Folder } from "../types";
import { mockFolders } from "../data/mockData";

export const useFolderManagement = () => {
  const [folders, setFolders] = useState<Folder[]>(mockFolders);

  const addFolder = (name: string) => {
    const newFolder: Folder = {
      id: `folder-${Date.now()}`,
      name,
      createdAt: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      funnelCount: 0,
    };
    setFolders([newFolder, ...folders]);
    return newFolder;
  };

  const deleteFolder = (folderId: string) => {
    setFolders(folders.filter((folder) => folder.id !== folderId));
  };

  const updateFolderCount = (folderId: string, count: number) => {
    setFolders(
      folders.map((folder) =>
        folder.id === folderId ? { ...folder, funnelCount: count } : folder
      )
    );
  };

  return {
    folders,
    addFolder,
    deleteFolder,
    updateFolderCount,
  };
};
