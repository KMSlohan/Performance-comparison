import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import A from './A';
import B from './B';

function App() {

  const [value, setValue] = useState("")
  const [posts, setposts] = useState([])
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
     .then(posts => setposts(posts))
  }, [])
  
    return (
      <div style={{ padding: '1rem' }}>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
        />
  
        <div style={{  display: 'flex' }}>
          <A message={value} posts={posts}/>
          <B message={value} posts={posts}/>
        </div>
      </div>
    )
  }


export default App;
