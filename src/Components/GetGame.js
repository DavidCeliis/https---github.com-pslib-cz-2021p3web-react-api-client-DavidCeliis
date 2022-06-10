import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/main.css';
import { FaTrashAlt } from 'react-icons/fa';



  export default function GetGame() {

      const[loading, setLoading]= useState(true);
      const[games, setGames]= useState([]);
      const[genres, setGenres]= useState([]);
      const [GameNameSearch, setGameNameSearch] = useState("");
      const Delete= (id) => {
        axios.delete(`http://localhost:54434/api/Game/${id}`)
        setTimeout(GetGame, 500);
        window.location.reload();
       
       
      }
      useEffect(()=>{
        axios.get(`http://localhost:54434/api/Game/name?name=` + GameNameSearch)
        .then(res => {
          const games = res.data;
          setGames(games)
          setLoading(false);
        })
        axios.get(`http://localhost:54434/api/Genres`)
        .then(res => {
          const genres = res.data;
          setGenres(genres)
          setLoading(false);
        })
      },[GameNameSearch]) 

    function handleChange(e) {
      setGameNameSearch(e.target.value);
  }
 
    if(loading){
      return(<div className="loader"></div>)
    }
    return (
      <div>
        Search:
        <input type="text" onChange={handleChange} />
         <div className='grid-container'>
      <span>Game</span>
      <span>Genre</span>
      <span><FaTrashAlt/></span>
      </div>
        {
          games
            .map(game => {
              if(game.GenreId === null){
               
              return(
              <div>
                <div className='grid-container' key={game.GameId}>
                
                <span className='grid-item'>{game.GameName}</span>
                
                <span className='grid-item-genre-in-games'>No genre</span>
                <button title="Delete"className='Delete grid-item' onClick={() => Delete(game.GameId)}><FaTrashAlt/></button>
                {genres.map(genre =>{
                  if(genre.GenreId === game.GenreId){
                    return (<span className='grid-item'>{genre.GenreName}</span>
                    
                    )
                  }
                })}
              
                </div>
              </div>
              )
             
            }
            else{
              return(
                
                <div>
                  <div className='grid-container' key={game.GameId}>
                  <span className='grid-item'>{game.GameName}</span>
                  
                  
               
                  {genres.map(genre =>{
                    if(genre.GenreId === game.GenreId){
                      return (<span className='grid-item-genre-in-games'>{genre.GenreName}</span>
                      
                      )
                    }
                  
                  })}
                <button title="Delete"className='Delete grid-item' onClick={() => Delete(game.GameId)}><FaTrashAlt/></button>
                  </div>
                </div>
                )
            }
              }
             
            )
        }
      </div>
      
    )
  }