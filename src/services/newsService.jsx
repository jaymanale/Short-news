import axios from 'axios';

// 'https://newsapi.org/v2/top-headlines?country=in&category=technology&page=2&apiKey=d6ce7b4875084b0faaa665b61ed31ad3'
export const getTopHeadlines = async (page) => {
  let response = await axios.get(
    `http://newsapi.org/v2/top-headlines?country=in&page=${page}&ts=1&apiKey=d6ce7b4875084b0faaa665b61ed31ad3`
  );
  console.log(response.data);
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
