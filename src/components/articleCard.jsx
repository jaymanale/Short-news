import React from "react";
import ImageCard from "./../common/ImageCard";

const ArticleCard = ({
  url,
  title,
  image,
  description,
  publishedAt,
  source,
}) => {
  return (
    <div className="card mb-3">
      <ImageCard urlToImage={image} title={title} />

      <div className="card-body">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h5 className="card-title text-dark">{title}</h5>
        </a>
        <p className="card-text"> {description}</p>
        <p className="card-text">
          <small className="text-muted float-left">{source.name}</small>
          <small className="text-muted float-right">{publishedAt}</small>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
