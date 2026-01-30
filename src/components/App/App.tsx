import './App.module.css';
import fetchMovies from '../../services/movieService';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import type { Movie } from '../../types/movie';
import toast, { Toaster } from 'react-hot-toast';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('')
  const [isLoading, setisloading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (!query) {
      return;
    }
    const getMovies = async () => {
      try {
        setIsError(false);
        setisloading(true);
        const data = await fetchMovies(query);
        if (data.results.length === 0) {
          toast.error('No movies found for your request.');
          return;
        }
        setMovies(data.results);
      } catch (error) {
        setIsError(true);
        toast.error('Something went wrong. Please try again.');
        console.log(error);
      }
      finally {
        setisloading(false)
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
      {isLoading&& <Loader/>}
      {isError&& <ErrorMessage/>}
      {movies.length > 0 && !isError && !isLoading && <MovieGrid onSelect={((movie) => console.log('Selected movie:', movie))} movies= {movies}/>}
    </>
  );
}

export default App;
