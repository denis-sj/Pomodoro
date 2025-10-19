import { useContext } from 'react'
import Button from './components/buttonComponent'
import Timer from './components/timerComponent'
import { TimerContext } from './contexts/timerContext'

function App() {
  const {
    current,
    setCurrent,
    counter,
    setCounter
  } = useContext(TimerContext)

  return (
    <div className="w-screen h-screen bg-red-500 flex items-center justify-center">
      <div className="bg-red-600/90 rounded-3xl p-12 flex flex-col items-center min-w-[30rem]">
        <div className="flex gap-11 rounded-lg overflow-hidden mb-8 ">
          <Button onClick={() => setCurrent("pomodoro")} text="Pomodoro" />
          <Button onClick={() => setCurrent("shortBreak")} text="Short Break" />
          <Button onClick={() => setCurrent("longBreak")} text="Long Break" />
        </div>
        {/* Timer pomodoro */}
        {current === 'pomodoro' &&
          <div className="flex flex-col items-center">
            <Timer number={1500} current={current} setCurrent={setCurrent} setCounter={setCounter} />
            <div className="text-center mt-8">
              <h1 onClick={() => setCounter(prev => ({ ...prev, counterPomodoro: 1 }))} className="text-white text-xl font-medium mb-2 cursor-pointer">
                #{counter.counterPomodoro}

              </h1>
              <h2 className="text-white/80 text-lg">Time to focus!</h2>
            </div>
          </div>}


        {/* Timer shortBreak */}
        {current === 'shortBreak' &&
          <div className="flex flex-col items-center">
            <Timer number={300} current={current} setCurrent={setCurrent} setCounter={setCounter} />

            <h1 onClick={() => setCounter(prev => ({ ...prev, counterShortBreak: 1 }))} className="text-white text-xl font-medium mb-2 cursor-pointer">
              #{counter.counterShortBreak}
            </h1>
            <h2 className="text-white/80 text-lg">Time for a break!</h2>
          </div>}

        {/* Timer longBreak */}
        {current === 'longBreak' &&
          <div className="flex flex-col items-center">
            <Timer number={900} current={current} setCurrent={setCurrent} setCounter={setCounter} />

            <h1 onClick={() => setCounter(prev => ({ ...prev, counterLongBreak: 1 }))} className="text-white text-xl font-medium mb-2 cursor-pointer">
              #{counter.counterLongBreak}
            </h1>
            <h2 className="text-white/80 text-lg">Time for a break!</h2>
          </div>}
      </div>
    </div>
  );
}

export default App;
