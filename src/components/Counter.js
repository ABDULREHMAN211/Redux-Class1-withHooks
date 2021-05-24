import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

function Counter() {
  // const [Counter, setCounter] = useState(0);
  const [value, setvalue] = useState(0);
  const dispatch = useDispatch();
  const Counter = useSelector( (state)=>{
    return state.Counter
  });
  return (
    <div >
      <div>Counter: {Counter}</div>
      <div>
        <button onClick={()=>{
          // setCounter(Counter+1);
          dispatch( {type:"INCREMENT"} )
        }}>Increment</button>
        <br/>
        <button onClick={()=>{
          // setCounter(Counter-1);
          dispatch( {type:"DECREMENT"} )
        }}>Decrement</button>
      </div>
      <div>
        <input type="text" onChange={(e)=> {
          setvalue(e.target.value);
        }}/>
        <br/>
        <button onClick={()=>{
          // setCounter(Counter + Number(value));
          dispatch( {type: "INCREMENT_BY_AMOUNT", payload: Number(value) } )
        }}>Increment by value.</button>
      </div>
    </div>
  );
}

export default Counter;