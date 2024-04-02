import React, { useState } from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'
import { useAction } from '../Contexts/actionContext'

const GPTSearch = ({selectedLang}) => {
    const [showGPTMovieSuggestions, setShowGPTMovieSuggestions] = useState(false);

    const toggleShowGPTMovieSuggestions = () => {
        setShowGPTMovieSuggestions(!showGPTMovieSuggestions);
    }

    return (
        <div className='bg-cover bg-center h-screen pt-[100px]' style={{ backgroundImage: `url(${require("../images/header-image.png")})` }}>
            <GPTSearchBar toggleShowGPTMovieSuggestions={toggleShowGPTMovieSuggestions} selectedLang = {selectedLang}></GPTSearchBar>
            {
                showGPTMovieSuggestions && (
                    <GPTMovieSuggestions />
                )
            }
        </div>
    )
}

export default GPTSearch