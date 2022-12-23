import { useState } from "react";
import {useHistory} from 'react-router-dom'

const CreateMovies = () => {
    const [movieName, setMovieName] = useState("");
    const [hero, setHero] = useState("");
    const [heroine, setHeroine] = useState("");
    const [genere, setGenere] = useState("");
    const [rating, setRating] = useState("");
    const [story, setStory] = useState("");

    let history = useHistory();
    
    const handleSubmit= (e)=>{
        e.preventDefault();

        let movie = {movieName,hero,heroine,genere,rating,story};
        console.log(movie);

        fetch("http://localhost:3001/movies" ,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(movie),
        })
        .then(()=>{
            alert("the data has been submitted")
            
            history.go(-1);        // (-1) will take it to previous page
            // history.push("/")
        })
        
    }

    
    return ( 
    <div className="add-movies">

        <h1 >Add new Movies</h1>

        {/* <h1>{movieName}</h1>
        <h1>{hero}</h1>
        <h1>{heroine}</h1>
        <h1>{genere}</h1>
        <h1>{rating}</h1>
        <h1>{story}</h1> */}

        <form className="create_movie" onSubmit={handleSubmit}>

        <div className="create_movie">
        <label>Movie Name :</label> <input type="text" value={movieName} onChange={(e)=>{setMovieName(e.target.value)}}/>

        <label>Hero : </label> 
        <input type="text"  value={hero} onChange={(e)=>{setHero(e.target.value)}}/> 

        <label>Heroine :</label> <input type="text" value={heroine} onChange={(e)=>{setHeroine(e.target.value)}}/>
        
        <label>Genere :</label> <input type="text" value={genere} onChange={(e)=>{setGenere(e.target.value)}}/>
        
        <label>Rating :</label> <input type="text" value={rating} onChange={(e)=>{setRating(e.target.value)}}/>
        
        <label>Story Line :</label> <textarea value={story} onChange={(e)=>{setStory(e.target.value)}}></textarea>

        <button>Submit</button>
        {/* <input type="submit"/> */}

        </div>

        </form>
    </div>
    )
    ;
}
export default CreateMovies;