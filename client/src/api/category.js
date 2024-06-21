import { instance } from ".";
export const getCategories = async (setData) => {
  const { data } = await instance.get("/categories?populate=*");
  setData(data.data);
};

export const getCategoriesById = async (setData, setLoading, categoryId) => {
  setLoading(true);
  let url = `/categories/${categoryId}?populate=*`;

  const { data } = await instance.get(url);
  setData(data.data);
  setLoading(false);
};