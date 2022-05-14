import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import '../css/main.css';

  export default function GetGenre() {

      const[loading, setLoading]= useState(true);
      const[genres, setGenres]= useState([]);
      const Delete= (id) => {
        axios.delete(`http://localhost:54434/api/Genres/${id}`)
        window.location.reload();
      }
      useEffect(()=>{
        axios.get(`http://localhost:54434/api/Genres`)
        .then(res => {
          const genres = res.data;
          setGenres(genres)
          setLoading(false);
        })
      },[]) 
 
    if(loading){
      return(<div className="loader"></div>)
    }
    return (
      <div>
        {
          genres
            .map(genre => {
              return(
              <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}} key={genre.GenreId}>
                <p key={genre.GenreId}>{genre.GenreName},{genre.Games}</p>
                <button title="Delete" className='Delete' onClick={() => Delete(genre.GenreId)}><FaTrashAlt/></button>
              </div>
              )
              }
            )
        }
      </div>
    )
  }