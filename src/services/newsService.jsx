import axios from 'axios';


export const getTopHeadlines = async (category) => {
  
  let response = await axios.get(
    `https://gnews.io/api/v3/top-news?country=in&token=${process.env.REACT_APP_TOKEN}`
  );
  
  return response.data;
};

export const getCategoryNews = async (category) => {
  
  let response = await axios.get(
    `https://gnews.io/api/v3/topics/${category}?country=in&token=${process.env.REACT_APP_TOKEN}`
  );
  
  return response.data;
};

