import { useState, useEffect, useRef } from "react";
import type { Funnel } from "../types";

interface UseSearchProps {
  funnels: Funnel[];
  delay?: number;
}

export const useSearch = ({ funnels, delay = 300 }: UseSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFunnels, setFilteredFunnels] = useState(funnels);
  const [isSearching, setIsSearching] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update filtered funnels when base funnels change
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredFunnels(funnels);
    }
  }, [funnels, searchTerm]);

  useEffect(() => {
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // If search term is empty, return all funnels immediately
    if (!searchTerm.trim()) {
      setFilteredFunnels(funnels);
      setIsSearching(false);
      return;
    }

    // Set loading state
    setIsSearching(true);

    // Create new timeout for debounced search
    timeoutRef.current = setTimeout(() => {
      const filtered = funnels.filter((funnel) =>
        funnel.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
      setFilteredFunnels(filtered);
      setIsSearching(false);
    }, delay);

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchTerm, funnels, delay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    filteredFunnels,
    isSearching,
  };
};
