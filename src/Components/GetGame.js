import React, { useState } from 'react';
import axios from 'axios';

  export default function GetGame() {
      const[loading, setLoading]= useState(true);
      const[games, setGames]= useState([]);
      axios.get(`http://localhost:54434/api/Game`)
        .then(res => {
          const games = res.data;
          setGames(games)
          setLoading(false);
        })
        .catch(error => {this.setState({errorMessage: error.message});
        console.error("Error!", error);
      });


    if(loading){
      return(<h1>Loading...</h1>)
    }
    return (
      <ul>
        {
          games
            .map(game =>
              <li key={game.GameId}>{game.GameName},{game.GenreId}</li>
            )
        }
      </ul>
    )
  }