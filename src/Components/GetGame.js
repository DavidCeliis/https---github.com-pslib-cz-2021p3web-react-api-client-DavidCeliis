import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/main.css';
import { FaTrashAlt } from 'react-icons/fa';
import {Tooltip} from "reactstrap";


  export default function GetGame() {

      const[loading, setLoading]= useState(true);
      const[games, setGames]= useState([]);
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
              <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}} key={game.GameId}>
                <p key={game.GameId}>{game.GameName},{game.GenreId}</p>
                <button title="Delete"className='Delete' onClick={() => Delete(game.GameId)}><FaTrashAlt/></button>
              </div>
              )
              }
            )
        }
      </div>
    )
  }