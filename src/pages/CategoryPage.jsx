import { useGetCategoriesQuery } from '../slices/categoriesApiSlice';

import Category from '../components/categories/Category';

function CategoryPage() {
  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useGetCategoriesQuery();

  return (
    <section>
      {isLoadingCategories ? (
        <h2>Loading...</h2>
      ) : errorCategories ? (
        <div>{errorCategories.data.message || errorCategories.error}</div>
      ) : (
        <Category title="Categories" categories={categories?.length ? categories : []} />
      )}
    </section>
  );
}

export default CategoryPage;
