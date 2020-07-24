import React from 'react';

const LoadMore = ({ loadMore, onHandleMore }) => {
  return (
    <React.Fragment>
      <div className="text-center m-3">
        <button
          className="btn btn-dark"
          style={{
            borderRadius: '100px',
            width: '150px',
            letterSpacing: '2px',
          }}
          onClick={onHandleMore}
        >
          {loadMore ? (
            <span
              className="spinner-border spinner-border-sm mx-2"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            ' Load More...'
          )}
        </button>
      </div>
    </React.Fragment>
  );
};

export default LoadMore;
