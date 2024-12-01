import type { Dispatch, SetStateAction } from 'react'
import { useTime } from 'react-timer-hook'
import { TbClock12, TbClock24 } from 'react-icons/tb'
import { formatTimeUnit } from '../../utils/formatUtils'
import type { ClockMode } from '../../pages/liveClock/LiveTime'
import Button from '../common/Button/Button'

type ClockProps = {
  clockMode: ClockMode
  setClockMode: Dispatch<SetStateAction<ClockMode>>
}

const Clock = ({ clockMode, setClockMode }: ClockProps) => {
  const { minutes, hours, ampm } = useTime({
    format: clockMode === '24' ? undefined : '12-hour',
  })

  const handleToggleClockMode = () => {
    setClockMode(clockMode === '24' ? '12' : '24')
  }

  return (
    <div className="w-[600px] h-screen flex flex-col justify-center items-center gap-9">
      <div
        className={`relative flex justify-center items-center gap-2 text-8xl font-degital rounded text-green-900}`}
      >
        <div
          className={`absolute -left-32 w-28 flex justify-center items-center text-teal-800 ${clockMode === '24' ? 'invisible' : 'visible'} `}
        >
          {ampm || ''}
        </div>
        <div className="w-28 h-[176px] flex flex-col gap-1 items-center justify-center">
          {formatTimeUnit(hours)}
        </div>
        <div className="animate-blink">:</div>
        <div className="w-28 flex gap-1 items-center justify-center">
          {formatTimeUnit(minutes)}
        </div>
      </div>
      <div className="flex gap-3 text-4xl">
        <Button onClick={handleToggleClockMode}>
          {clockMode === '24' ? <TbClock12 /> : <TbClock24 />}
        </Button>
      </div>
    </div>
  )
}

export default Clock
