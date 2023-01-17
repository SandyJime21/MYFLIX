import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Main from '../components/Main';
import Row from "../components/Row";
import requests from '../Request';


export const Home = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  return (
    <>
    
    <Main 
    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
   alt={movie?.title}
   h1={movie?.title}
   relesed={movie?.release_date}
   relesedClass={'text-gray-400 text-sm xs:p-3'}
   overview={movie?.overview}   
    />  
    <p className="text-blue-600 md:text-xl font-bold cursor-pointer sm:text-md">Movie Database Center</p>
    <Row rowId='1' title='Top Rated' fetchURL={requests.requestTopRated}/>
    <Row rowId='2' title='Popular' fetchURL={requests.requestPopular}/> 
    <Row rowId='3' title='Upcoming' fetchURL={requests.requestUpcoming}/>
  
    </>
  )
}
export default Home;