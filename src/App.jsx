import { useEffect, useRef, useState } from 'react'
import './App.css'
import LengthControl from './components/LengthControl';
import Display from './components/Display';
import TimerControl from './components/TimerControl';
import sound from './assets/audio/beep.wav'

function App() {

  const defaultState = {
    breakLength: 5,
    sessionLength: 25,
    currentTimer: 25*60,
    currentName: 'Session',
    isPlaying: false
  }

  const soundRef = useRef(null);
 
  const [timer, setTimer] = useState(defaultState)

  useEffect(()=>{
    const {isPlaying}=timer;
 
    let id=null
    if(isPlaying){
      id = setInterval(()=>{
        const { currentName, breakLength, sessionLength}=timer
        if(timer.currentTimer===0){
          soundRef.current.play();
          setTimer({
            ...timer,
            currentName: (currentName === 'Session')? 'Break': 'Session',
            currentTimer: (currentName === 'Session')? (breakLength*60) : (sessionLength*60)
          })
        }else{
          setTimer({
            ...timer,
            currentTimer: timer.currentTimer-1
          })
        }  
      },1000)
    }

    return ()=>clearInterval(id)
  },[timer.isPlaying, timer.currentTimer])


  const handlePlayOrStop = ()=>{
    const {isPlaying}=timer
    if(isPlaying){
      setTimer({
        ...timer,
        isPlaying: false
      });
    }else{
      setTimer({
        ...timer,
        isPlaying: true
      });
    }
  }
  
  const handleReset = ()=>{
    setTimer(defaultState);
    soundRef.current.pause();
    soundRef.current.currentTime = 0;
  }

  const handleLengthChange=( num, timerType )=>{
    const {
      sessionLength,
      breakLength,
      isPlaying,
      currentName,
    } = timer;

    let temp;

    if(timerType==='session'){
      temp = sessionLength + num;
    }else{
      temp = breakLength + num;
    }
    if(temp>0 && temp <61 && !isPlaying){
      setTimer({
        ...timer,
        [`${timerType}Length`]: temp,
        currentTimer:  currentName.toLowerCase()===timerType? temp*60 : timer.currentTimer 
      });
    }

  }

  return (
    <main className="App">
      <h1 className='main-title'>25 + 5 Clock</h1>
      <div className='control-timer-container'>
        <LengthControl 
          timerType={'break'} 
          timerLength={timer.breakLength}
          onIncrementDecrement={handleLengthChange}
          />
        <LengthControl
          timerType={'session'} 
          timerLength={timer.sessionLength}
          onIncrementDecrement={handleLengthChange}
          />
      </div>
      <Display 
        currentTimer={timer.currentTimer}
        timerType={timer.currentName}
        />
      <TimerControl 
        status={timer.isPlaying} 
        handlePlayOrStop={handlePlayOrStop} 
        handleReset={handleReset}/>
      <audio src={sound} id='beep' ref={soundRef} ></audio>
      <footer className='author'>
        <p>Designed and Coded by</p>
        <p className='nameAuthor'>Arturo Torres</p>
      </footer>
    </main>
  )
}

export default App
