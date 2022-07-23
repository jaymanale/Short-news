import axios from "axios";

export const getTopHeadlines = async (category) => {
  let response = await axios.get(
    `https://gnews.io/api/v4/top-headlines?lang=en&token=67780986506c8922cf308108079529fd`
  );

  return response.data;
};

export const getCategoryNews = async (category) => {
  let response = await axios.get(
    `https://gnews.io/api/v4/top-headlines?topic=${category}&lang=en&token=67780986506c8922cf308108079529fd`
  );

  return response.data;
};
