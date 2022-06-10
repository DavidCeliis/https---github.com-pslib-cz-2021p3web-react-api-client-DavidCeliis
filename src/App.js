import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetGame from './Components/GetGame';
import GetGenre from './Components/GetGenre';
import PostGame from './Components/PostGame';
import PostGenre from './Components/PostGenre';
import { FaCalculator, FaCar, FaCube, FaCubes, FaGamepad, FaOptinMonster, FaTrash, FaTrophy } from 'react-icons/fa';


import {Container, Navbar, NavbarBrand, Collapse, Nav,NavItem,NavLink, NavbarToggler} from "reactstrap";



function App() {
  return (
    <div className="App">
      <div className="topnav">
        <span style={{backgroundColor: "blue"}} href="http://localhost:3000/"><FaGamepad/></span>
        <span style={{backgroundColor: "red"}} href="http://localhost:3000/"><FaCar/></span>
        <span style={{backgroundColor: "green"}} href="http://localhost:3000/"><FaTrophy/></span>
        <span  style={{backgroundColor: "orange"}} href="http://localhost:3000/"><FaCube/></span>
      </div>
      <h3>GamesAndGenres</h3>
      <div className='grid-container-app'>
      <Container style={{border: '2px solid grey', padding: "20px", borderRadius: "5px", marginBottom:"20px"}}>
      <h2>Add new game</h2>
      <PostGame/>
      <h1>Games</h1>
      <div className='grid-container'>
      <span>Games</span>
      <span><FaTrash/></span>
      <span>Genres</span>
      </div>
      <GetGame/>
      </Container>
      <Container style={{border: '2px solid grey', padding: "20px", borderRadius: "5px", marginBottom:"20px"}}>
      <h2>Add new genre</h2>
      <PostGenre/>
      <h1>Genres</h1>
      <div className='grid-container-genre'>
      <span>Genres</span>
      <span><FaTrash/></span>
      </div>
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
