import React from 'react';

const ImageCard = ({ urlToImage, title }) => {
  return (
    <React.Fragment>
      {urlToImage && (
        <img
          src={urlToImage}
          className="card-img-top img-fluid cardShadow"
          alt={title}
        />
      )}
    </React.Fragment>
  );
};

export default ImageCard;
