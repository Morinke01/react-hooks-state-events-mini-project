import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
