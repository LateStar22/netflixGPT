import React from 'react'
import VideoTitle from './VideoTitle';
import { useMoviesContext } from "../Contexts/moviesContext";
import { useMainMovieTrailer } from '../Hooks/useMainMovieTrailer';

const VideoContainer = () => {
  const { movies } = useMoviesContext();
  const mainMovie = movies && movies.length > 10 ? movies[10] : null; // Ensure mainMovie is not null or undefined

  const { original_title, overview, id } = mainMovie || {}; // Destructure properties with default empty object

  const { mainMovieTrailerData } = useMainMovieTrailer(id || ''); // Call hook unconditionally with id as empty string if mainMovie is null

  let link = "";
  if (mainMovieTrailerData && mainMovieTrailerData.length > 0) {
    const key = mainMovieTrailerData[0].key;
    link = `https://www.youtube.com/embed/${key}?rel=0&autoplay=1&controls=0&mute=1`; // Properly formatted link
  }

  return (
    <div className='w-full h-full relative'>
      {mainMovie ? (
        <>
          <iframe src={link} title="youtube embed" className='w-full h-full'></iframe>
          <div className='absolute left-[40px] bottom-[50px]'>
            <button className='bg-white text-black-600 h-10 w-[200px] rounded-lg mr-5 font-bold'>Play</button>
            <button className='text-black-600 h-10 w-[200px] rounded-lg font-bold  bg-opacity-50 bg-white'>More Info</button>
          </div>
          <VideoTitle title={original_title} overview={overview}></VideoTitle>
        </>
      ) : (
        <div className='h-full w-full bg-gray-700 text-white'>Loading...</div>
      )}
    </div>
  )
}

export default VideoContainer
