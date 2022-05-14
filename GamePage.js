import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetGame from './Components/GetGame';
import {Container, Navbar, NavbarBrand, Collapse, Nav,NavItem,NavLink, NavbarToggler} from "reactstrap";
import PostGame from './Components/PostGame';


function App() {
  return (
    <div className="App">
      <div style={{paddingBottom: "100px"}}>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand href="App.js">
            Games
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/GamePage">
                  Games
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="GenrePage">
                  Genres
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <Container style={{border: '2px solid grey', padding: "20px", borderRadius: "5px", marginBottom:"20px"}}>
      <h1>Games</h1>
      <GetGame/>
      </Container>
  
    </div>
  )
}

export default App;
