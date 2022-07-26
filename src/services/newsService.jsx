import axios from "axios";

export const getTopHeadlines = async (category) => {
  let response = await axios.get(
    `https://gnews.io/api/v4/top-headlines?lang=en&token=${process.env.REACT_APP_TOKEN}`
  );

  return response.data;
};

export const getCategoryNews = async (category) => {
  let response = await axios.get(
    `https://gnews.io/api/v4/top-headlines?topic=${category}&lang=en&token=${process.env.REACT_APP_TOKEN}`
  );

  return response.data;
};
