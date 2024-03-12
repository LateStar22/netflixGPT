import { createContext, useState } from "react";

const moviesContext = createContext(null);

export const moviesContextProvider = (props) => {

    const[movies,setMovies] = useState([]);

    <moviesContext.Provider value={{movies,setMovies}}>
        {props.children}
    </moviesContext.Provider>    

}