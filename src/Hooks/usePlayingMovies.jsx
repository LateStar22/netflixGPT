import { options } from '../utils/constants';
import { useState } from 'react';
import { useEffect } from 'react';

export const usePlayingMovies = () => {

    const [loading, setLoading] = useState(true); // State to track loading status
    const [movieList, setMovieList] = useState([]); // State to store fetched movie list

    const nowPlayingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?lpage=1', options);
            const data = await response.json();
            const movies = data.results; // Corrected from data.result
            console.log(movies);
            setMovieList(movies);
            setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
            console.log("Error:", error);
            setLoading(false); // Set loading to false on error
        }
    }

    useEffect(() => {
        nowPlayingMovies();
    }, []);

    return { loading, movieList};
}