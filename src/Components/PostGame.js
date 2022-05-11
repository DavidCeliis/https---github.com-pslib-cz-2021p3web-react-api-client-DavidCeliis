import React from 'react';
import axios from 'axios';
const baseURL = "http://localhost:54434/api/Game";

export default function App() {
  const [postName, setPostName] = React.useState(null);
  async function createPost() {
    axios
      .post(baseURL, {
        GameName: postName
      });
  }

  return (
      
      <div>
         <form>
           <label>
             Game:
             <input type="text" name="GameName" onChange={e => setPostName(e.target.value)} />
           </label>
           <button onClick={createPost}>Add</button>
         </form>
      </div>

  );
}