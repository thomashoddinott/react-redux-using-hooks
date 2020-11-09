import React from 'react'
import './App.css';

import { useSelector, useDispatch } from 'react-redux'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch({type:"INCREMENT"})}>INCREMENT</button>
      <button onClick={() => dispatch({type:"DECREMENT"})}>DECREMENT</button>
    </>
  );
}

export default App;