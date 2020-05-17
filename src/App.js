import React from 'react';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import MyLoader from './placeholderLoader';

class App extends React.Component {
  state = {
    news: [],
    errors: {},
  };

  componentDidMount() {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=d6ce7b4875084b0faaa665b61ed31ad3'
      )
      .then((res) => {
        console.log(res.data.articles);
        this.setState({ news: res.data.articles });
        console.log('After SetState');
      })
      .catch((e) => console.log(e));
  }

  render() {
    const { news } = this.state;
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-2 col-md-2">
            <p>
              <a href="#">Link</a>
            </p>
            <p>
              <a href="#">Link</a>
            </p>
            <p>
              <a href="#">Link</a>
            </p>
          </div>
          <div className="col-sm-6 col-md-6 ">
            {news.length > 0 &&
              news.map((article) => (
                <LazyLoad key={article.title} placeholder={<Loading />}>
                  <ArticleCard {...article} />
                </LazyLoad>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const Loading = () => {
  return <h2>Loading...</h2>;
};

const ArticleCard = ({ url, title, urlToImage, description, publishedAt }) => {
  return (
    <a href={url} target="_blank" className="text-dark">
      <div className="card mb-3">
        <img
          src={urlToImage}
          className="card-img-top img-fluid"
          height="40"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"> {description}</p>
          <p className="card-text">
            <small className="text-muted">{publishedAt}</small>
          </p>
        </div>
      </div>
    </a>
  );
};
export default App;
