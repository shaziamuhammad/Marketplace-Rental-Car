// src\components\Sidebar\ReviewsSidebar.tsx
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import SidebarCategoryList from './SidebarCategoryList';
import ReviewCard from './ReviewCards';

const ReviewsSidebar = () => {
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch Reviews and Categories
  useEffect(() => {
    const fetchData = async () => {
      const reviewsData = await client.fetch(
        `*[_type == "review" && car->category->name match $selectedCategory]{
          reviewer,
          rating,
          comment,
          date,
          car->{name}
        }`,
        { selectedCategory }
      );

      const categoriesData = await client.fetch(
        `*[_type == "category"]{
          name,
          slug
        }`
      );

      setReviews(reviewsData);
      setCategories(categoriesData);
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <div className="flex flex-col w-1/4 p-4 bg-gray-50 h-screen overflow-y-scroll border-r border-gray-200">
      {/* Category Filter */}
      <SidebarCategoryList
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Reviews */}
      <div className="mt-6">
        {reviews.length > 0 ? (
          reviews.map((review, index) => <ReviewCard key={index} review={review} />)
        ) : (
          <p className="text-gray-500 text-center">No reviews found.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewsSidebar;
