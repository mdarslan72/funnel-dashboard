import type { Funnel, Template, Folder } from "../types";

export const mockFolders: Folder[] = [
  {
    id: "folder-1",
    name: "Marketing Campaigns",
    createdAt: "Jul 15, 2025 10:30 AM",
    funnelCount: 3,
  },
  {
    id: "folder-2",
    name: "E-commerce",
    createdAt: "Jun 28, 2025 02:15 PM",
    funnelCount: 2,
  },
];

export const mockFunnels: Funnel[] = [
  {
    id: "1",
    name: "Beauty care",
    status: "Draft",
    steps: 0,
    lastUpdated: "Jul 21, 2025 12:39 PM",
  },
  {
    id: "2",
    name: "cloth market",
    status: "Draft",
    steps: 2,
    lastUpdated: "Jun 13, 2025 12:22 PM",
  },
  {
    id: "3",
    name: "Elementary Smart Funnel",
    status: "Draft",
    steps: 5,
    lastUpdated: "Jul 21, 2025 11:22 AM",
  },
  {
    id: "4",
    name: "Groove Strategy Call Funnel",
    status: "Draft",
    steps: 2,
    lastUpdated: "Jun 16, 2025 04:46 PM",
  },
  {
    id: "5",
    name: "Header- GHL",
    status: "Draft",
    steps: 1,
    lastUpdated: "Jun 16, 2025 06:01 PM",
  },
  {
    id: "6",
    name: "LP Funnel",
    status: "Draft",
    steps: 5,
    lastUpdated: "Jun 02, 2025 04:59 PM",
  },
  {
    id: "7",
    name: "Skin Care",
    status: "Draft",
    steps: 1,
    lastUpdated: "Jul 10, 2025 06:15 PM",
  },
  {
    id: "8",
    name: "Skin Care (1)",
    status: "Draft",
    steps: 1,
    lastUpdated: "Jul 10, 2025 09:55 PM",
  },
  {
    id: "9",
    name: "Skin Care Sales",
    status: "Draft",
    steps: 2,
    lastUpdated: "Jul 10, 2025 06:12 PM",
  },
  {
    id: "10",
    name: "testing",
    status: "Draft",
    steps: 0,
    lastUpdated: "Jun 12, 2025 10:29 PM",
  },
];

export const mockTemplates: Template[] = [
  {
    id: "1",
    name: "Elementary Smart Funnel",
    image: "/api/placeholder/300/200",
    category: "Business",
  },
  {
    id: "2",
    name: "Business Services",
    image: "/api/placeholder/300/200",
    category: "Business",
  },
  {
    id: "3",
    name: "SaaS Sales",
    image: "/api/placeholder/300/200",
    category: "Business",
  },
  {
    id: "4",
    name: "Strategic Coaching",
    image: "/api/placeholder/300/200",
    category: "Coaching",
  },
  {
    id: "5",
    name: "Health & Wellness",
    image: "/api/placeholder/300/200",
    category: "Health",
  },
  {
    id: "6",
    name: "Fitness Program",
    image: "/api/placeholder/300/200",
    category: "Health",
  },
];

export const templateCategories = [
  "All Templates",
  "My Templates",
  "Shared with Me",
  "Favorites",
  "Automotive",
  "Beauty & Fashion",
  "Business, Coaching, & Consulting",
  "Creative",
  "Financial",
  "Health & Wellness",
  "Holidays",
  "Home Services",
  "Insurance",
  "Legal",
];

export const browseCategoryOptions = [
  "Automotive",
  "Beauty & Fashion",
  "Business, Coaching, & Consulting",
  "Creative",
  "Financial",
  "Health & Wellness",
  "Holidays",
  "Home Services",
  "Insurance",
  "Legal",
];
