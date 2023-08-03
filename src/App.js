import React from 'react';
import { actions } from './store/store';
import { useSelector , useDispatch } from 'react-redux';
import './App.css';



function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(actions.increment())
  }
  const decrement = () => {
    dispatch(actions.decrement())
  }
  const addBy = () => {
    dispatch(actions.addBy(10))
  }
  return (
    <>
      <div>
        <h1>Counter {counter}</h1>
        <button onClick ={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={addBy}>Add Value</button>
      </div>
    </>
  );
}

export default App;
