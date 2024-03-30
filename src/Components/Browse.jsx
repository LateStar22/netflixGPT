import React, { useState, useEffect } from 'react';
import Header from './Header';
import { usePlayingMovies } from "../Hooks/usePlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from './secondaryContainer';


const Browse = () => {
  const { loadingNowPlayingMOvies } = usePlayingMovies();
  return (
    <div className='bg-black min-h-fit'>
      <Header />
      {
        loadingNowPlayingMOvies ? (
          <div className='h-screen bg-red-400'>
          </div>
        ) : (
          <div>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
          </div>
        )
      }
    </div>
  );
}

export default Browse;
