import { options } from '../utils/constants';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMoviesContext } from "../Contexts/moviesContext";

export const usePlayingMovies = () => {

    const [loading, setLoading] = useState(true); // State to track loading status
    const { setMovies, movies } = useMoviesContext();
    const nowPlayingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?lpage=1', options);
            const data = await response.json();
            const movies = data.results; // results is the sepecific to TMDB api.
            console.log(movies);
            if (movies.length > 0) {
                setMovies(movies);
              }
            setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
            console.log("Error:", error);
            setLoading(false); // Set loading to false on error
        }
    }

    useEffect(() => {
        nowPlayingMovies();
    }, []);

    return { loading, movies };
}