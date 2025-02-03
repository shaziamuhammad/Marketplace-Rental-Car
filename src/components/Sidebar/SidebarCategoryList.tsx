// src\components\Sidebar\SidebarCategoryList.tsx
import React from 'react';

interface Category {
  name: string;
  slug: { current: string };
}

interface SidebarCategoryListProps {
  categories: Category[]; // Array of category objects
  setSelectedCategory: (category: string) => void; // Function to update the selected category
}

const SidebarCategoryList: React.FC<SidebarCategoryListProps> = ({ categories, setSelectedCategory }) => {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800">Filter by Category</h2>
      <ul className="mt-4 space-y-2">
        <li
          className="cursor-pointer hover:text-blue-500"
          onClick={() => setSelectedCategory('')}
        >
          All Categories
        </li>
        {categories.map((category) => (
          <li
            key={category.slug.current}
            className="cursor-pointer hover:text-blue-500"
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCategoryList;
