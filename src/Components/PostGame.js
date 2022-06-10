import React from 'react';
import axios from 'axios';
import '../css/main.css';
import { FaPlus } from 'react-icons/fa';
const baseURL = "http://localhost:54434/api/Game";

export default function App() {
  const [postName, setPostName] = React.useState(null);
  async function createPost() {
    axios
      .post(baseURL, {
        GameName: postName
      })
      .catch(error => {this.setState({errorMessage: error.message});
      console.error("Error!", error);})
  }

  return (
      
      <div>
         <form>
           <label>
             Game:
             <input type="text" name="GameName" onChange={e => setPostName(e.target.value)} />
           </label>
           <button title="Add" onClick={createPost}><FaPlus/></button>
         </form>
      </div>

  );
}