// Q1. Show Completed Todos Only Easy
// Fetch all todos and display on screen only the todos where completed is true . Show each todo's id and title .

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Ques_01 = () => {
const [todo, SetTodos] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => SetTodos(data));
    
    },[]);

  return (
    <div>
        <h2>Todo Completed</h2>

        {todo 
        .filter(todo=>todo.completed)
        .map(todo =>(
            <p key ={todo.id}>
            {todo.id} - {todo.title}
            </p>
        ))
        }
    </div>
  )
}

export default Ques_01