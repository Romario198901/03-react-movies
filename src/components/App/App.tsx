import './App.module.css';
import fetchMovies from '../../services/movieService';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import type { Movie } from '../../types/movie';
import toast, { Toaster } from 'react-hot-toast';
import MovieGrid from '../MovieGrid/MovieGrid';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    if (!query) {
      return;
    }
    const getMovies = async () => {
      try {
        const data = await fetchMovies(query);
        if (data.results.length === 0) {
          toast.error('No movies found for your request.');
          return;
        }
        setMovies(data.results);
      } catch (error) {
        toast.error('Something went wrong. Please try again.');
        console.log(error);
      }
    };
    getMovies();
  }, [query]);
  const handleSearch = (formData: FormData) => {
    const searchTerm = formData.get('query') as string;
    setQuery(searchTerm);
     setMovies([]);
  };
  return (
    <>
      { <Toaster position="top-right" reverseOrder={false} />}
      <SearchBar onSubmit={handleSearch} />
      {movies.length > 0 && <MovieGrid onSelect={((movie) => console.log('Selected movie:', movie))} movies= {movies}/>}
    </>
  );
}

export default App;
