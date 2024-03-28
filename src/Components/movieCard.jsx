import React from 'react'
import { img_url } from '../utils/constants'

const MovieCard = ({ poster_path }) => {
    return (
        <div className='h-[200px] w-[200px] cursor-pointer mx-2 my-2 flex-shrink-0 flex-grow-0'>
            <img src={ img_url + poster_path} alt="poster" className='h-full w-full'/>
        </div>
    )
}

export default MovieCard