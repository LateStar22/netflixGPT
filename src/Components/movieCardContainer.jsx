import React from 'react'
import MovieCard from './movieCard';

const MovieCardContainer = (props) => {
    const { title, movies } = props;

    const modifiedMovies = movies.map(({ id, poster_path }) => ({
        id,
        poster_path
    }))


    return (
        <div className='mx-5 text-white my-4'>
            <div className='text-2xl'>{title}</div>
            <div className='mt-4 flex overflow-x-auto'>
                {
                    modifiedMovies.map((movie) => {
                        return (
                            <MovieCard key={movie.id} poster_path={movie.poster_path} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MovieCardContainer;