import React from 'react'
import {ReactComponent as MinusIcon} from '../assets/images/circle-minus-solid.svg';
import {ReactComponent as PlusIcon} from '../assets/images/circle-plus-solid.svg';

export default function LengthControl({timerType, timerLength, onIncrementDecrement}) {

  const timerName = timerType.charAt(0).toUpperCase()+timerType.slice(1); 
  
  const handleIncrement = ()=>{
    onIncrementDecrement(1,timerType);
  }

  const handleDecrement = ()=>{
    onIncrementDecrement(-1,timerType)
  }

  return (
    <div className='length-control'>
        <h3 id={`${timerType}-label`}>{`${timerName} Length`}</h3>
        <button onClick={handleDecrement} id={`${timerType}-decrement`} className='btn-level'>
          <MinusIcon/>
        </button>
        <p id={`${timerType}-length`} 
          className='btn-level'>{timerLength}</p>
        <button onClick={handleIncrement} id={`${timerType}-increment`} className='btn-level'><PlusIcon/></button>
    </div>
  )
}
