import React from 'react';
import LazyLoad from 'react-lazyload';

const ArticleCard = ({ url, title, urlToImage, description, publishedAt }) => {
  return (
    <div className="card mb-3">
      <LazyLoad height={200}>
        <a href={url} target="_blank">
          <img
            src={urlToImage}
            className="card-img-top img-fluid"
            height="40"
            href={url}
            alt={title}
          />
        </a>
      </LazyLoad>
      <div className="card-body">
        <a href={url} target="_blank">
          <h5 className="card-title text-dark">{title}</h5>
        </a>
        <p className="card-text"> {description}</p>
        <p className="card-text">
          <small className="text-muted">{publishedAt}</small>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
