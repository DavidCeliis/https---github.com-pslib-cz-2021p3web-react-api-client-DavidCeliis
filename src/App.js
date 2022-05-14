import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetGame from './Components/GetGame';
import GetGenre from './Components/GetGenre';
import PostGame from './Components/PostGame';
import PostGenre from './Components/PostGenre';
import { FaGamepad } from 'react-icons/fa';


import {Container, Navbar, NavbarBrand, Collapse, Nav,NavItem,NavLink, NavbarToggler} from "reactstrap";



function App() {
  return (
    <div className="App">
      <div className="topnav" style={{ marginBottom: "100px" }}>
        <a className="active" href="http://localhost:3000/"><FaGamepad/></a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div style={{paddingBottom: "100px"}}>
      <Container style={{border: '2px solid grey', padding: "20px", borderRadius: "5px", marginBottom:"20px"}}>
      <h1>Games</h1>
      <GetGame/>
      </Container>
      <Container style={{border: '2px solid grey', padding: "20px", borderRadius: "5px"}}>
      <h2>Add new game</h2>
      <PostGame/>
      </Container>
      </div>
      <div style={{paddingBottom: "100px"}}>
      <Container style={{border: '2px solid grey', padding: "20px", borderRadius: "5px", marginBottom:"20px"}}>
      <h1>Genres</h1>
      <GetGenre/>
      </Container>
      <Container style={{border: '2px solid grey', padding: "20px", borderRadius: "5px"}}>
      <h2>Add new genre</h2>
      <PostGenre/>
      
      </Container>
      </div>
      <div class="footer">
        <p></p>
      </div>
    </div>
  )
}

export default App;
