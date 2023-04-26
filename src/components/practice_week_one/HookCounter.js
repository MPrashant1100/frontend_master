import React,{useState} from 'react'

function HookCounter() {
  
  const [count, setCount] = useState(0)  // array distructuring
  const [subscribe, setState] = useState(0)
  return (
    <>
    <div>
        <button onClick={ () => setCount(count + 1)}>Count - {count}</button>
    </div>
    <div>
        <button onClick={ () => setState(`${subscribe}d`)}>Subscribe{subscribe}</button>
    </div>
    </>    
  )
}

export default HookCounter