import React from 'react';
import LazyLoad from 'react-lazyload';
import {
  getTopHeadlines,
  getTechnology,
  getBusiness,
} from './services/newsService';

import ArticleCard from './components/articleCard';

class App extends React.Component {
  state = {
    news: [],
    technology: [],
    business: [],
    errors: {},
  };

  async componentDidMount() {
    let news = await getTopHeadlines();
    let technology = await getTechnology();
    let business = await getBusiness();

    this.setState({ news, technology, business });
  }

  render() {
    const { news, technology, business } = this.state;
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1 className="text-center">Top Stories</h1>
            {news.map((article) => (
              <LazyLoad key={article.title} placeholder={<Loading />}>
                <ArticleCard {...article} />
              </LazyLoad>
            ))}
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1 className="text-center">Technology</h1>
            {technology.map((article) => (
              <LazyLoad key={article.title} placeholder={<Loading />}>
                <ArticleCard {...article} />
              </LazyLoad>
            ))}
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1 className="text-center">Business</h1>
            {business.map((article) => (
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

const Loading = () => (
  <div>
    <h1 className="display-1">Loading...</h1>
  </div>
);
export default App;
