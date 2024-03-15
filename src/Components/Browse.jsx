import React, { useState, useEffect } from 'react';
import Header from './Header';
import { usePlayingMovies } from "../Hooks/usePlayingMovies"
import MainContainer from "./mainContainer";
import SecondaryContainer from './secondaryContainer';

const Browse = () => {
  const { loading, movieList } = usePlayingMovies();
  return (
    <div className='bg-black min-h-screen'>
      <Header />
      {
        loading ? (
          <div className='h-screen bg-gray-400-700'>
          </div>
        ) : (
          <>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
          </>
        )
      }
    </div>
  );
}

export default Browse;
