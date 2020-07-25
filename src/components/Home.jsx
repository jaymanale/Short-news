import React from 'react';

import { getCategoryNews } from './../services/newsService';

import Base from './../common/Base';
import ArticleCard from './articleCard';
import LoadMore from './../common/LoadMore';
import Loading from './../common/Loading';

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('props constructor:', props);
    this.state = {
      category: props.location.state,
      news: [],
      loading: true,
      loadMore: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { news, category } = this.state;
    let moreNews = await getCategoryNews(category);
    this.setState({
      news: [...news, ...moreNews.articles],
      totalResults: moreNews.totalResults,
      loading: false,
      loadMore: false,
    });
    console.log('State:', this.state);
  }

  handleLoadMore({ page }) {
    let nextPage = page + 1;
    this.setState(
      () => ({
        page: nextPage,
        loadMore: true,
      }),
      this.loadData
    );
  }

  getAllNews({ news, loading, category }) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8 col-lg-8 offset-sm-2 offset-md-2 offset-lg-2">
            {!loading && (
              <h4 className="text-weight-bold text-center">
                {category.toUpperCase()}
              </h4>
            )}
            {!loading &&
              news.map((unit) => <ArticleCard key={unit.title} {...unit} />)}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { news, loading, totalResults, loadMore } = this.state;
    return (
      <Base>
        {loading && <Loading />}
        {this.getAllNews(this.state)}
        {!loading && news.length < totalResults && (
          <LoadMore
            loadMore={loadMore}
            onHandleMore={() => this.handleLoadMore(this.state)}
          />
        )}
      </Base>
    );
  }
}

export default Home;
