import axios from 'axios';

//`https://gnews.io/api/v3/topics/world?country=in&max=50&token=67780986506c8922cf308108079529fd`
export const getTopHeadlines = async (category) => {
  console.log('Category:', category);
  let response = await axios.get(
    `https://gnews.io/api/v3/top-news?country=in&token=67780986506c8922cf308108079529fd`
  );
  console.log(response);
  return response.data;
};

export const getCategoryNews = async (category) => {
  console.log('Category:', category);
  let response = await axios.get(
    `https://gnews.io/api/v3/topics/${category}?country=in&token=67780986506c8922cf308108079529fd`
  );
  console.log(response);
  return response.data;
};

export const getTechnology = async () => {
  let response = await axios.get(
    'https://newsapi.org/v2/everything?q=technology&apiKey=d6ce7b4875084b0faaa665b61ed31ad3'
  );
  return response.data.articles;
};

export const getBusiness = async () => {
  let response = await axios.get(
    'https://newsapi.org/v2/top-headlines?q=business&apiKey=d6ce7b4875084b0faaa665b61ed31ad3'
  );
  return response.data.articles;
};
