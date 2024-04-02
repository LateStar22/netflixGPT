import React from 'react'
import { lang } from '../utils/LangConstants'

const GPTSearchBar = ({ toggleShowGPTMovieSuggestions, selectedLang }) => {

  return (
    <div className='mx-auto w-fit '>
        <input type="text" placeholder={lang[selectedLang].GPTSearchPlaceholder} className='h-[70px] w-[600px] outline-none bg-gray-700 bg-opacity-70 border-[3px] border-green-200 rounded-lg text-xl font-bold text-white' />
        <button type='submit' className='h-[70px] w-[150px] bg-red-700 rounded-lg ml-2 text-xl font-bold' onClick={() => toggleShowGPTMovieSuggestions()}> {lang[selectedLang].search} </button>
    </div>
  )
}

export default GPTSearchBar
