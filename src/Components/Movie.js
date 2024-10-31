import React from 'react';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

function Movie({ title, poster_path, release_date }) {
  const releaseYear = release_date ? new Date(release_date).getFullYear() : 'N/A';

  return (
    <div className="movie">
      <img src={IMG_PATH + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title} ({releaseYear})</h3>
      </div>
    </div>
  );
}

export default Movie;
