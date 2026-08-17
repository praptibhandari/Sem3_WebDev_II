// Q3. Filter Todos by User ID 
// Add 3 buttons labelled "User 1", "User 2", "User 3". When a button is clicked, show only the todos belonging to that
// userId . Keep the original full data in one state, and show the filtered result on screen.
// Hint: keep the full list untouched; filter a copy based on the clicked userId.

import React, { useEffect, useState } from 'react'

const Ques_03 = () => {
    const [userId, SetUserId] = useState();
    const [todos, SetTodos] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then (res => res.json())
        .then (data => SetTodos(data))
    },[])
  return (
    <div>
        <h4>Click to see the user</h4>
        <button onClick={() => SetUserId(1)}>User1</button>
        <button onClick={() => SetUserId(2)}>User2</button>
        <button onClick={() => SetUserId(3)}>User3</button>

        {todos
        .filter (todos => todos.userId === userId)
        .map(todos =>(
            <p key ={todos.id}>
                {todos.id}: {todos.title}
            </p>
        ))
        }
    </div>
  )
}

export default Ques_03