import React from 'react'
import { ReactComponent as ResetIcon} from '../assets/images/rotate-left-solid.svg'
import { ReactComponent as PlayIcon} from '../assets/images/circle-play-solid.svg'
import { ReactComponent as PauseIcon} from '../assets/images/circle-pause-solid.svg'

export default function TimerControl({status, handlePlayOrStop, handleReset}) {

  const icon = status? <PauseIcon/> : <PlayIcon/>
  
  return (
    <div className='timer-control'>
        <button onClick={handlePlayOrStop} id='start_stop'>{icon}</button>
        <button onClick={handleReset} id='reset'><ResetIcon/></button>
    </div>
  )
}
