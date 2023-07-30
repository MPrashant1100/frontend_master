import React from 'react'
import noteContext from '../context/notes/noteContext'
import { useContext } from 'react'

function Banner(props) {
  const b = useContext(noteContext)
  return (
    <>
        <div className='bg-slate-200'>
            <div className='flex p-10'>
                <div className='basis-1/4 bg-white rounded-lg'>IMG</div>
                <div className='basis-3/4 bg-white rounded-lg p-6 mx-5'>
                    <h1 className='text-3xl font-bold mb-5'>{props.topic}</h1>
                    <p className='text-xl mb-5'>{props.discription}</p>
                    <p>{props.mentor}</p>
                    <p>{b.name}</p>
                </div>
            </div>
        </div>    
    </>
    
  )
}

export default Banner