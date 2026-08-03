import React from 'react'
import { useState } from 'react';
const App = () => {
  const [colour, setColour] = useState('black');
  return (
    <div style={{backgroundColor: colour, height: '100vh'}}>

      <button onClick={()=>(colour ==='black'? setColour('white'):setColour('black'))}>Change Color</button>
    </div>
  )
}

export default App