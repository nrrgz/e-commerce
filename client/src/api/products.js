import { instance } from ".";

export const getProducts = async (
  { setData,
  setLoading,
  categoryId,
  priceGte,
  priceLte,
  priceSort,
  productType
}
) => {
  setLoading(true);
  let url = "/products?populate=*";
  if (categoryId) {
    url += `&filters[categories][$eq]=${categoryId}`;
  }
  if (priceGte) {
    url += `&filters[price][$gte]=${priceGte}`;
  }
  if (priceLte) {
    url += `&filters[price][$lte]=${priceLte}`;
  }
  if (priceSort) {
    url += `&sort[0]=price:${priceSort}`;
  }
  if (productType) {
    url += `&filters[productType][$eq]=${productType}`;
  }
console.log(url)
  const { data } = await instance.get(url);
  setData(data.data);
  setLoading(false);
};

export const searchProducts = async ({ setData, setLoading, query }) => {
  setLoading(true);
  const url = `/products?populate=*&filters[title][$containsi]=${query}`;

  const { data } = await instance.get(url);
  setData(data.data);
  setLoading(false);
};

export const getProductsById = async (setData, setLoading, productId) => {
  setLoading(true);
  let url = `/products/${productId}?populate=*`;

  const { data } = await instance.get(url);
  setData(data.data);
  setLoading(false);
};
