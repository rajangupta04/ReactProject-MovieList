// import {useState} from 'react';
// import MoviesList from './MoviesList';

// const Home = () => {

//     let [movies , setMovies] =  useState([{movieName:"kgf",
//     hero:"yash",
//     heroine:"sreenidhi",
//     genere:"action",
//     rating:"8.5",
//     id:1
// },


//     {movieName:"kgf 2",
//     hero:"yash",
//     heroine:"sreenidhi",
//     genere:"action",
//     rating:"10",
//     id:2
// },

//     {movieName:"charlie 777",
//     hero:"Rakshith shetty",
//     heroine:"pummy",
//     genere:"drama+action",
//     rating:"9",
//     id:3
// },

//     {movieName:"Don",
//     hero:"Shahrukh khan",
//     heroine:"Priyanka Chopra",
//     genere:"action+drama",
//     rating:"9",
//     id:4
// },

//     {movieName:"Hera Pheri",
//     hero:"Akshay kumar",
//     heroine:"Tabbu",
//     genere:"comedy+drama",
//     rating:"9",
//     id:5
// }
// ]);
//     const deleteMovie =(passedId)=>{
//         let newMovies = movies.filter((movie)=>{return movie.id != passedId});

//         setMovies(newMovies);
//     }

//     return ( 
//         <div className="home-content">
//             <MoviesList movies ={movies} title="All Movies"/>

//         </div>
//     );
// }
 
// export default Home;

/*------------------------------------------------------------------*/

// import { useEffect, useState } from "react"
// import MoviesList from "./MoviesList";

// const Home = ()=> {
//     let [movies, setMovies] = useState(null);
//     let [pending, setPending] = useState(true);

//     const deleteMovie = (recevedId)=>
//     {
//         let newMovies = movies.filter((movie)=>{
//         return movie.id !==recevedId});
//         setMovies(newMovies)
//     }
//     useEffect(()=>{
//        setTimeout(()=>{
//         fetch("http://localhost:3001/movies")
//         .then((response)=>{return response.json()})
//         .then((movies)=>{
//             setMovies(movies);
//             setPending(false);
//         })
//        },3000)
        
//     });
//     return(
//         <div className="home-content">
//             {pending && <h1>Loading...</h1>}
//             {movies && <MoviesList movies={movies}title="All movies" deleteMovie={deleteMovie} />}
//         </div>
//     );
// }
// export default Home;

/*------------------------------------------------------------------*/
                 // fetching error


// import { useState , useEffect } from 'react';
// import MoviesList from './MoviesList';
// ​
// const Home = () => {
// ​
//     let [movies , setMovies] =  useState(null);
//     let [pending , setPending] = useState(true);
//     let[error ,seterror] = useState(null);
// ​
//     useEffect(()=>{
//         setTimeout(()=>{fetch("http://localhost:4000/movies")
//         .then((response)=>{
//             if(response.ok===false)
//             {
//                 throw Error("Data is not found , please search for movies insted")
//             }
//             return response.json();
//         })
//         .then((movies)=>{
//             setMovies(movies);
//             setPending(false)
//         })
//         .catch((error)=>{
//             seterror(error.message);
//             setPending(false);
//         })
//     } , 3000)
//     } , [])
// ​
//     return ( 
//     <div className='home-content'>
//     {error && <h1>{error}</h1>}
// ​
//     {pending && <h1>Loading ..........</h1>}
// ​
// ​
//     {movies && <MoviesList movies={movies} title="All movies" />}
// ​
// ​
//     </div>
//     );
// }
// ​
// export default Home;
             
/*------------------------------------  ------------------------------*/
                 


import MoviesList from "./MoviesList";
import useFetch from "./useFetch";

const Home = ()=> {  
    const {data: movies, pending, error} = useFetch("http://localhost:3001/movies");
    
    return(
        <div className="home-content">
            {error && <h1>{error}</h1>}

            {pending && <h1>Loading......</h1>}
            
            {movies && <MoviesList movies={movies}title="All movies" />}
        </div>
    );
}
export default Home;

/*------------------------------------------------------------------*/
    
