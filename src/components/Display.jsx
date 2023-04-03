import React  from 'react'
import Timer from './Timer'
export default function Display({currentTimer, timerType}) { 
  const smallerFive = currentTimer < 6  && currentTimer % 2 === 1
  const equalZero = currentTimer === 0
  return (
    <section
     style={ equalZero? {border: '7px solid #89023E'} : smallerFive? {border: '7px dashed #89023E'} : {border: '7px solid #13353a'}}
     className='timer'>
        <h3 style={ equalZero? {color: '#89023E'} : {color: '#13353a'} } id='timer-label'>{timerType}</h3>
        <Timer time={currentTimer}/>
    </section>
  )
}