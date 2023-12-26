

import React from 'react';
import './App.css';

const FilmsContainer = (props) => {
  const filmsDetails = props.filmsData;

  return (
    <>
      <div>
        {filmsDetails.length > 0 ? (
          filmsDetails.map((f) => (
            <div className="box" key={f.url}>
              <h2>Title: {f.title}</h2>
              <h2>Director: {f.director}</h2>
              {/* <h2>Opening_crawl: {f.opening_crawl}</h2> */}
            </div>
          ))
        ) : (
          <p>Loading Films...</p>
        )}
      </div>
    </>
  );
};

export default FilmsContainer;
