import React from 'react'
import MovieCard from './movieCard';
import { useMoviesContext } from '../Contexts/moviesContext';

const MovieCardContainer = (props) => {
    const { movies } = useMoviesContext();
    const modifiedMovies = movies.map(({ id, original_title, release_date, poster_path }) => ({
        id,
        original_title,
        release_date,
        poster_path
    }))

    const { title } = props;

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