import React, { useState } from 'react'

const ques_01 = () => {
    let[count,SetCount] = useState(0);
  return (
      <div>
        <h2>Count={count}</h2>
        <button onClick={() =>(count == 0? SetCount(0):SetCount(count-1))}>Decrement</button>
        <br/>
        <button onClick={()=>(SetCount(count = 0))}>Resest</button>
        
        <button onClick={()=>(count == 10 ? SetCount(10):SetCount(count+1))}>Increment</button>
    </div>
  )
}

export default ques_01