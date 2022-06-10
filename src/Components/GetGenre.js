import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import '../css/main.css';

  export default function GetGenre() {

      const[loading, setLoading]= useState(true);
      const[genres, setGenres]= useState([]);
      const [GenreNameSearch, setGenreNameSearch] = useState("");
      const Delete= (id) => {
        axios.delete(`http://localhost:54434/api/Genres/${id}`)
        window.location.reload();
      }
      useEffect(()=>{
        axios.get(`http://localhost:54434/api/Genres/name?name=` + GenreNameSearch)
        .then(res => {
          const genres = res.data;
          setGenres(genres)
          setLoading(false);
        })
      },[GenreNameSearch]) 
      function handleChange(e) {
        setGenreNameSearch(e.target.value);
    }
    if(loading){
      return(<div className="loader"></div>)
    }
    return (
      <div>
        Search:
        <input type="text" onChange={handleChange} />
        <div className='grid-container-genre'>
        <span>Genre</span>
        <span><FaTrashAlt/></span>
        </div>
        {
          genres
            .map(genre => {
              return(
              <div className='grid-container-genre' key={genre.GenreId}>
                <span className='grid-item-genre' key={genre.GenreId}>{genre.GenreName}</span>
                <button title="Delete" className='Delete' onClick={() => Delete(genre.GenreId)}><FaTrashAlt/></button>
              </div>
              )
              }
            )
        }
      </div>
    )
  }