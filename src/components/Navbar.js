import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

function Navbar () {
  const a = useContext(noteContext)
  useEffect(() => {
    a.update()
    // eslint-disable-next-line 
  }, [])

  return (
    <div className='h-72 bg-gradient-to-r from-purple-300 to-pink-300'>
        <h1 className='text-5xl text-white font-bold flex items-start p-8 bg-green-200 rounded-full w-fit'>GURU CHELA ACADEMY</h1>
        <h1 className='bg-white w-64 mx-80 my-5 p-3 text-2xl rounded-full text-blue-700'>{a.state.name}</h1>
    </div>
  )
}

export default Navbar