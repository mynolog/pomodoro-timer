import { useTimer } from 'react-timer-hook'
import { FaPersonRunning, FaPerson } from 'react-icons/fa6'
import {
  VscDebugStart,
  VscDebugPause,
  VscDebugRestart,
  VscDebugContinue,
} from 'react-icons/vsc'
import { formatTimeUnit } from '../../utils/formatter'

function Timer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn('onExpire called'),
      autoStart: false,
    })

  const initTimer = () => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + 25 * 60)
    restart(time)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="text-8xl font-degital rounded">
        <span>{formatTimeUnit(minutes)}</span>:
        <span>{formatTimeUnit(seconds)}</span>
      </div>
      <p className="text-3xl">
        {isRunning ? <FaPersonRunning /> : <FaPerson />}
      </p>
      <div className="flex gap-3 text-5xl">
        <button onClick={start}>{<VscDebugStart />}</button>
        <button onClick={pause}>{<VscDebugPause />}</button>
        <button onClick={resume}>{<VscDebugContinue />}</button>
        <button onClick={initTimer}>{<VscDebugRestart />}</button>
      </div>
    </div>
  )
}

export default Timer
