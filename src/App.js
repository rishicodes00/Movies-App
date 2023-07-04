import React, {
  useEffect,
  useState,
} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './movieCard';

// api key:
//2ba4ea11
const apiUrl =
  'http://www.omdbapi.com/?apikey=2ba4ea11'; //http://www.omdbapi.com/?apikey=2ba4ea11

// const movie1 = {
//   Title: 'The Batman',
//   Year: '2022',
//   imdbID: 'tt1877830',
//   Type: 'movie',
//   Poster:
//     'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg',
// };

const App = () => {
  const [searchTerm, setSearchTerm] =
    useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(
      `${apiUrl}&s=${title}`
    );
    const data = await response.json();

    setMovies(data.Search);
  };

  // useEffect(() => {
  //   searchMovies('inception');
  // }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

//////////////////////////////////////////////////////////////////

// import React, {
//   useState,
//   useEffect,
// } from 'react';

// import MovieCard from './movieCard';
// import SearchIcon from './search.svg';
// import './App.css';

// const API_URL =
//   'http://www.omdbapi.com/?apikey=2ba4ea11';

// const App = () => {
//   const [searchTerm, setSearchTerm] =
//     useState('');
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     searchMovies('batman');
//   }, []);

//   const searchMovies = async (title) => {
//     const response = await fetch(
//       `${API_URL}&s=${title}`
//     );
//     const data = await response.json();

//     setMovies(data.Search);
//   };

//   return (
//     <div className="app">
//       <h1>MovieLand</h1>

//       <div className="search">
//         <input
//           value={searchTerm}
//           onChange={(e) =>
//             setSearchTerm(e.target.value)
//           }
//           placeholder="Search for movies"
//         />
//         <img
//           src={SearchIcon}
//           alt="search"
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>

//       {movies?.length > 0 ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <MovieCard movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
