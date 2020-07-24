import axios from 'axios';

// 'https://newsapi.org/v2/top-headlines?country=in&category=technology&page=2&apiKey=d6ce7b4875084b0faaa665b61ed31ad3'
export const getTopHeadlines = async () => {
  let response = await axios.get(
    'https://newsapi.org/v2/top-headlines?country=in&category=technology&page=2&apiKey=d6ce7b4875084b0faaa665b61ed31ad3'
  );
  console.log(response);
  return response.data.articles;
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
