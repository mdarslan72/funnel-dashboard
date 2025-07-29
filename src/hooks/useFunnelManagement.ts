import { useState } from "react";
import type { Funnel } from "../types";
import { mockFunnels } from "../data/mockData";

export const useFunnelManagement = () => {
  const [funnels, setFunnels] = useState<Funnel[]>(mockFunnels);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 7;

  // Return all funnels without pagination here
  // Pagination will be handled after search filtering
  const addFunnel = (name: string) => {
    const newFunnel: Funnel = {
      id: Date.now().toString(),
      name,
      status: "Draft",
      steps: 0,
      lastUpdated: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    };
    setFunnels([newFunnel, ...funnels]);
    setCurrentPage(1); // Reset to first page when adding new funnel
  };

  return {
    funnels,
    currentPage,
    setCurrentPage,
    addFunnel,
    itemsPerPage,
  };
};
