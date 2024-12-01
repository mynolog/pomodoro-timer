import { useStopwatch } from 'react-timer-hook'
import { VscDebugStart, VscDebugPause, VscDebugRestart } from 'react-icons/vsc'
// import { TbClockCheck } from 'react-icons/tb'
import { formatTimeUnit } from '../../utils/formatUtils'
import Button from '../common/Button/Button'

const TimeKeeper = () => {
  const { seconds, minutes, start, pause, reset, isRunning } = useStopwatch({
    autoStart: false,
  })

  const handleReset = () => {
    reset(undefined, false)
  }

  return (
    <div className="w-[600px] h-screen flex flex-col justify-center items-center gap-9">
      <div
        className={`relative flex justify-center items-center gap-2 text-8xl font-degital rounded text-green-900}`}
      >
        <div className="w-28 h-[176px] flex flex-col gap-1 items-center justify-center">
          {formatTimeUnit(minutes)}
        </div>
        <div>:</div>
        <div className="w-28 flex gap-1 items-center justify-center">
          {formatTimeUnit(seconds)}
        </div>
      </div>
      <div className="flex gap-3 text-4xl">
        {isRunning ? (
          <>
            <Button onClick={pause}>{<VscDebugPause />}</Button>
          </>
        ) : (
          <>
            <Button onClick={start}>{<VscDebugStart />}</Button>
          </>
        )}
        <Button onClick={handleReset}>{<VscDebugRestart />}</Button>
      </div>
    </div>
  )
}

export default TimeKeeper
