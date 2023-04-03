import React from 'react';
import Rate from './Rate';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.img} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
       
        <Rate rat={movie.rating}/>
      </div>
      <div className="movie-status">{movie.status}</div>
    </div>
  );
};

export default MovieCard;