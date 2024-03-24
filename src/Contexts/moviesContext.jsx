import { createContext, useState, useContext } from "react";

export const moviesContext = createContext(null);

export const MoviesContextProvider = (props) => {
    const [movies, setMovies] = useState([]);
    return (
        <moviesContext.Provider value={{ movies, setMovies }}>
            {props.children}
        </moviesContext.Provider>
    )
}

export const useMoviesContext = () => useContext(moviesContext); //best practice.