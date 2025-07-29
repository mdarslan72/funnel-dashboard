import { useMemo } from "react";
import type { Funnel } from "../types";

interface UsePaginationProps {
  items: Funnel[];
  currentPage: number;
  itemsPerPage: number;
}

export const usePagination = ({
  items,
  currentPage,
  itemsPerPage,
}: UsePaginationProps) => {
  const paginatedData = useMemo(() => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

    return {
      items: paginatedItems,
      totalPages,
      hasItems: items.length > 0,
    };
  }, [items, currentPage, itemsPerPage]);

  return paginatedData;
};
