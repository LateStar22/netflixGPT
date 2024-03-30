import React from 'react'
import MovieCardContainer from './movieCardContainer';
import { usePopularMovies } from "../Hooks/usePopularMovies"
import { usePlayingMovies } from '../Hooks/usePlayingMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';

const SecondaryContainer = () => {

  const { loadingNowPlayingMOvies, movies } = usePlayingMovies();
  const { loadingPopularMovies, popularMovies } = usePopularMovies();
  const { loadingTopRatedMovies, topRatedMovies} = useTopRatedMovies();

  return (
    <div className='mt-3 select-none'>
      {
        loadingNowPlayingMOvies ? (
          <div className='flex mx-5 my-4'>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
          </div>
        ) : (
          <MovieCardContainer title={"Now Playing"} movies={movies} />
        )
      }
      {
        loadingPopularMovies ? (
          <div className='flex mx-9 my-4'>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
            <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
          </div>
        ) : (
          <MovieCardContainer title={"Popular Movies"} movies={popularMovies} />
        )
      }
      {
        loadingTopRatedMovies ? (
          <div className='flex mx-5 my-4'>
          <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
          <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
          <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
          <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
          <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
          <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
          <div className='h-[200px] w-[200px] bg-gray-600 flex-grow-0 flex-shrink-0 mx-1 my-2'></div>
        </div>
        ) : (
          <MovieCardContainer title={"Top Rated"} movies={topRatedMovies} />
        )
      }
    </div>
  )
}

export default SecondaryContainer