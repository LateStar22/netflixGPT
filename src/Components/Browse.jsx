import React, { useState } from 'react';
import Header from './Header';
import GPTSearch from './GPTSearch';
import MainContainer from './MainContainer'; // Import MainContainer
import SecondaryContainer from './SecondaryContainer'; // Import SecondaryContainer
import { usePlayingMovies } from "../Hooks/usePlayingMovies";

const Browse = () => {
  console.log("Browse component is rendering");
  const { loadingNowPlayingMovies } = usePlayingMovies();
  const [showGPT, setShowGPT] = useState(false);

  const toggleGPT = () => {
    setShowGPT(!showGPT);
  }


  const [selectedLang, setSelectedLang] = useState("en");

  const handleChangeLang = (e) => {
    const selectedValue = e.target.value;
    setSelectedLang(selectedValue);
}



  return (
    <div className='bg-red-400 min-h-screen'>
      <Header toggleGPT={toggleGPT} showGPT = {showGPT} handleChangeLang = {handleChangeLang}/>
      {showGPT ? (
        <GPTSearch selectedLang = {selectedLang}/>
      ) : (
        <>
          {loadingNowPlayingMovies ? (
            <div className='h-screen bg-red-400'>
              {/* Loading UI */}
            </div>
          ) : (
            <div className='bg-black'>
              <MainContainer /> {/* Render MainContainer component */}
              <SecondaryContainer /> {/* Render SecondaryContainer component */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Browse;
