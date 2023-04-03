import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => parseInt(m.id) === parseInt(id));
  return (
    <div className='video_detail'>
      <h2>{movie.title}</h2>
      <p>{movie.desc}</p>
      <iframe
        title={movie.title}
        width="1080"
        height="720"
        src={movie.trailerLink}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br />

       <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;