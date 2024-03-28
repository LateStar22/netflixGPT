import React from 'react'
import MovieCardContainer from './movieCardContainer';

const SecondaryContainer = () => {
  return (
    <div className='mt-3 select-none'>
      <MovieCardContainer title = {"Now Playing"}/>
      <MovieCardContainer title = {"Horror"}/>
      <MovieCardContainer title = {"Trending"}/>
      <MovieCardContainer title = {"Coming Soon"}/>
      <MovieCardContainer title = {"Thriller"}/>
    </div>
  )
}

export default SecondaryContainer