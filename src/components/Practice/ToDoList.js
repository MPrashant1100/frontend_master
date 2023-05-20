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
    <div className='max-w-full h-screen bg-blue-200 py-2 px-2 rounded-md shadow'>
    <form className='bg-green-100 py-2 px-4 my-2 mx-auto w-fit rounded-md shadow' onSubmit={handleSubmit}>     {/* on submit the form  */}
        <div className=''>
            <label className='text-2xl py-4 px-5'>New Item</label>
            <input className='placeholder:italic placeholder:text-slate-400 bg-white border rounded-md py-2 pl-9 pr-3 shadow'
                type='text' placeholder='Add new item here'
                value={item}
                onChange={ e => setItem(e.target.value)}
            />
            <button className='bg-yellow-600 mx-4 py-2 px-3 mx-5 rounded-md'>Add</button>
        </div>        
    </form>
    <h1 className='flex justify-center bg-green-100 w-1/4 mx-auto text-2xl my-8 py-3 rounded-md shadow'>To-Do List</h1>
    <ul className='bg-white mx-auto rounded shadow'>
        {
         todos.map(item => {
            return (
                <li key={item}>
                    <label className='mx-2'>
                      <input type='checkbox' />
                      {item}
                    </label>
                 <button className='bg-red-600 mx-5 my-1 py-1 px-2 rounded-md hover:bg-red-700 text-white'>Delete</button>
                </li>
            )
         })
        }    
    </ul>
    </div>
    
    </>
  )
}

export default ToDoList