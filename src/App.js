import './App.css';
import GetGame from './Components/GetGame';
import {Container} from "reactstrap";
import PostGame from './Components/PostGame';
import DeleteGame from './Components/DeleteGame';

function App() {
  return (
    <div className="App">
      <Container>
      <h1>API - Games</h1>
      <h2>Get Games</h2>
      <GetGame/>
      <h2>Add new game</h2>
      <PostGame/>
      <h2>Delete game</h2>
      <DeleteGame/>
      </Container>
    </div>
  )
}

export default App;
