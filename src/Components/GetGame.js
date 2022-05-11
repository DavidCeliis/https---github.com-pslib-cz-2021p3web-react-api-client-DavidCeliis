import React, { useEffect, useState } from 'react';
import axios from 'axios';

  export default function GetGame() {

      const[loading, setLoading]= useState(true);
      const[games, setGames]= useState([]);
      const Delete= (id) => {
        axios.delete(`http://localhost:54434/api/Game/${id}`)
        window.location.reload();
      }
      useEffect(()=>{
        axios.get(`http://localhost:54434/api/Game`)
        .then(res => {
          const games = res.data;
          setGames(games)
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
      return(<h1>Loading...</h1>)
    }
    return (
      <ul>
        {
          games
            .map(game => {
              return(
              <div key={game.GameId}>
                <li key={game.GameId}>{game.GameName},{game.GenreId}</li>
                <button onClick={() => Delete(game.GameId)}></button>
              </div>
              )
              }
            )
        }
      </ul>
    )
  }