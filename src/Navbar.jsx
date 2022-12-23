// const Navbar = () => {
//     return ( 
//     <nav>
//       <h1>NetFlix</h1>

//       <div className="link">
//         <a href=" ">HOME</a>
//         <a href=" ">Add new movies</a>
//       </div>

//     </nav>

//      );
// }
 
// export default Navbar;


/*--------------------------------------------------------*/

// for add new movies in browser
 
import { useState } from 'react';
import{Link, useHistory} from 'react-router-dom'

const Navbar = () => {

  let [search, setSearch] = useState("");
  let history=useHistory();

  let search1 =()=>{
      fetch("  http://localhost:3001/movies ")
      .then((res)=>{
        return res.json();
      })
      .then((movies)=>{
        for(let i=0; i<movies.length; i++) 
        {
          if(movies[i].movieName.toUpperCase().includes(search.toUpperCase()))
            {
              const id =movies[i].id;
              history.push(`/movie${id}`);
            }
        }
      })
    }

      return ( 
      <nav>
        <div className="NavbarContent">
            <div className="nav1">
              <h1 style={{color:"red"}}>NETFLIX</h1>
            </div>
            <div className="link">
              <Link to="/">HOME</Link>
              <Link to="/create">Add new movies</Link>
            </div>
        </div>

        <div className='nav2'>
          <input type="search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          <button onClick={()=>{search1()}}>Search</button>
        </div>
      </nav>
      );
  }
   
  export default Navbar;