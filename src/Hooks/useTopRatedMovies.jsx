import { useState } from "react";
import { useEffect } from "react";

const useTopRatedMovies = () => {

    const [loadingTopRatedMovies, setLoadingTopRatedMovies] = useState(true); // State to track loading status
    const [topRatedMovies, setTopRatedMovies] = useState([]); // State to store fetched movies

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjNmZGVhZjQzNDBjMDU4MjllYWMxMWM3ZWIxNDhhOCIsInN1YiI6IjY1ZWYzZjhmODU3MDJlMDE2MjZjNDc3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQytVzMCW8DLn2PlLyzMJXhYkA2A294nxtMzsaSnhuw'
        }
      };

    const fetchPopularMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', options);
            const data = await response.json();
            setTopRatedMovies(data.results.reverse()); // Use setPopularMovies to update popularMovies state
            setLoadingTopRatedMovies(false); // Set loading to false when data is fetched
        } catch (error) {
            console.error("Error:", error);
            setLoadingTopRatedMovies(false); // Set loading to false on error
        }
    };

    useEffect(() => {
        fetchPopularMovies();
    }, []); // Empty dependency array means this effect runs once after initial render

    return { loadingTopRatedMovies, topRatedMovies };

}

export default useTopRatedMovies