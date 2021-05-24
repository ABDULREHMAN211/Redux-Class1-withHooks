import React from 'react';
import {useSelector} from 'react-redux'

function CounterDisplay() {
    const Counter = useSelector((state)=>{
        return state.Counter
    })
  return (
    <div >
        Counter Display {Counter}
    </div>
  );
}

export default CounterDisplay;