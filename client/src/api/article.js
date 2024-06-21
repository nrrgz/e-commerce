import { instance } from ".";
export const getArticles = async (setData) => {

  const { data } = await instance.get("/articles?populate=*");
  setData(data.data);
};