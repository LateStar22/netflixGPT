import { useEffect, useState } from "react";
import { options} from "../utils/constants"

export const useMainMovieTrailer = (id) => {

    const [mainMovieTrailerData, setMainMovieTrailerData] = useState(null);

    const mainMovieTrailer = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', options);
            const data = await response.json();
            setMainMovieTrailerData(data.results);
        } catch (error) {
            console.log("errorasdasdasdasd", error);
        }
    }
    useEffect(() => {
        mainMovieTrailer();
    },[])

    return  { mainMovieTrailerData };
};