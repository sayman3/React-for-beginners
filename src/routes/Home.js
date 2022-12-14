import { useState, useEffect } from 'react';
import Movie from '../components/Movie';


function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=download_count');
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(()=>{
        getMovies()
    }, [])
    return (<>
        {loading ? <h1>Loading...</h1>: <div className="main">{movies.map((movie, index)=>{
            return <Movie key={index} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}></Movie>
        })}
        </div>}

    </>)
}

export default Home;