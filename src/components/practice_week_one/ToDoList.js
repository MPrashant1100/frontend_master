import React from 'react'
import { useState } from 'react'

function ToDoList() {
    const [item , setItem] = useState()
    const [todos, setTodos] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();           // use to prevent from reload
        setTodos ((todos) => [...todos, item])
        console.log('working')
        setItem('')
    }
    
  return (
    <>
    <form onSubmit={handleSubmit}>     {/* on submit the form  */}
        <div>
            <label>New Item</label>
            <input type='text' placeholder='Add new item here'
                value={item}
                onChange={ e => setItem(e.target.value)}
            />
            <button>Add</button>
        </div>        
    </form>
    <h1>To-do List</h1>
    <ul>
        {
         todos.map(item => {
            return (
                <li key={item}>
                    <label>
                      <input type='checkbox' />
                      {item}
                    </label>
                 <button>Delete</button>
                </li>
            )
         })
        }    
    </ul>
    </>
  )
}

export default ToDoList