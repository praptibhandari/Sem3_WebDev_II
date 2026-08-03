import React from 'react'
import { useState } from 'react';

const App = () => {
  const [count, SetCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      
      <button onClick={() =>(count == 0? SetCount(0):SetCount(count-1))}>decrement</button>
      <button onClick={()=>SetCount(0)}>reset</button>
      <button onClick ={() =>(count ==10? SetCount(10):SetCount(count+1))}>increment</button>

    </div>
  )
}

export default App