import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetGame from './Components/GetGame';
import GetGenre from './Components/GetGenre';
import PostGame from './Components/PostGame';
import PostGenre from './Components/PostGenre';
import { FaCar, FaCube, FaGamepad, FaTrophy } from 'react-icons/fa';


import {Container} from "reactstrap";

function App() {
  return (
    <div className="App">
      <div className="topnav">
        <span style={{backgroundColor: "blue"}} ><FaGamepad/></span>
        <span style={{backgroundColor: "red"}} ><FaCar/></span>
        <span style={{backgroundColor: "green"}} ><FaTrophy/></span>
        <span  style={{backgroundColor: "orange"}} ><FaCube/></span>
      </div>
      <h3>GamesAndGenres</h3>
      <div className='grid-container-app'>
      <Container style={{border: '2px solid grey', padding: "20px", borderRadius: "5px", marginBottom:"20px"}}>
      <h2>Add new game</h2>
      <PostGame/>
      <h1>Games</h1>
     
      <GetGame/>
      </Container>
      <Container style={{border: '2px solid grey', padding: "20px", borderRadius: "5px", marginBottom:"20px"}}>
      <h2>Add new genre</h2>
      <PostGenre/>
      <h1>Genres</h1>
      <GetGenre/>
      </Container>
      </div>
      <div className="footer">
        <p></p>
      </div>
    </div>
  )
}

export default App;
