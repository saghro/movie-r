import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MovieList from './Compenent/MovieList';
import Filter from './Compenent/Filter';
import NewMovieForm from './Compenent/NewMovieForm';
import img1 from './Compenent/images/img1.jpeg';
import img2 from './Compenent/images/img2.jpeg';
import imag3 from './Compenent/images/imag3.jpeg';
import img4 from './Compenent/images/img4.jpeg';
import img5 from './Compenent/images/img5.jpeg';
import img6 from './Compenent/images/img6.jpeg';
import img7 from './Compenent/images/img7.jpeg';
import MovieDetails from './Compenent/MovieDetails';
 import './App.css';

const films = [
  {
    id: 1,
            img: img1,
            title: 'Ambulance ',
            desc: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie dentre elles a été altérée par l additionhumour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard ',
            rating: 1,
            trailerLink:'https://www.youtube.com/watch?v=pOLh6p4J7Qw&list=RDpOLh6p4J7Qw&start_radio=1'
        },
        {
            id: 2,
            img: img2,
            title: 'Avatar',
            desc: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie dentre elles a été altérée par l addition dhumour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard ',
            rating: 2,
            trailerLink:'https://www.youtube.com/watch?v=pOLh6p4J7Qw&list=RDpOLh6p4J7Qw&start_radio=1'
        },
        {
            id: 3,
            img: imag3,
            title: 'Image',
            desc: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie dentre elles a été altérée par l addition humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard ',
            rating: 3, 
            trailerLink:'https://www.youtube.com/watch?v=pOLh6p4J7Qw&list=RDpOLh6p4J7Qw&start_radio=1'
        },
        {
            id: 4,
            img: img4,
            title: 'Animals',
            desc: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie dentre elles a été altérée par l addition d humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard ',
            rating: 4,
            trailerLink:'https://www.youtube.com/watch?v=pOLh6p4J7Qw&list=RDpOLh6p4J7Qw&start_radio=1'
        },
        {
            id: 5,
            img: img5,
            title: 'smile',
            desc: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie dentre elles a été altérée par l addition d humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard ',
            rating: 5,
            trailerLink:'https://www.youtube.com/watch?v=pOLh6p4J7Qw&list=RDpOLh6p4J7Qw&start_radio=1'
        },
        {
            id: 6,
            img: img6,
            title: 'elguaa',
            desc: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie dentre elles a été altérée par l addition humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard ',
            rating: 4,
            trailerLink:'https://www.youtube.com/embed/EQOarcurXfY'
        },
        {
            id: 7,
            img: img7,
            title: 'Baba Ali ',
            desc: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie dentre elles a été altérée par l addition dhumour ou0 de mots aléatoires qui ne ressemblent pas une seconde à du texte standard ',
            rating: 5,
            trailerLink:'https://www.youtube.com/watch?v=pOLh6p4J7Qw&list=RDpOLh6p4J7Qw&start_radio=1'
  }
]

const App = () => {
  const [movies, setMovies] = useState(films);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    if (storedMovies) {
      setMovies(storedMovies);
    }else {
      setMovies([]);
    }
  }, []);


  
  const handleAddMovie = (movie) => {
    // Create a new movie object with a unique ID
    const newMovie = { ...movie, id: movies.length + 1, trailerLink: movie.trailerLink };
    setMovies(prevMovies => {
      const updatedMovies = [...prevMovies, newMovie];
      localStorage.setItem('movies', JSON.stringify(updatedMovies));
      return updatedMovies;
    });
  };
  

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      // If movies already exist in the local storage, use them
      setMovies(JSON.parse(storedMovies));
    } else {
      // Otherwise, store the initial movies array in the local storage
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }, [movies]);
  

  return (
    <Router>
    <div className="app">
      
      <div className="center_position">
        <Filter
          onFilter={({ title, rating }) => {
            setTitleFilter(title);
            setRatingFilter(rating);
          }}
        />
        <NewMovieForm onAddMovie={handleAddMovie} />
      </div>
      <Routes>
        <Route exact path="/" element={
          <MovieList
            movies={movies.filter((movie) => {
              return (
                movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
                movie.rating >= ratingFilter
              );
            })}
          />
        } />
        <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;