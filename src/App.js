// import './App.css';
// import Home from './Home';
// import Navbar from './Navbar';

// function App() {

  
//   return (
//     <div className='App'>
//       <Navbar/>
//       <Home/>
//     </div>
//   );
// }

// export default App;

// ---------------------------------------------------------------------------------------

// import CreateMovies from './CreateMovies';
// import MovieDetails from './MovieDetails';
// import './App.css';
// import Home from './Home';
// import Navbar from './Navbar';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// function App() {
  
//   return (
//     <Router>
//     <div className="App">
//       <Navbar/>
//       <Switch>

//       <Route exact path="/">
//        <Home/>
//       </Route>

//       <Route path="/create">
//         <CreateMovies/>
//       </Route>

//       <Route path="/movie:id">
//         <MovieDetails/>
//       </Route>

//       </Switch>
//     </div>
//     </Router>
//   );
// }

// export default App;

// ---------------------------------------------------------------------------------------
          //  File not Found 

import './App.css';
import CreateMovies from './CreateMovies';
import MovieDetails from './MovieDetails';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FileNotFound from './FileNotFound';
          

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
            <Route exact path="/">     <Home/>        </Route>
            <Route path="/create">  <CreateMovies/>   </Route>
            <Route path="/movie:id">  <MovieDetails/> </Route>
            <Route path="*">    <FileNotFound/>       </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



