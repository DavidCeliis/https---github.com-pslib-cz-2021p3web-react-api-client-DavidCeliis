import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/main.css';
import { FaTrashAlt } from 'react-icons/fa';
import {Tooltip} from "reactstrap";


  export default function GetGame() {

      const[loading, setLoading]= useState(true);
      const[games, setGames]= useState([]);
      const[genres, setGenres]= useState([]);
      const Delete= (id) => {
        axios.delete(`http://localhost:54434/api/Game/${id}`)
        setTimeout(GetGame, 500);
        window.location.reload();
       
       
      }
      useEffect(()=>{
        axios.get(`http://localhost:54434/api/Game`)
        .then(res => {
          const games = res.data;
          setGames(games)
          setLoading(false);
          console.log(games[5]);
        })
        axios.get(`http://localhost:54434/api/Genres`)
        .then(res => {
          const genres = res.data;
          setGenres(genres)
          setLoading(false);
        })
      },[]) 
      // function UseFetch(){
      //   axios.get(`http://localhost:54434/api/Game`)
      //   .then(res => {
      //     const games = res.data;
      //     setGames(games)
      //     setLoading(false);
      //   })
      // }
        // .catch(error => {this.setState({errorMessage: error.message});
        // console.error("Error!", error);
     

 
    if(loading){
      return(<div className="loader"></div>)
    }
    return (
      <div>
        {
          games
            .map(game => {
              return(
             
              <div>
                <div className='grid-container' key={game.GameId}>
                <span className='grid-item'>{game.GameName}</span>
                <button title="Delete"className='Delete grid-item' onClick={() => Delete(game.GameId)}><FaTrashAlt/></button>
                {genres.map(genre =>{
                  if(genre.GenreId === game.GenreId){
                    console.log(genre);
                    return (<span className='grid-item'>{genre.GenreName}</span>
                    
                    )
                  }
                  else{
                    <p>no genre</p>
                  }

                })}
                </div>
              </div>
              )
              
              }
             
            )
        }
      </div>
      
      // <p>{JSON.stringify(games)}</p>
    )
  }