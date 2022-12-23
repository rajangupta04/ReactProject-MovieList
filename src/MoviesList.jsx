import { Link } from "react-router-dom";


const MoviesList  = ({movies,title, deleteMovie}) => {
   
    return ( 
        <div>
            <h1>{title}</h1>
            { movies.map((movie)=>(
                <div className="movies-lists">
                    <Link to={`/movie${movie.id}`}>  
                    <h2>Movie :{movie.movieName}</h2>
                    <div>
                    <h3>Hero :{movie.hero}</h3>
                    <h3>Heroine :{movie.heroine}</h3>
                    </div>
                    <h3>Genere :{movie.genere}</h3>
                    <p>IMBD:{movie.rating}</p>
                <hr />
                    </Link>

                </div>
                )
            )} 
        </div>       
    );
}
 
export default MoviesList ;
