import React, { useState, useEffect } from 'react';
import Header from './Header';
import { options } from '../utils/constants';

const Browse = () => {
  const [loading, setLoading] = useState(true); // State to track loading status
  const [movieList, setMovieList] = useState([]); // State to store fetched movie list

  const nowPlayingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?lpage=1', options);
      const data = await response.json();
      const movies = data.results; // Corrected from data.result
      console.log(movies);
      setMovieList(movies);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.log("Error:", error);
      setLoading(false); // Set loading to false on error
    }
  }

  useEffect(() => {
    nowPlayingMovies();
  }, []);

  return (
    <div className='bg-black min-h-screen'>
      <Header />
      {loading ? ( // Conditionally render shimmer effect while loading
        <div className="min-h-full mx-auto bg-slate-400 w-10/12 my-8"></div>
      ) : (
        <div className='text-red-500 flex flex-wrap justify-center'>
          {/* Render movie list when data is fetched */}
          {movieList.map(movie => (
            <div key={movie.id} className='min-h-28 mx-2 bg-slate-400 w-28 text-center my-8'>
              {movie.title}
              <img src={movie.poster_path} className='' />
              <h4>{movie.vote_average}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Browse;
