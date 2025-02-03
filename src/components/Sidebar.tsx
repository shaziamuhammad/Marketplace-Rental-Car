"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  categories: string[]; // Categories must be an array of strings
  onCategorySelect: (category: string) => void; // Callback for category selection
}

const Sidebar: React.FC<SidebarProps> = ({ categories = [], onCategorySelect }) => {
  return (
    <div className="p-4">
      <h3 className="font-semibold mb-2">Categories</h3>
      <ul className="space-y-2">
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category}>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => onCategorySelect(category)}
              >
                {category}
              </Button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No categories available</p>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
