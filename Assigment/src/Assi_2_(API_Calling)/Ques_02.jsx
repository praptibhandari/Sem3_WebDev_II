// Q2. Show First 10 Todos Easy
// The API returns 200 todos. Display only the first 10 on the screen (id and title). The full data should still be stored in state;
// you only limit what is shown
//Hint: use .slice(0, 10) before .map() .


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Ques_02 = () => {
    const[todos, SetTodos] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => SetTodos(data));
        
    },[])
  return (
    <div>
        <h2> 10 Todos</h2>
        {
            todos
            .slice(0, 10)
            .map(todo =>(
                <p key={todo.id}>
                    {todo.id} : {todo.title}
                </p>
            ))
        }
    


    </div>
  )
}

export default Ques_02