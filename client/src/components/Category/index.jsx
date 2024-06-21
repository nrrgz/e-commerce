import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import "./Category.scss";
import { fetchCategories } from "../../store/slices/categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const { items: categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='category'>
      <div className="category-header">
        <h2>Featured Category</h2>
        <button>View Detail</button>
      </div>
      <div className="cards">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            img={`${import.meta.env.VITE_BASE_URL}${category?.attributes?.img?.data?.attributes?.url}`}
            title={category.attributes.title}
            productQuantity={category.attributes.productQuantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
