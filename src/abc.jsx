import { useState , useEffect } from 'react';
import MoviesList from './MoviesList';

const Home = () => {
    
    let [movies , setMovies] =  useState(null);
    let [pending , setPending] = useState(true);
    let[error ,seterror] = useState(null);
    
    useEffect(()=>{ 
        setTimeout(()=>{fetch("http://localhost:3001/movies")
        .then((response)=>{
            if(response.ok===false)
            {
                throw Error("Data is not found , please search for movies insted")
            }
            return response.json();
        })
        .then((movies)=>{
            setMovies(movies);
            setPending(false)
        })
        .catch((error)=>{
            seterror(error.message);
            setPending(false);
        })
    } , 3000)
    } , [])

    return ( 
    <div className='home-content'>
    {error && <h1>{error}</h1>}

    {pending && <h1>Loading ..........</h1>}

    {movies && <MoviesList movies={movies} title="All movies" />}

    </div>
    );
}

export default Home;