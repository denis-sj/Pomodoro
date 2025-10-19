import { useState, createContext } from 'react'


export const TimerContext = createContext()

export const TimerProvider = ({ children }) => {

    const [current, setCurrent] = useState('pomodoro')
    
    const [counter, setCounter] = useState({
        counterPomodoro: 1,
        counterShortBreak: 1,
        counterLongBreak: 1
    })

    return (
        <TimerContext.Provider value={{
            current,
            counter,
            setCurrent,
            setCounter,
        }}>
            {children}
        </TimerContext.Provider>
    )
}