import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";




const MovieDetails = () => {
    const {id} =useParams()
    
    let {data:movie, pending, error} =useFetch(`http://localhost:3001/movies/${id}`);

    let history = useHistory();

    let handleDelete = (id)=>{
        fetch(`http://localhost:3001/movies/${id}` , {method:"DELETE"})
        .then(()=>{
            alert("movie has been deleted");
            history.push("/");
        })
    }

    return ( 
        <div>
            {error && <h1>{error}</h1> }

            {pending && <h1>Loading......</h1>}

            {movie &&
            <div className="MovieDetails button">
                <img src={movie.poster} style={{width:"300px", height:"200px"}}/>
                <hr></hr>
                <h1>{movie.movieName}</h1>
                <h2>Hero :{movie.hero}</h2>
                <h2>Heroine :{movie.heroine}</h2>
                <h2>Genere :{movie.genere}</h2>
                <h2>IMBD:{movie.rating}</h2>
                <p>Story Line:{movie.story}</p>
            <div className="movieTrailer_border">
                <h3>Trailer</h3>
                <p><video src={movie.trailer} style={{width:"400px", height:"325px"}}controls /></p>

            </div>
                <button onClick={()=>{handleDelete(movie.id)}}>Delete</button>
            </div>
            }
        </div>
     );
}
 
export default MovieDetails;