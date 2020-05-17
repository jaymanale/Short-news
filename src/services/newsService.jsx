import axios from 'axios';

export const getTopHeadlines = async () => {
  let response = await axios.get(
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=d6ce7b4875084b0faaa665b61ed31ad3'
  );
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
