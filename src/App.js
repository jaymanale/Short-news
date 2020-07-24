import React from 'react';

import { getTopHeadlines } from './services/newsService';

import Base from './common/Base';

class App extends React.Component {
  state = {
    news: [],
  };

  async componentDidMount() {
    let news = await getTopHeadlines();

    this.setState({ news });
  }

  render() {
    return (
      <Base>
        <h3>this is news content</h3>
      </Base>
    );
  }
}

export default App;
