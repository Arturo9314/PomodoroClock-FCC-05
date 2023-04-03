import React from 'react'

export default function Timer({time}) {
    
    const minutes = Math.floor(time/60);
    const seconds = time %60;
    
    const minutesFormatted = String(minutes).padStart(2, '0');
    const secondsFormatted = String(seconds).padStart(2, '0');

    const equalZero = time === 0

    return (
        <p style={ equalZero? {color: '#89023E'} : {color: '#13353a'} } id='time-left'>{`${minutesFormatted}:${secondsFormatted}`}</p>
    )
}
