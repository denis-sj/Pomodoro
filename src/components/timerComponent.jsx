import { useState, useEffect } from 'react'
import Button from './buttonComponent.jsx'

function Timer({ number, current, setCurrent, setCounter }) {

  const [seconds, setSeconds] = useState(number)

  // const [details, setDetails] = useState({
  //   isActive: false,
  //   timer: 25,
  // })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval = null

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1)
      }, 1000)
    }

    if (seconds === 0) {
      setIsActive(false)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }

  }, [isActive, seconds])

  const time = (seconds) => {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60

    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
  }

  const Next = () => {
    if (current === "pomodoro") {
      setCurrent("shortBreak")
      setCounter(prev => ({ ...prev, counterPomodoro: prev.counterPomodoro + 1 }))
    } else if (current === "shortBreak") {
      setCurrent("pomodoro")
      setCounter(prev => ({ ...prev, counterShortBreak: prev.counterShortBreak + 1 }))
    } else if (current === "longBreak") {
      setCurrent("pomodoro")
      setCounter(prev => ({ ...prev, counterLongBreak: prev.counterLongBreak + 1 }))
    }
  }

  return (
    <div>
      <form className="flex flex-col items-center">
        <span className="text-white text-8xl font-bold mb-8 tracking-tight font-mono">{time(seconds)}</span>
        {isActive ?
          <div className="flex gap-4">
            <Button onClick={() => { setIsActive(false) }} text="Pause" />
            <Button onClick={() => { setIsActive(false); setSeconds(prev => number) }} text="Reset" />
            <Button onClick={Next} text="тут должна быть стрелка" />
          </div>
          : <Button onClick={() => { setIsActive(true); }} text="Start" />

        }
      </form>
    </div>
  )
}

export default Timer