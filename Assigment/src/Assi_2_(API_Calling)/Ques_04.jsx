// Q4. Delete a Todo Medium
// Show each todo with a "Delete" button next to it. Clicking Delete should remove only that todo from the screen, and the
// rest should stay. The list must update immediately.
// Hint: use .filter() to keep every todo whose id is not equal to the clicked id, then update state with the result.

import React, { useEffect, useState } from 'react'

const Ques_04 = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    return (
        <div>
            <h2>Todos</h2>

            {todos.map(todo => (
                <p key={todo.id}>
                    {todo.id}: {todo.title}

                    <button onClick={() => deleteTodo(todo.id)}>
                        Delete
                    </button>
                </p>
            ))}
        </div>
    )
}

export default Ques_04