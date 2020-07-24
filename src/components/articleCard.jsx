import React from 'react';
import ImageCard from './../common/ImageCard';

const ArticleCard = ({ url, title, urlToImage, description, publishedAt }) => {
  return (
    <div className="card mb-3">
      <ImageCard urlToImage={urlToImage} title={title} />

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
