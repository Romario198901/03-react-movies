// import { useState } from 'react'

import './App.css'
import fetchMovies, { myKey } from '../../services/movieService'

function App() {
 console.log(myKey);
 
  const query = 'batman'
 const data =  fetchMovies(query);
 console.log(data);
  return (
    <>
    
    </>
  )
}

export default App
