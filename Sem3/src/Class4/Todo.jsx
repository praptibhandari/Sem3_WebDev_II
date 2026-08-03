// import React from 'react'

// const Todo = () => {
//     const [task, setTask] = useState("");
//     const [todos, setTodos] = useState([]);

//   return (
//     <div>
//         <input
//         type ="text"
//         placeholder='enter anything'
//         onChange ={(e)=>setTask(e.target.value)}
//         value ={todos}
//         />
//         <button > add</button>
        
//     </div>
//   )
// }

// export default Todo

import React from 'react'
import { useReducer } from 'react'

const Todo = () => {

    let inp = document.querySelector("input")

    function reduser(state,action){
        if(action.type=="add"){
            return [...state,inp.value]
        }
    }
    let [state,dispatch]=useReducer(reduser,[])
  return (
    <div>
      <h1>Todo List</h1>
        <input type="text" placeholder='Enter your task'/>
        <button onClick={()=>dispatch({type:"add"})}>Add</button>
        <ul>
            {state.map((task,index)=>(
                <li key={index}>{task}</li>
            ))} 
        </ul>
    </div>
  )
}

export default Todo

